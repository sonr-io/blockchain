SHELL=/bin/bash

# Set this -->[/Users/xxxx/Sonr/]<-- to Folder of Sonr Repos
ROOT_DIR:=$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))
IOS_FRAMEWORK_DIR=$(ROOT_DIR)/plugins/swift/Frameworks
ANDROID_AAR_DIR=$(ROOT_DIR)/plugins/java/libs

# @ Packaging Vars/Commands
GOMOBILE=gomobile
GOBIND=$(GOMOBILE) bind -ldflags='-s -w' -v

all: Makefile
	@figlet -f larry3d Sonr Core
	@echo ''
	@sed -n 's/^##//p ' $<

## bind        :   Binds Android and iOS for Plugin Path
bind: bind.ios bind.android
	@go mod tidy
	@cd /System/Library/Sounds && afplay Glass.aiff
	@echo ""
	@echo ""
	@echo "----------------------------------------------------------------"
	@echo "-------- ✅ ✅ ✅  SUCCESFUL MOBILE BIND  ✅ ✅ ✅  --------------"
	@echo "----------------------------------------------------------------"


## └─ android       - Android AAR
bind.android:
	@echo ""
	@echo ""
	@echo "--------------------------------------------------------------"
	@echo "--------------- 🤖 START ANDROID BIND 🤖 ----------------------"
	@echo "--------------------------------------------------------------"
	@mkdir -p $(ANDROID_AAR_DIR)
	@go get golang.org/x/mobile/bind
	@gomobile init
	cd bind && $(GOBIND) -target=android -o $(ANDROID_AAR_DIR)/io.sonr.core.aar
	@echo "✅ Finished Binding ➡ `date`"
	@echo ""


## └─ ios           - iOS Framework
bind.ios:
	@echo ""
	@echo ""
	@echo "--------------------------------------------------------------"
	@echo "-------------- 📱 START IOS BIND 📱 ---------------------------"
	@echo "--------------------------------------------------------------"
	@mkdir -p $(IOS_FRAMEWORK_DIR)
	@go get golang.org/x/mobile/bind
	cd bind && $(GOBIND) -target=ios -bundleid=io.sonr.core -o $(IOS_FRAMEWORK_DIR)/Core.xcframework
	@echo "✅ Finished Binding ➡ `date`"
	@echo ""

## [clean]     :   Reinitializes Gomobile and Removes Framworks from Plugin
clean:
	cd $(CORE_BIND_DIR) && $(GOCLEAN)
	go mod tidy
	go clean -cache -x
	rm -rf $(BIND_DIR_IOS)
	rm -rf $(BIND_DIR_ANDROID)
	mkdir -p $(BIND_DIR_IOS)
	mkdir -p $(BIND_DIR_ANDROID)
	cd $(CORE_BIND_DIR) && gomobile init
