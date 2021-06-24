import React from 'react'
import { action } from '@storybook/addon-actions'
import ModelFilterForm from '../../Components/ModelFilterForm'

export default {
  title: 'MobileApp/Wireframes/Katalog/Filter',
  component: ModelFilterForm,
  parameters: { layout: 'fullscreen' },
  args: {
    onSubmit: action('get-results'),
    onClear: action('clear')
  }
}

export const filter = ({ onSubmit, onClear }) => {
  const modelFilterFormProps = {
    delegations: [
      { id: '37372089-450b-49ec-8486-fcc3a9e6ae22', name: 'Delegation 1' },
      { id: '3013ff5a-0203-4ec5-bda5-61871ddd5dc7', name: 'Delegation 2' }
    ],
    pools: [
      { id: '8bd16d45-056d-5590-bc7f-12849f034351', name: 'Ausleihe Toni-Areal' },
      { id: '5863967f-9804-4909-a9b7-92254616d6b2', name: 'FM-Inventar' },
      { id: 'a02b8163-9a16-5066-b48e-9eb74cf8b791', name: 'Fundus-Dok' },
      { id: '5dd25b58-fa56-5095-bd97-2696d92c2fb1', name: 'IT-Zentrum' },
      { id: 'ffaa3aea-2a1f-4d6a-bdfc-f3be93699750', name: 'ITZ Occasions-Shop' },
      { id: '3977012c-ce0e-501f-889b-8715fdb5d83b', name: 'ITZ Software' }
    ],
    user: {
      id: 'a06ec573-d8da-4999-81fa-63226a8b00b7',
      name: 'Joël Gähwiler'
    },
    initialShowTerm: true,
    initialTerm: 'Mikrofon',
    initialShowAvailability: true,
    initialStartDate: undefined,
    initialEndDate: undefined,
    initialShowPools: true,
    initialPoolId: '8bd16d45-056d-5590-bc7f-12849f034351',
    initialShowDelegation: true,
    initialDelegationId: undefined, // (defaults to user.id)
    onSubmit,
    onClear
  }

  return <ModelFilterForm {...modelFilterFormProps} />
}

/* export const minimalExample = ({ onSubmit, onClear }) => {
  const minimalExampleProps = {
    pools: [
      { id: 'de577733-0f4a-4b15-b217-e79df29afbcb', name: 'Pool 1' },
      { id: 'e441b4c0-3477-4970-82c6-f5ed8ad9ccc1', name: 'Pool 2' }
    ],
    onSubmit,
    onClear
  }
  return <ModelFilterForm {...minimalExampleProps} />
}

export const minimalWithDelegationExample = ({ onSubmit, onClear }) => {
  const minimalWithDelegationExampleProps = {
    delegations: [
      { id: '37372089-450b-49ec-8486-fcc3a9e6ae22', name: 'Delegation 1' },
      { id: '3013ff5a-0203-4ec5-bda5-61871ddd5dc7', name: 'Delegation 2' }
    ],
    pools: [
      { id: 'de577733-0f4a-4b15-b217-e79df29afbcb', name: 'Pool 1' },
      { id: 'e441b4c0-3477-4970-82c6-f5ed8ad9ccc1', name: 'Pool 2' }
    ],
    user: {
      id: 'a06ec573-d8da-4999-81fa-63226a8b00b7',
      name: 'Hans Heiri'
    },
    initialDelegationId: '37372089-450b-49ec-8486-fcc3a9e6ae22',
    onSubmit,
    onClear
  }
  return <ModelFilterForm {...minimalWithDelegationExampleProps} />
}
 */
