package main

import (
	"embed"
)

//go:embed app/dist
//go:embed app/dist/_next
//go:embed app/dist/_next/static/chunks/pages/*.js
//go:embed app/dist/_next/static/*/*.js
var nextFS embed.FS

