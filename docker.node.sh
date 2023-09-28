#!/bin/bash

npm run lintfix
rm -rf dist
npm run build

docker stop nightwatch-n8n
docker rm nightwatch-n8n
docker-compose up -d


echo "Docker n8n running on http://localhost:5678"
