import React from 'react'
import ReactDOM from 'react-dom'

import Components from './components-bundle'
export { Components }

export function hydrateComponent(container) {
  const data = container.dataset
  const name = data.reactComponent
  const props = JSON.parse(unescape(data.reactProps))
  const element = reactElement(name, props)

  ReactDOM.hydrate(element, container)
}

export function initReact() {
  if (!document || !document.querySelectorAll) return
  Array.from(document.querySelectorAll('[data-react-component]')).map(hydrateComponent)
}
initReact()

// helpers
function reactElement(name, props) {
  const component = Components[name]
  return React.createElement(component, props)
}
