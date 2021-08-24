import { linkTo } from '@storybook/addon-links'
import React from 'react'
import Menu from './Menu'

export default {
  title: 'MobileApp/Design Components/Content/Menu',
  component: Menu
}

export function menu() {
  return (
    <>
      <h1>Menu</h1>
      <p className="text-muted">Presents a grouped list of links or buttons</p>
      <Menu>
        <Menu.Group title="Group 1">
          <Menu.Link href="#some/route">Link 1</Menu.Link>
          <Menu.Link href="#some/route">Link 2</Menu.Link>
        </Menu.Group>
        <Menu.Group title="Group 2">
          <Menu.Link href="#some/route">Link 3</Menu.Link>
          <Menu.Button onClick={() => alert('Button 4 was clicked')}>Button 4</Menu.Button>
        </Menu.Group>
      </Menu>
      <p></p>
      <p className="text-muted">For an example with more context see:</p>
      <p className="text-muted">
        <button className="btn btn-light btn-sm" onClick={linkTo('MobileApp/Wireframes/Menu')}>
          Wireframes &gt; Menu
        </button>
      </p>
    </>
  )
}
