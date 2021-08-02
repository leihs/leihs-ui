import React from 'react'

export default {
  title: 'MobileApp/Overview'
}

export function Overview() {
  return (
    <div>
      <h1>Leihs Borrow App UI</h1>
      <p>Built using a set of design components and Bootstrap.</p>
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
          Which Boostrap classes are to be used. Reference about colors, spacing, typography etc.
        </li>
        <li className="list-group-item">
          <h2>Integrated Components</h2>
          Showcase of the ready components (as used in the production app)
        </li>
      </ul>
    </div>
  )
}
