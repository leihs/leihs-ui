import React from 'react'
import { action } from '@storybook/addon-actions'
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
      <p className="text-muted mt-2">
        It can also be a <code>{'<a>'}</code>.
      </p>
      <Badge as="a" href={'#example-link'}>
        23 Tage ab 27.5.2021
      </Badge>
      <p className="text-muted mt-2">
        It can also be a <code>{'<button>'}</code>.
      </p>
      <Badge as="button" className="btn btn-link" onClick={action('badge click')}>
        42 Tage ab 27.5.2021
      </Badge>
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
