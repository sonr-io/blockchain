SHELL=/bin/bash

# Set this -->[/Users/xxxx/Sonr/]<-- to Folder of Sonr Repos
ROOT_DIR:=$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))
IOS_FRAMEWORK_DIR=$(ROOT_DIR)/gen/swift/Frameworks
ANDROID_AAR_DIR=$(ROOT_DIR)/gen/java/libs

# @ Packaging Vars/Commands
GOMOBILE=gomobile
GOBIND=$(GOMOBILE) bind -ldflags='-s -w' -v

all: lint generate release

release:
	buf build
	buf push
	@echo ""
	@echo ""
	@echo "---------------------------------------------------------------"
	@echo "-------- ✅ ✅ ✅  Pushed new Buf.Build  ✅ ✅ ✅  --------------"
	@echo "---------------------------------------------------------------"


## └─ android       - Android AAR
generate:
	@echo ""
	@echo ""
	@echo "--------------------------------------------------------------"
	@echo "--------------- 🤖 START ANDROID BIND 🤖 ----------------------"
	@echo "--------------------------------------------------------------"
	cd .. && buf generate


## └─ ios           - iOS Framework
lint:
	@echo ""
	@echo ""
	@echo "--------------------------------------------------------------"
	@echo "-------------- 📱 START IOS BIND 📱 ---------------------------"
	@echo "--------------------------------------------------------------"
	cd .. && buf lint
