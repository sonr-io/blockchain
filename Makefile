SHELL=/bin/bash

# Set this -->[/Users/xxxx/Sonr/]<-- to Folder of Sonr Repos
SONR_ROOT_DIR=/Users/prad/Developer
ROOT_DIR:=$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))
HIGHWAY_DIR=${ROOT_DIR}/cmd/sonrd/highway
MOTOR_DIR=${ROOT_DIR}/cmd/motor
FRONTEND_DIR=${ROOT_DIR}/cmd/sonrd/frontend
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

## [buf]                  :   Generates, Builds, and Pushes ALL proto files
buf: buf.gen buf.build buf.push

## [buf.gen]              :   Generates Highway and Motor stubs
buf.gen:
	@echo "----"
	@echo "Sonr: Compiling Protobufs"
	@echo "----"
	@echo "Generating Protobuf Go code..."
	@cd ${HIGHWAY_DIR} && buf mod update
	@cd ${MOTOR_DIR} && buf mod update
	@cd ${CHAIN_PROTO_DIR} && buf mod update

## [buf.build]            :   Builds ALL Proto packages
buf.build:
	@echo "----"
	@echo "Sonr: Compiling Protobufs"
	@echo "----"
	@echo "Generating Protobuf Go code..."
	@cd ${HIGHWAY_DIR} && buf build
#	@cd ${MOTOR_DIR} && buf build
	@cd ${CHAIN_PROTO_DIR} && buf build

## [buf.push]             :   Pushes built packages to remote
buf.push:
	@echo "----"
	@echo "Sonr: Compiling Protobufs"
	@echo "----"
	@echo "Generating Protobuf Go code..."
	@cd ${HIGHWAY_DIR} && buf push
#	@cd ${MOTOR_DIR} && buf push
	@cd ${CHAIN_PROTO_DIR} && buf push

frontend.export:
	@echo "----"
	@echo "Sonr: Exporting Frontend"
	@echo "----"
	cd ${FRONTEND_DIR}/nextjs && yarn install && yarn export

## [clean]                :   Reinitializes Gomobile and Removes Framworks from Plugin
clean:
	@cd ${ROOT_DIR} && go clean -cache -x
	@cd ${HIGHWAY_DIR} && go clean -cache -x
	@cd ${HIGHWAY_DIR} && go mod tidy
	@cd ${ROOT_DIR} && go mod tidy
	rm -rf release
