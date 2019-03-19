#!/bin/sh -exu

# build it
npm run build:ssr

# run it by piping to node:
cat dist/leihs-ssr.js | node - render 'DebugProps' '{"children": "Hello"}'

# run it directly (same file as above but with hashbang for node)
./dist/leihs-ssr render 'DebugProps' '{"children": "Hello"}'
