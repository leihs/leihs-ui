import React from 'react'

export default {
  title: 'MobileApp/Bootstrap Theme/Typography'
}

const lorem =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore'

const exampleTextWithLinebreaks = `Use the class .preserve-linebreaks to
preserve linebreaks,
e.g. as they were entered
by a user into
an textarea.

Even more text after a break.
`

export function typography() {
  return (
    <div className="pb-5">
      <h1>Typography</h1>
      <p className="text-muted">Headings (h1, h2 and h3):</p>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <p className="text-muted">Font sizes (default, .small, .very-small):</p>
      <p>
        <span>Default size: {lorem}</span>
      </p>
      <p>
        <span className="small">Small: {lorem}</span>
      </p>
      <p>
        <span className="very-small">Very small: {lorem}</span>
      </p>
      <p className="text-muted">Note that .very-small is a custom extension, not in the Bootstrap standard.</p>
      <p className="text-muted">Light font (.fw-light):</p>
      <p>
        <span className="fw-light">Default size: {lorem}</span>
      </p>
      <p>
        <span className="small fw-light">Small: {lorem}</span>
      </p>
      <p>
        <span className="very-small fw-light">Very small: {lorem}</span>
      </p>
      <p className="text-muted">Text utils</p>
      <code>.preserve-linebreaks</code>
      <p className="preserve-linebreaks">{exampleTextWithLinebreaks}</p>
    </div>
  )
}
