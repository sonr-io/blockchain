SHELL=/bin/bash

# Set this -->[/Users/xxxx/Sonr/]<-- to Folder of Sonr Repos
SONR_ROOT_DIR=/Users/prad/Developer
ROOT_DIR:=$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))
HIGHWAY_DIR=${ROOT_DIR}/cmd/highway
MOTOR_DIR=${ROOT_DIR}/cmd/motor
CHAIN_PROTO_DIR=${ROOT_DIR}/proto

# @ Proto Directories
MODULE_NAME=github.com/sonr-io/core

all: Makefile
	@echo "Sonr Make Options"
	@echo ''
	@sed -n 's/^##//p ' $<

## push -> Complete Actions performed
push: buf docker
	@echo "----"
	@echo "Sonr: Generated, Built, and Pushed Docker and Protobuf"
	@echo "----"


##
## ---
## [docker]               :   Builds and Pushes docker images
docker: docker.build docker.push

## [docker.build]         :   Builds docker images
docker.build:
	open --background -a Docker
	@echo "----"
	@echo "Sonr: Building Highway and Sonrd Images"
	@echo "----"
	cd ${HIGHWAY_DIR} && docker build . -t ghcr.io/sonr-io/highway
	cd ${ROOT_DIR} && docker build . -t ghcr.io/sonr-io/sonr

## [docker.push]          :   Pushes docker images
docker.push:
	@echo "----"
	@echo "Sonr: Building and Pushing Docker Image"
	@echo "----"
	@docker push ghcr.io/sonr-io/highway:latest
	@docker push ghcr.io/sonr-io/sonr:latest

## [buf]                  :   Generates, Builds, and Pushes ALL proto files
buf: buf.gen buf.build buf.push

## [buf.gen]              :   Generates Highway and Motor stubs
buf.gen:
	@echo "----"
	@echo "Sonr: Compiling Protobufs"
	@echo "----"
	@echo "Generating Protobuf Go code..."
	@cd ${HIGHWAY_DIR} && buf mod update && buf generate
	@cd ${MOTOR_DIR} && buf mod update && buf generate
	@cd ${CHAIN_PROTO_DIR} && buf mod update

## [buf.build]            :   Builds ALL Proto packages
buf.build:
	@echo "----"
	@echo "Sonr: Compiling Protobufs"
	@echo "----"
	@echo "Generating Protobuf Go code..."
	@cd ${HIGHWAY_DIR} && buf build
	@cd ${MOTOR_DIR} && buf build
	@cd ${CHAIN_PROTO_DIR} && buf build

## [buf.push]             :   Pushes built packages to remote
buf.push:
	@echo "----"
	@echo "Sonr: Compiling Protobufs"
	@echo "----"
	@echo "Generating Protobuf Go code..."
	@cd ${HIGHWAY_DIR} && buf push
	@cd ${MOTOR_DIR} && buf push
	@cd ${CHAIN_PROTO_DIR} && buf push

## [clean]                :   Reinitializes Gomobile and Removes Framworks from Plugin
clean:
	@cd ${ROOT_DIR} && go clean -cache -x
	@cd ${HIGHWAY_DIR} && go clean -cache -x
	@cd ${HIGHWAY_DIR} && go mod tidy
	@cd ${ROOT_DIR} && go mod tidy
	rm -rf release
