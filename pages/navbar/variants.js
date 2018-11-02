import React from 'react'
import { LeihsPage } from '../../src/components/styleguide'
import Navbar from '../../src/components/Navbar'

import { exampleParams } from './dummy'

const examples = [
  { name: 'base', props: { config: {} } },
  { name: 'no menu', props: { config: { appMenu: null } } },
  {
    name: 'on root page when logged out',
    props: {
      config: {
        me: false,
        appTitle: 'Leihs',
        appMenu: null,
        subApps: false,
        appColor: null
      }
    }
  }
]

const NavbarDummyPage = () => {
  return (
    <LeihsPage>
      <header className="text-center">
        <h1 className="display-4">Navbar Colors</h1>
        <p className="lead">
          variants showing different <code>config</code>
          s.
        </p>
      </header>

      {examples.map(({ name, props }, i) => {
        const navbarProps = {
          ...props,
          config: { ...exampleParams, ...props.config }
        }

        return (
          <div className="card p-3 m-3" key={i}>
            <p>{name}</p>
            <Navbar {...navbarProps} />
          </div>
        )
      })}
    </LeihsPage>
  )
}

export default NavbarDummyPage
