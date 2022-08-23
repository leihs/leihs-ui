import React, { useState } from 'react'

import Navbar from '../DesignComponents/Navbar'
import Menu from '../DesignComponents/Menu'
import PageLayout from '../DesignComponents/PageLayout'

export default {
  title: 'MobileApp/Prototypes/Menu',
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
        <Navbar.MenuWrapper menuIsOpen={isOpen}>
          <Navbar
            brandName="Leihs"
            menuIsOpen={isOpen}
            menuItem={{ onClick, 'aria-controls': 'menu', 'aria-expanded': isOpen, role: 'button' }}
          />
          <Menu show={isOpen} id="menu">
            <Menu.Group title="Ausleihen">
              <Menu.Link href="#some/route">Katalog</Menu.Link>
              <Menu.Link href="#some/route">Warenkorb</Menu.Link>
            </Menu.Group>
            <Menu.Group title="Benutzer">
              <Menu.Link href="#some/route">Meine Bestellungen</Menu.Link>
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
        </Navbar.MenuWrapper>
      }
    >
      <p className="text-muted">(Click the hamburger icon to open the menu)</p>
    </PageLayout>
  )
}