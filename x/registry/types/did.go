package types

import (
	"errors"
	"regexp"
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

const (
	// Minimum length of base colon separated DID
	MIN_BASE_PART_LENGTH = 3

	// Maximum length of base colon separated DID
	MAX_BASE_PART_LENGTH = 4
)

var (
	ErrBaseNotFound              = errors.New("Unable to determine base did of provided string.")
	ErrFragmentAndQuery          = errors.New("Unable to create new DID. Fragment and Query are mutually exclusive")
	ErrParseInvalid              = errors.New("Unable to parse string into DID, invalid format.")
	DidForbiddenSymbolsRegexp, _ = regexp.Compile(`^[^&\\]+$`)
)

// FindNetworkType returns the network type of a string
func FindNetworkType(netStr string) NetworkType {
	switch netStr {
	case "main":
		return NetworkType_NETWORK_TYPE_MAINNET
	case "mainnet":
		return NetworkType_NETWORK_TYPE_MAINNET
	case "test":
		return NetworkType_NETWORK_TYPE_TESTNET
	case "testnet":
		return NetworkType_NETWORK_TYPE_TESTNET
	case "dev":
		return NetworkType_NETWORK_TYPE_DEVNET
	case "devnet":
		return NetworkType_NETWORK_TYPE_DEVNET
	default:
		return NetworkType_NETWORK_TYPE_UNSPECIFIED
	}
}

// ToString returns a string representation of the DID
func (nt NetworkType) ToString() string {
	// Convert to string
	rawStr := nt.String()
	parts := strings.Split(rawStr, "_")
	net := parts[len(parts)-1]
	if nt == NetworkType_NETWORK_TYPE_UNSPECIFIED || nt == NetworkType_NETWORK_TYPE_MAINNET {
		return ""
	}

	// Check for colon
	if net[len(net)-1] != ':' {
		return strings.ToLower(net) + ":"
	}
	return strings.ToLower(net)
}

func ToIdentifier(str string) string {
	if str[len(str)-1] == ':' {
		return str[:len(str)-1] + "/"
	}
	return str + "/"
}
func ToNetwork(str string) string {
	return str + ":"
}
func ToFragment(str string) string {
	return "#" + str
}

// IndexOf returns the index of the first instance of a value in a slice
func IndexOf(vs []string, t string) int {
	for i, v := range vs {
		if v == t {
			return i
		}
	}

	return -1
}

// Contains returns true if the string is in the slice
func Contains(vs []string, t string) bool {
	return IndexOf(vs, t) >= 0
}

// Filter returns a new slice containing all strings from the slice that satisfy the predicate
func Filter(vs []string, f func(string) bool) []string {
	vsf := make([]string, 0)
	for _, v := range vs {
		if f(v) {
			vsf = append(vsf, v)
		}
	}
	return vsf
}

// Complement returns a new slice containing all strings from the slice that do not satisfy the predicate
func Complement(vs []string, ts []string) []string {
	return Filter(vs, func(s string) bool {
		return !Contains(ts, s)
	})
}

// ContainsString returns true if this string contains target string
func ContainsString(s string, t string) bool {
	vs := strings.Split(s, "")
	for _, v := range vs {
		if v == t {
			return true
		}
	}
	return false
}

// ContainsFragment checks if a DID has a fragment in the full string
func ContainsFragment(didUrl string) bool {
	return ContainsString(didUrl, "#")
}

// ContainsModule checks if a core service module is present in the DID
func ContainsModule(didUrl string) bool {
	// Split parts
	parts := strings.Split(didUrl, "/")
	if len(parts) < MIN_BASE_PART_LENGTH || len(parts) > MAX_BASE_PART_LENGTH {
		return false
	}

	// Return default network
	return true
}

// ContainsNetwork checks if a network is valid
func ContainsNetwork(didurl string) bool {
	// Split parts
	parts := strings.Split(didurl, ":")
	if len(parts) < MIN_BASE_PART_LENGTH || len(parts) > MAX_BASE_PART_LENGTH {
		return false
	}

	// Check if Network is in the DID string
	if len(parts) == MAX_BASE_PART_LENGTH {
		t := FindNetworkType(parts[2])
		if t == NetworkType_NETWORK_TYPE_UNSPECIFIED {
			return false
		}
		return true
	}

	// Return default network
	return true
}

// ContainsPath returns true if a DID has a path in the full string
func ContainsPath(didUrl string) bool {
	return ContainsString(didUrl, "/")
}

// ContainsQuery checks if a DID has a query in the full string
func ContainsQuery(didUrl string) bool {
	return ContainsString(didUrl, "?")
}

// IsFragment checks if a DID fragment is valid
func IsFragment(didUrl string) bool {
	if didUrl[0] == '#' {
		return true
	}
	return false
}

// IsPath returns true if a DID has a path in the full string
func IsPath(didUrl string) bool {
	if didUrl[0] == '/' {
		return true
	}
	return false
}

// IsQuery checks if a DID query is valid
func IsQuery(didUrl string) bool {
	if didUrl[0] == '?' {
		return true
	}
	return false
}

// IsValidDid checks if a DID is valid
func IsValidDid(did string) bool {
	if !DidForbiddenSymbolsRegexp.MatchString(did) {
		return false
	}

	if !ContainsNetwork(did) {
		return false
	}

	if ContainsFragment(did) && ContainsQuery(did) {
		return false
	}

	return strings.HasPrefix(did, SonrMethodPrefix)
}

// ExtractBase extracts the did base (did:sonr:<network>:<address>) or (did:sonr:address)
func ExtractBase(did string) (bool, string) {
	parts := strings.Split(did, ":")
	finalIdx := len(parts) - 1
	if len(parts) < MIN_BASE_PART_LENGTH || len(parts) > MAX_BASE_PART_LENGTH {
		return false, ""
	}

	base := strings.Join(parts[:finalIdx], "")
	return true, base
}

// ExtractFragment splits a DID URL and pulls the fragment
func ExtractFragment(didUrl string) (bool, string) {
	fragments := strings.Split(didUrl, "#")
	if len(fragments) < 2 {
		return false, ""
	}
	return true, fragments[1]
}

// ExtractIdentifier extracts the identifier from a DID
func ExtractIdentifier(did string) (bool, string) {
	if ok, base := ExtractBase(did); ok {
		parts := strings.Split(base, ":")
		return true, parts[len(parts)-1]
	}
	return false, ""
}

// ExtractPath splits a DID URL and pulls the path
func ExtractPath(didUrl string) (bool, string) {
	if ok, base := ExtractBase(didUrl); ok {
		parts := strings.Split(base, "/")
		if len(parts) < 2 {
			return false, ""
		}
		return true, strings.Join(parts[1:], "/")
	}
	paths := strings.Split(didUrl, "/")
	if len(paths) < 2 {
		return false, ""
	}

	// Get Full Path
	fullPath := strings.Join(paths[1:], "/")
	withoutFinalItemPath := strings.Join(paths[1:len(paths)-1], "/")
	if ContainsFragment(fullPath) {
		return true, withoutFinalItemPath
	}

	if ContainsQuery(fullPath) {
		return true, withoutFinalItemPath
	}
	return true, fullPath
}

// ExtractQuery splits a DID URL and pulls the query
func ExtractQuery(didUrl string) (bool, string) {
	query := strings.Split(didUrl, "?")
	if len(query) < 2 {
		return false, ""
	}
	return true, query[1]
}
