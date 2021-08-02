import React from 'react'
import Badge from './Badge'

export default {
  title: 'MobileApp/Design Components/Content/Badge',
  component: Badge
}

export const badge = () => {
  return (
    <div>
      <h1>Badge</h1>
      <p className="text-muted">It typically shows some important attribute or status.</p>
      <Badge>12 Tage ab 27.5.2021</Badge>
    </div>
  )
}

export const themeColors = () => {
  return (
    <div>
      <h1>Badge</h1>
      <p className="text-muted">
        Control the theme color with the <code>className</code> prop, e.g. <code>.bg-danger</code>.
      </p>
      <Badge className="bg-danger">12 Tage ab 27.5.2021</Badge>
      <p> </p>
      <p className="text-muted">
        Note that combination with a light background color you will have to manually add <code>.text-dark</code>{' '}
        (Bootstrap does not automatically adjust it as for instance with buttons)
      </p>
    </div>
  )
}
