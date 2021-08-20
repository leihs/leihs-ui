import React from 'react'

import { action } from '@storybook/addon-actions'

import PageLayoutMock from './StoryUtils/PageLayoutMock'
import UserProfilePage from './UserProfilePage.js'

export default {
  title: 'MobileApp/Integrated Components/UserProfilePage',
  component: UserProfilePage,
  parameters: { layout: 'fullscreen' },
  args: { onLogoutClick: action() }
}

export function userProfilePage({ onLogoutClick }) {
  const txt = { pageTitle: 'Nutzerdaten', sectionContracts: 'Verträge', sectionDelegations: 'Delegationen' }
  return (
    <PageLayoutMock>
      <UserProfilePage txt={txt} currentUser={currentUser} contracts={[]} onLogoutClick={onLogoutClick} />
    </PageLayoutMock>
  )
}
userProfilePage.storyName = 'UserProfilePage'

const currentUser = {
  user: {
    delegations: [{ id: '123', name: 'Master Design', responsible: { name: 'Corina Zuberbühler' } }],
    email: 'joel.gaehwiler@zhdk.ch',
    orgId: '170663',
    phone: '079 444 44 44',
    name: 'Joël Gähwiler',
    contracts: {
      edges: [
        {
          node: {
            id: '100001',
            compactId: '0001',
            state: 'closed',
            createdAt: '2021-05-26T12:00:00Z',
            inventoryPool: {
              id: '5dd25b58-fa56-5095-bd97-2696d92c2fb1',
              shortname: 'INV',
              name: 'Ausleihe Toni-Areal',
              isActive: true
            }
          }
        },
        {
          node: {
            id: '100002',
            compactId: '0002',
            state: 'closed',
            createdAt: '2019-04-11T12:00:00Z',
            inventoryPool: {
              id: '77e88ec8-9ff6-5435-818e-dc902fc631a6',
              shortname: 'WAUS',
              name: 'Ausleihe Werkstatt',
              isActive: true
            }
          }
        },
        {
          node: {
            id: '10003',
            compactId: '0003',
            state: 'closed',
            createdAt: '2021-01-03T12:00:00Z',
            inventoryPool: {
              id: '5dd25b58-fa56-5095-bd97-2696d92c2fb1',
              shortname: 'INV',
              name: 'Ausleihe Toni-Areal',
              isActive: true
            }
          }
        },
        {
          node: {
            id: '100004',
            compactId: '0004',
            state: 'closed',
            createdAt: '2020-10-23T12:00:00Z',
            inventoryPool: {
              id: '77e88ec8-9ff6-5435-818e-dc902fc631a6',
              shortname: 'WAUS',
              name: 'Ausleihe Werkstatt',
              isActive: true
            }
          }
        }
      ]
    },
    badgeId: 'E012XAMPLE',
    organization: 'zhdk.ch',
    secondaryEmail: 'joel.gaehwiler@example.com',
    id: '123456',
    suspensions: [],
    inventoryPools: []
  }
}
