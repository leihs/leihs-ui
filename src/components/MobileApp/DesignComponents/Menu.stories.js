import { linkTo } from '@storybook/addon-links'
import React from 'react'
import Menu from './Menu'

export default {
  title: 'MobileApp/Design Components/Layout/Menu',
  component: Menu
}

export function menu() {
  return (
    <>
      <h1>Menu</h1>
      <p className="text-muted">Presents a grouped list of links or buttons</p>
      <div className="position-relative">
        <Menu>
          <Menu.Group title="Group 1">
            <Menu.Link href="#some/route">Link 1</Menu.Link>
            <Menu.Link href="#some/route">Link 2</Menu.Link>
            <Menu.Link href="#some/route" isSelected>
              Link 3 - selected
            </Menu.Link>
          </Menu.Group>
          <Menu.Group title="Group 2">
            <Menu.Button onClick={() => alert('Button 4 was clicked')}>Button 4</Menu.Button>
            <Menu.Button onClick={() => alert('Button 5 was clicked')} isSelected>
              Button 5 - selected
            </Menu.Button>
            <Menu.Button onClick={() => alert('Button 6 was clicked')}>Button 6</Menu.Button>
          </Menu.Group>
        </Menu>
      </div>
      <p></p>
      <p className="text-muted">For an example with more context see:</p>
      <p className="text-muted">
        <button className="btn btn-light btn-sm" onClick={linkTo('MobileApp/Prototypes/Menu')}>
          Prototypes &gt; Menu
        </button>
      </p>
    </>
  )
}
