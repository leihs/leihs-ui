import React, { useState } from 'react'
import { linkTo } from '@storybook/addon-links'

import Navbar from '../DesignComponents/Navbar'
import Menu from '../DesignComponents/Menu'
import PageLayout from '../DesignComponents/PageLayout'
import ProfileMenu from '../DesignComponents/ProfileMenu'

export default {
  title: 'MobileApp/Prototypes/Profile Switch',
  parameters: {
    layout: 'fullscreen'
  }
}

export function profileSwitch() {
  const [overlay, setOverlay] = useState('') // '' | 'profile' | 'menu'
  function onMenuButtonClick() {
    setOverlay(x => (x === 'menu' ? '' : 'menu'))
  }
  function onProfileButtonClick() {
    setOverlay(x => (x === 'profile' ? '' : 'profile'))
  }

  const anyLinkClick = () => {
    setOverlay('')
  }

  const [currentProfile, setCurrentProfile] = useState(user)
  const [changingToProfileId, setChangingToProfileId] = useState()
  const changeProfile = d => {
    setChangingToProfileId(d.id)
    setTimeout(() => {
      setCurrentProfile(d)
      setChangingToProfileId(null)
      setOverlay('')
    }, 1000)
  }
  const closeProfileSwitch = () => setOverlay('')

  return (
    <PageLayout
      navbar={
        <Navbar.MenuWrapper menuIsOpen={!!overlay}>
          <Navbar
            brandName="Leihs"
            brandItem={{ role: 'button', onClick: anyLinkClick }}
            menuIsOpen={overlay === 'menu'}
            menuItem={{
              onClick: onMenuButtonClick,
              'aria-controls': 'menu',
              'aria-expanded': overlay === 'menu',
              role: 'button'
            }}
            profileButtonProps={{
              onClick: onProfileButtonClick,
              profileShort: currentProfile.shortName,
              isOpen: overlay === 'profile',
              'aria-controls': 'profile-menu',
              'aria-expanded': overlay === 'profile'
            }}
            cartItemCount={0}
            cartItem={{ onClick: anyLinkClick }}
          />

          <Menu show={overlay === 'menu'} id="menu">
            <Menu.Group title="Ausleihen">
              <Menu.Link onClick={anyLinkClick}>...</Menu.Link>
              <Menu.Link onClick={anyLinkClick}>...</Menu.Link>
            </Menu.Group>
            <Menu.Group title="Benutzerdaten">
              <Menu.Link onClick={anyLinkClick}>...</Menu.Link>
              <Menu.Link onClick={anyLinkClick}>...</Menu.Link>
            </Menu.Group>
            <Menu.Group title="Leihs">
              <Menu.Link onClick={anyLinkClick}>...</Menu.Link>
              <Menu.Link onClick={anyLinkClick}>...</Menu.Link>
            </Menu.Group>
          </Menu>

          {overlay === 'profile' && (
            <ProfileMenu
              id="profile-menu"
              user={user}
              delegations={delegations}
              currentProfile={currentProfile}
              onSelectProfile={changeProfile}
              changingToProfileId={changingToProfileId}
              onDismiss={closeProfileSwitch}
            />
          )}
        </Navbar.MenuWrapper>
      }
    >
      <p className="text-muted">Interactive story which shows how to switch the profile.</p>
      <p className="text-muted pt-5">
        More stories about <code>`ProfileMenu`</code>:
      </p>
      <p className="text-muted">
        <button className="btn btn-light btn-sm" onClick={linkTo('MobileApp/Design Components/Layout/ProfileMenu')}>
          Design Components &gt; Layout &gt; ProfileMenu
        </button>
      </p>
    </PageLayout>
  )
}

const user = {
  id: 'U.001',
  name: 'Anna Beispiel (persönlich)',
  shortName: 'AB'
}
const delegations = [
  {
    id: 'D.001',
    name: 'Diplomausstellung 2022',
    shortName: 'D2'
  },
  {
    id: 'D.002',
    name: 'Filmprojektgruppe Zoo',
    shortName: 'FP'
  },
  {
    id: 'D.003',
    name: 'Eine superduper Ausstellung über lange Titel - Raum 302 - 2.8.-31.8.2022',
    shortName: 'ES'
  }
]
