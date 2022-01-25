package service

import "github.com/sonr-io/sonr/x/registry/types"

type BuildOption func(bo *buildOptions)

type buildOptions struct {
	id string
}

func BuildDocument() (*types.DidDocument, error) {
	return nil, nil
}
