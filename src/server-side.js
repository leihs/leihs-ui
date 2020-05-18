import '@babel/polyfill'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import assert from 'assert'

import { Components } from './components-bundle'

export function renderComponentToStaticMarkup(name, props) {
  return ReactDOMServer.renderToStaticMarkup(reactElement(name, props))
}

export function renderComponentToString(name, props) {
  return rootWrapper(name, props, ReactDOMServer.renderToString(reactElement(name, props)))
}

// helpers
function reactElement(name, props) {
  const component = Components[name]
  assert.ok(component, `Could not find React Component '${name}'!`)
  const element = React.createElement(component, props)
  assert.ok(element, 'Could not create React Element!')
  return element
}

function rootWrapper(name, props, inner) {
  return `<div data-react-component='${name}' data-react-props='${escape(JSON.stringify(props))}'>${inner}</div>`
}

// function renderAndWrap(id, name, props) {
//   const dataProps = JSON.stringify(props)
//   return (
//     `<div>` +
//     `<script id='${id}-app-props' type='application/json'>` +
//     `<![CDATA[${dataProps}]]>` +
//     `</script>` +
//     `<div>` +
//     ReactDOM.renderToString(
//       <div>
//         <MyComponent {...props} />
//       </div>
//     ) +
//     `</div>` +
//     `</div>`
//   )
// }
