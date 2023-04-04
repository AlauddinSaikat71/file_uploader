ARTIFACT_REVISION = 1.0.0
APP_NAME = file-uploader
TENENT_NAME = upg
IMAGES_TAG = ${shell git describe --exact-match 2> /dev/null || echo ${ARTIFACT_REVISION}}
IMAGE_DIRS = $(wildcard ./)

PACKAGE_DETAILS := $(wildcard */package.json)
PROJECTS = $(IMAGE_DIRS)
ECHO = ${shell echo -e}
VERSION=$(shell cat package.json | grep version | head -1 | cut -d\" -f4 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]')

.PHONY: build
build:
	$(eval IMAGE_NAME := $(TENENT_NAME)/$(APP_NAME))
	$(eval APP_VERSION := $(VERSION))
	docker build --pull -t ${IMAGE_NAME} -t ${IMAGE_NAME}:${APP_VERSION} ${PROJECTS} --build-arg VERSION={APP_VERSION}

build-latest:
	$(eval IMAGE_NAME := $(TENENT_NAME)/$(APP_NAME))
	docker build --pull -t ${IMAGE_NAME}:latest ${PROJECTS}

build-tag:
	$(eval IMAGE_NAME := $(TENENT_NAME)/$(APP_NAME))
	$(eval APP_VERSION := $(VERSION))
	docker build --pull -t ${IMAGE_NAME}:${APP_VERSION} ${PROJECTS} --build-arg VERSION={APP_VERSION}

.PHONY: clean
clean:
	@echo 'cleaning bad images'
	$(eval BAD_IMAGES := $(shell docker images --filter dangling=true -q --no-trunc))
	@docker rmi ${BAD_IMAGES}

deploy/dev:
	@echo 'Deplying dev builds.'
	@docker stack deploy -c docker-compose.yml upg

deploy/production:
	@echo 'Deplying production builds.'
	$(eval DEPLOYMENT_FOLDER := deployments)
	@if ! [[ -f "${DEPLOYMENT_FOLDER}/.env" ]]; then cp .sample.env ${DEPLOYMENT_FOLDER}/.env ; fi
	@docker stack deploy -c ${DEPLOYMENT_FOLDER}/file-uploader.stack.yml upg

version: 
	@echo $(APP_NAME)
	@echo $(TENENT_NAME)
	@echo $(VERSION)