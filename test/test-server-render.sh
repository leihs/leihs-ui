#!/bin/sh

HTML=$(node -p <<JS
  window = global = this
  l = require('./dist/leihs-ui-server-side')
  l.renderComponentToString('Navbar', {appTitle:'Leihs'}) \
    + '<script src="http://localhost:5000/dist/leihs-ui-client-side.js"></script>' \
    + '<link rel="stylesheet" href="http://localhost:5000/bootstrap-theme-leihs/build/bootstrap-leihs.css">'
JS
)


echo $HTML > tmp.html
echo $HTML
