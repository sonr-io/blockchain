package service

import (
	"io"
	"io/ioutil"
	"os"

	shell "github.com/ipfs/go-ipfs-api"
)

type IPFSService struct {
	*shell.Shell
}

// Init initializes the IPFS service
func Init(options ...Option) (*IPFSService, error) {
	// Apply Config
	opts := defaultOptions()
	for _, o := range options {
		o(opts)
	}

	// Create IPFS Shell
	sh := shell.NewShell(opts.NodeAddress())
	ipfs := &IPFSService{sh}
	return ipfs, nil
}

// Upload a file to IPFS
func (i *IPFSService) Upload(file string) (string, error) {
	// Upload a file to IPFS
	f, err := os.Open(file)
	if err != nil {
		return "", err
	}
	defer f.Close()

	hash, err := i.Add(f)
	if err != nil {
		return "", err
	}
	return hash, nil
}

// Download a file from IPFS given its hash and save it to os temp dir
func (i *IPFSService) Download(hash string) (string, error) {
	// Download a file from IPFS
	f, err := i.Cat(hash)
	if err != nil {
		return "", err
	}
	defer f.Close()

	// Save to temp dir
	tmp, err := ioutil.TempFile("", "ipfs-")
	if err != nil {
		return "", err
	}
	defer tmp.Close()

	_, err = io.Copy(tmp, f)
	if err != nil {
		return "", err
	}
	return tmp.Name(), nil
}
