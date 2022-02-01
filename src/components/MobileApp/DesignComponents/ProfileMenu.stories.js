import React from 'react'
import { linkTo } from '@storybook/addon-links'
import { action } from '@storybook/addon-actions'
import ProfileMenu from './ProfileMenu'

export default {
  title: 'MobileApp/Design Components/Layout/ProfileMenu',
  component: ProfileMenu
}

export function profileMenu() {
  return (
    <>
      <h1>ProfileMenu</h1>

      <div className="position-relative">
        <ProfileMenu
          user={user}
          delegations={delegations}
          currentProfile={{ ...delegations[1] }}
          onSelectProfile={action('change-profile')}
          onDismiss={action('dismiss')}
        />
      </div>

      <p></p>
      <p className="text-muted">For an example with more context see:</p>
      <p className="text-muted">
        <button className="btn btn-light btn-sm" onClick={linkTo('MobileApp/Wireframes/Profile Switch')}>
          Wireframes &gt; Profile Switch
        </button>
      </p>
    </>
  )
}

profileMenu.storyName = 'ProfileMenu'

export function waitingState() {
  return (
    <>
      <h1>ProfileMenu - Waiting state</h1>

      <div className="position-relative">
        <ProfileMenu
          user={user}
          delegations={delegations}
          currentProfile={{ ...delegations[1] }}
          changingToProfileId={user.id}
          onSelectProfile={action('change-profile')}
          onDismiss={action('dismiss')}
        />
      </div>
    </>
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
    name: 'Projektteam 1',
    shortName: 'P1'
  },
  {
    id: 'D.002',
    name: 'Projektteam 2',
    shortName: 'P2'
  }
]
