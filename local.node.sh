#!/bin/bash

npm run lintfix
rm -rf dist
npm run build
rm -rf ~/.n8n/custom
cp -R ./dist ~/.n8n/custom
n8n start