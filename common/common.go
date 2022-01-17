package common

import (
	"bytes"
	"fmt"
	"image"
	"image/color"
	"image/draw"
	"image/jpeg"
	"log"
	"math"
	"os"
	"runtime"
	"strings"
	"time"

	"github.com/gabriel-vasile/mimetype"
	v1 "github.com/sonr-io/sonr/common/v1"
)


type Direction = v1.Direction

type FileItem = v1.FileItem

type Payload = v1.Payload

type Payload_Item = v1.Payload_Item

type SupplyItem = v1.SupplyItem

type Thumbnail = v1.Thumbnail

type MIME = v1.MIME

type Connection = v1.Connection

type Location = v1.Location

type Metadata = v1.Metadata

type Peer = v1.Peer

type Profile = v1.Profile

// NewFileItem creates a new transfer file item
func NewFileItem(path string, tbuf []byte) (*Payload_Item, error) {
	// Extracts File Infrom from path
	fi, err := os.Stat(path)
	if err != nil {
		return nil, err
	}

	// Create MIME
	mime, err := NewMime(path)
	if err != nil {
		return nil, err
	}

	// Create Thumbnail on goroutine
	thumbCh := make(chan *Thumbnail)
	go NewThumbnail(path, tbuf, mime, thumbCh)

	// Await Thumbnail
	thumb := <-thumbCh

	// Create File Item
	fileItem := &FileItem{
		Mime:         mime,
		Path:         path,
		Size:         fi.Size(),
		Name:         fi.Name(),
		LastModified: fi.ModTime().Unix(),
		Thumbnail:    thumb,
	}

	// Returns transfer item
	return &v1.Payload_Item{
		Size: fi.Size(),
		Mime: mime,
		Data: &v1.Payload_Item_File{
			File: fileItem,
		},
	}, nil
}

// NewDefaultLocation returns the Sonr HQ as default location
func NewDefaultLocation() *Location {
	return &Location{
		Latitude:  float64(40.673010),
		Longitude: float64(-73.994450),
		Placemark: &v1.Location_Placemark{
			Name:                  "Sonr HQ",
			Street:                "94 9th St.",
			IsoCountryCode:        "US",
			Country:               "United States",
			AdministrativeArea:    "New York",
			SubAdministrativeArea: "Brooklyn",
			Locality:              "Brooklyn",
			SubLocality:           "Gowanus",
			PostalCode:            "11215",
		},
	}
}

// ** ───────────────────────────────────────────────────────
// ** ─── MIME Management ───────────────────────────────────
// ** ───────────────────────────────────────────────────────
// DefaultUrlMIME is the standard MIME type for URLs
func DefaultUrlMIME() *MIME {
	return &MIME{
		Type:    v1.MIME_TYPE_URL,
		Subtype: ".html",
		Value:   "url/html",
	}
}

// NewMime creates a new MIME type from Path
func NewMime(path string) (*MIME, error) {
	// Check if path to file exists
	if _, err := os.Stat(path); os.IsNotExist(err) {
		return nil, err
	}

	// Get MIME Type and Set Proto Enum
	mtype, err := mimetype.DetectFile(path)
	if err != nil {
		return nil, err
	}

	// Return MIME Type
	return &MIME{
		Type:    v1.MIME_Type(v1.MIME_Type_value[strings.ToUpper(mtype.Parent().String())]),
		Value:   mtype.String(),
		Subtype: mtype.Extension(),
	}, nil
}

// NewThumbnail creates a new thumbnail for the given file
func NewThumbnail(path string, tbuf []byte, mime *MIME, ch chan *Thumbnail) {
	if mime.IsImage() {
		data, err := genImageThumbnail(path)
		if err == nil {
			ch <- &Thumbnail{
				Buffer: data,
				Mime:   mime,
			}
			return
		}
	} else {
		if tbuf != nil {
			ch <- &Thumbnail{
				Buffer: tbuf,
				Mime:   mime,
			}
		}
		return
	}
	ch <- nil
}

func genImageThumbnail(path string) ([]byte, error) {
	// Open Image
	f, err := os.Open(path)
	if err != nil {
		return nil, err
	}
	defer f.Close()
	srcImage, _, _ := image.Decode(f)

	// Dimension of new thumbnail 240 X 300
	dstImage := resizeImage(srcImage, 240, 300)
	buf := new(bytes.Buffer)
	err = jpeg.Encode(buf, dstImage, &jpeg.Options{Quality: 75})
	if err != nil {
		return nil, err
	}
	return buf.Bytes(), nil
}

func resizeImage(img image.Image, length int, width int) image.Image {
	//truncate pixel size
	minX := img.Bounds().Min.X
	minY := img.Bounds().Min.Y
	maxX := img.Bounds().Max.X
	maxY := img.Bounds().Max.Y
	for (maxX-minX)%length != 0 {
		maxX--
	}
	for (maxY-minY)%width != 0 {
		maxY--
	}
	scaleX := (maxX - minX) / length
	scaleY := (maxY - minY) / width

	imgRect := image.Rect(0, 0, length, width)
	resImg := image.NewRGBA(imgRect)
	draw.Draw(resImg, resImg.Bounds(), &image.Uniform{C: color.White}, image.ZP, draw.Src)
	for y := 0; y < width; y += 1 {
		for x := 0; x < length; x += 1 {
			averageColor := getImageAverageColor(img, minX+x*scaleX, minX+(x+1)*scaleX, minY+y*scaleY, minY+(y+1)*scaleY)
			resImg.Set(x, y, averageColor)
		}
	}
	return resImg
}

func getImageAverageColor(img image.Image, minX int, maxX int, minY int, maxY int) color.Color {
	var averageRed float64
	var averageGreen float64
	var averageBlue float64
	var averageAlpha float64
	scale := 1.0 / float64((maxX-minX)*(maxY-minY))

	for i := minX; i < maxX; i++ {
		for k := minY; k < maxY; k++ {
			r, g, b, a := img.At(i, k).RGBA()
			averageRed += float64(r) * scale
			averageGreen += float64(g) * scale
			averageBlue += float64(b) * scale
			averageAlpha += float64(a) * scale
		}
	}

	averageRed = math.Sqrt(averageRed)
	averageGreen = math.Sqrt(averageGreen)
	averageBlue = math.Sqrt(averageBlue)
	averageAlpha = math.Sqrt(averageAlpha)

	averageColor := color.RGBA{
		R: uint8(averageRed),
		G: uint8(averageGreen),
		B: uint8(averageBlue),
		A: uint8(averageAlpha)}

	return averageColor
}

func imgToBytes(img image.Image) []byte {
	var opt jpeg.Options
	opt.Quality = 80

	buff := bytes.NewBuffer(nil)
	err := jpeg.Encode(buff, img, &opt)
	if err != nil {
		log.Fatal(err)
	}

	return buff.Bytes()
}

// DefaultProfileOption is a type for Profile Options
type DefaultProfileOption func(profileOpts)

// profileOpts contains the options for generating a new Profile
type profileOpts struct {
	refProfile *Profile
	sname      string
	firstName  string
	lastName   string
	picture    []byte
	bio        string
}

// defaultProfileOpts returns the default profile options
func defaultProfileOpts() profileOpts {
	return profileOpts{
		sname:     fmt.Sprintf("a%s", runtime.GOOS),
		firstName: "Anonymous",
		lastName:  runtime.GOOS,
		picture:   make([]byte, 0),
	}
}

// NewDefaultProfile creates a new default Profile
func NewDefaultProfile(options ...DefaultProfileOption) *Profile {
	// Set default options
	opts := defaultProfileOpts()
	for _, option := range options {
		option(opts)
	}

	// Create Profile Build Func
	buildProfile := func(opts profileOpts) *Profile {
		return &Profile{
			SName:        opts.sname,
			FirstName:    opts.firstName,
			LastName:     opts.lastName,
			Picture:      opts.picture,
			Bio:          opts.bio,
			LastModified: time.Now().Unix(),
		}
	}

	// Check if refProfile is set and build
	if opts.refProfile != nil {
		if !checkProfile(opts.refProfile) {
			return buildProfile(opts)
		}
		return opts.refProfile
	}
	return buildProfile(opts)
}

// WithCheckerProfile sets the checker profile
func WithCheckerProfile(profile *Profile) DefaultProfileOption {
	return func(opts profileOpts) {
		opts.refProfile = profile
	}
}

// checkProfile checks if the Profile is valid
func checkProfile(p *Profile) bool {
	if p == nil {
		return false
	}
	if len(p.SName) == 0 || len(p.FirstName) == 0 {
		return false
	}
	return true
}
