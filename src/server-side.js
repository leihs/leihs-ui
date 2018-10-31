import React from 'react'
import ReactDOMServer from 'react-dom/server'
import assert from 'assert'

import Bold from './components/Bold'
import DebugProps from './components/DebugProps'
import Navbar from './components/Navbar'

export const Components = {
  Bold,
  DebugProps,
  Navbar
}

export function renderComponentToStaticMarkup(name, props) {
  return ReactDOMServer.renderToStaticMarkup(reactElement(name, props))
}

// helpers
function reactElement(name, props) {
  const component = Components[name]
  assert.ok(component)
  const element = React.createElement(component, props)
  assert.ok(element)
  return element
}
