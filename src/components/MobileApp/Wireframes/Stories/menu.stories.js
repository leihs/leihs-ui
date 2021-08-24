import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse'

import Navbar from '../../DesignComponents/Navbar'
import Menu from '../../DesignComponents/Menu'
import PageLayout from '../../DesignComponents/PageLayout'

export default {
  title: 'MobileApp/Wireframes/Menu',
  parameters: { layout: 'fullscreen' }
}

export function menu() {
  const [isOpen, setIsOpen] = useState(false)
  function onClick() {
    setIsOpen(x => !x)
  }
  return (
    <PageLayout
      navbar={
        <>
          <Navbar
            brandName="Leihs"
            menuIsOpen={isOpen}
            menuItem={{ onClick, 'aria-controls': 'menu', 'aria-expanded': isOpen, role: 'button' }}
          />
          <Collapse in={isOpen}>
            <div id="menu">
              <Menu>
                <Menu.Group title="Ausleihen">
                  <Menu.Link href="#some/route">Katalog</Menu.Link>
                  <Menu.Link href="#some/route">Neue Ausleihe</Menu.Link>
                </Menu.Group>
                <Menu.Group title="Joël Gähwiler">
                  <Menu.Link href="#some/route">Meine Ausleihen</Menu.Link>
                  <Menu.Link href="#some/route">Benutzerkonto</Menu.Link>
                  <Menu.Link href="#some/route">Abmelden</Menu.Link>
                </Menu.Group>
                <Menu.Group title="Hilfe">
                  <Menu.Link href="#some/route">Dokumentation</Menu.Link>
                  <Menu.Link href="#some/route">Unterstützung</Menu.Link>
                </Menu.Group>
                <Menu.Group title="Sprache">
                  <Menu.Link href="#some/route">Deutsch</Menu.Link>
                  <Menu.Link href="#some/route">English</Menu.Link>
                </Menu.Group>
              </Menu>
            </div>
          </Collapse>
        </>
      }
    >
      <p className="text-muted">(Click the hamburger icon to open the menu)</p>
    </PageLayout>
  )
}
