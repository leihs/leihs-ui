import React from 'react'

export default {
  title: 'MobileApp/BootstrapTheme/Typography'
}

const lorem =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'

export function typography() {
  return (
    <div>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <p>Default font size: {lorem}</p>
      <p>
        Small: <span className="small">{lorem}</span>
      </p>
      <p>
        Very small: <span className="very-small">{lorem}</span>
      </p>
      <p>
        Light: <span className="fw-light">{lorem}</span>
      </p>
      <p>
        Small light: <span className="small fw-light">{lorem}</span>
      </p>
      <p>
        Very small light: <span className="very-small fw-light">{lorem}</span>
      </p>
    </div>
  )
}
