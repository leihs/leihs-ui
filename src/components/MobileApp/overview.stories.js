import React from 'react'

export default {
  title: 'MobileApp/Overview',
  parameters: { viewport: { defaultViewport: 'reset' } }
}

export function Overview() {
  return (
    <div>
      <h1>Leihs Borrow App UI</h1>
      <p>Built using a set of design components on top of Bootstrap.</p>
      <h2>Story breakdown</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <h2>Wireframes</h2>
          How views can be composed using design components and Bootstrap classes
        </li>
        <li className="list-group-item">
          <h2>Design Components</h2>
          Detailed stories about all available design components
        </li>
        <li className="list-group-item">
          <h2>Bootstrap Theme</h2>
          Reference about colors, spacing, typography etc.
        </li>
        <li className="list-group-item">
          <h2>Integrated Components</h2>A few ready-made partial views for the app.{' '}
          <span className="fw-light">
            Note that most views are composed by the app directly using the design components and Bootstrap classes.
          </span>
        </li>
      </ul>
    </div>
  )
}
