package v1

import (
	"errors"
	"mime"
	"net/textproto"
	"strconv"
	"strings"
	"time"

	"github.com/sonr-io/sonr/common/device"
)

var (
	ErrParentDirNotExists = errors.New("FileItem's Parent Directory does not exist")
	ErrEmptyData          = errors.New("Passed Buffer is Empty")
)

// Header returns the header of the FileItem
func (f *FileItem) Header() textproto.MIMEHeader {
	cd := mime.FormatMediaType("item-data", map[string]string{
		"type":         f.GetMime().GetType().String(),
		"filename":     f.GetName(),
		"lastModified": time.Unix(f.GetLastModified(), 0).Format(time.RFC1123),
	})
	return textproto.MIMEHeader{
		"Content-Disposition": {cd},
		"Content-Length":      {strconv.FormatInt(f.GetSize(), 10)},
		"Content-Type":        {f.GetMime().GetValue()},
	}
}

// SetPathFromFolder sets the path of the FileItem
func (f *FileItem) SetPathFromFolder(folder device.Folder) (string, error) {
	// Set Path
	oldPath := f.GetPath()

	// generate path
	path, err := folder.GenPath(oldPath)
	if err != nil {
		return "", err
	}

	// Define Check Path Function
	f.Path = path
	return f.Path, nil
}

// ToTransferItem Returns Transfer for FileItem
func (f *FileItem) ToTransferItem() *Payload_Item {
	return &Payload_Item{
		Size:      f.GetSize(),
		Thumbnail: f.GetThumbnail(),
		Mime:      f.GetMime(),
		Data: &Payload_Item_File{
			File: f,
		},
	}
}

// Ext Method adjusts extension for JPEG
func (m *MIME) Ext() string {
	if m.Subtype == "jpg" || m.Subtype == "jpeg" {
		return "jpeg"
	}
	return m.Subtype
}

// IsFile Checks if Path is a File
func (m *MIME) IsFile() bool {
	return m.Type != MIME_TYPE_URL
}

// IsAudio Checks if Mime is Audio
func (m *MIME) IsAudio() bool {
	return m.Type == MIME_TYPE_AUDIO
}

// IsImage Checks if Mime is Image
func (m *MIME) IsImage() bool {
	return m.Type == MIME_TYPE_IMAGE
}

// IsMedia Checks if Mime is any media
func (m *MIME) IsMedia() bool {
	return m.IsAudio() || m.IsImage() || m.IsVideo()
}

// IsPDF Checks if Mime is PDF
func (m *MIME) IsPDF() bool {
	return strings.Contains(m.GetSubtype(), "pdf")
}

// IsVideo Checks if Mime is Video
func (m *MIME) IsVideo() bool {
	return m.Type == MIME_TYPE_VIDEO
}

// IsUrl Checks if Path is a URL
func (m *MIME) IsUrl() bool {
	return m.Type == MIME_TYPE_URL
}

// PermitsThumbnail Checks if Mime Type Allows Thumbnail Generation.
// Image, Video, Audio, and PDF are allowed.
func (m *MIME) PermitsThumbnail() bool {
	return m.IsImage() || m.IsVideo() || m.IsAudio() || m.IsPDF()
}
