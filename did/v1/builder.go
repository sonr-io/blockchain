package v1

import (
	"strings"
)

const (
	SonrMethodPrefix = "did:sonr:"
)

// Parse parses a DID string into a DID struct
func ParseDid(s string) (*Did, error) {
	var did Did
	// Validate the DID string
	if !IsValidDid(s) {
		return nil, ErrParseInvalid
	}

	// Parse Items from string into DID struct
	did.Method = SonrMethodPrefix

	// Extract Identifier
	if ok, id := ExtractIdentifier(s); ok {
		did.Id = id
	} else {
		return nil, ErrParseInvalid
	}

	// Extract Path
	if ok, path := ExtractPath(s); ok {
		did.Paths = strings.Split(path, "/")
	}

	// Extract Query
	if ok, query := ExtractQuery(s); ok {
		did.Query = query
	}

	// Extract Fragment
	if ok, fragment := ExtractFragment(s); ok {
		did.Fragment = fragment
	}
	return &did, nil
}

// CreateDid creates a new DID
func CreateDid(id string, options ...Option) (*Did, error) {
	var did Did
	did.Id = id
	did.Method = SonrMethodPrefix

	// Apply options
	for _, option := range options {
		option(&did)
	}

	// Check if the DID is valid
	if !did.IsValid() {
		return nil, ErrFragmentAndQuery
	}
	return &did, nil
}

// GetBase returns the base DID string: did:Method:Network:ID (did:sonr:testnet:abc123)
func (d *Did) GetBase() string {
	str := d.Method + d.Network + d.Id
	return ToIdentifier(str)
}

// HasNetwork returns true if the DID has a network
func (d *Did) HasNetwork() bool {
	return len(d.Network) > 0
}

// HasPath returns true if the DID has a path
func (d *Did) HasPath() bool {
	return len(d.Paths) > 0
}

// HasQuery returns true if the DID has a query
func (d *Did) HasQuery() bool {
	return len(d.Query) > 0
}

// HasFragment returns true if the DID has a fragment
func (d *Did) HasFragment() bool {
	return len(d.Fragment) > 0
}

// IsValid checks if a DID is valid and does not contain both a Fragment and a Query
func (d *Did) IsValid() bool {
	hq := d.HasQuery()
	hf := d.HasFragment()

	if hq && hf {
		return false
	}
	return true
}

// GetPath returns the path of a DID
func (d *Did) GetPath() string {
	if d.HasPath() {
		return strings.Join(d.Paths, "/")
	}
	return ""
}

// String combines all DID parts into a string
func (d *Did) ToString() string {
	arr := []string{d.GetBase(), d.GetPath(), d.GetQuery(), d.GetFragment()}
	return strings.Join(arr, "")
}

func (d *Did) IsEmpty() bool {
	return len(d.ToString()) == 0
}

type Option func(*Did)
