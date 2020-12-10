import React from 'react'
import { action } from '@storybook/addon-actions'
import ModelFilterForm from './ModelFilterForm'

export default {
  title: 'MobileApp/Components/ModelFilterForm',
  component: ModelFilterForm,
  parameters: {
    // layout: 'fullscreen'
  }
}

const onSubmitAction = action('get-results')
const onClearAction = action('clear')

const fullExampleProps = {
  initialTerm: 'beamer',
  user: {
    id: 'a06ec573-d8da-4999-81fa-63226a8b00b7',
    name: 'Hans Heiri'
  },
  initialUserId: '37372089-450b-49ec-8486-fcc3a9e6ae22',
  delegations: [
    { id: '37372089-450b-49ec-8486-fcc3a9e6ae22', name: 'Delegation 1' },
    { id: '3013ff5a-0203-4ec5-bda5-61871ddd5dc7', name: 'Delegation 2' }
  ],
  initialPoolId: 'de577733-0f4a-4b15-b217-e79df29afbcb',
  pools: [
    { id: 'de577733-0f4a-4b15-b217-e79df29afbcb', name: 'Pool 1' },
    { id: 'e441b4c0-3477-4970-82c6-f5ed8ad9ccc1', name: 'Pool 2' }
  ],
  initialAvailableBetween: true,
  initialStartDate: '2020-12-14',
  initialEndDate: '2020-12-15',
  initialQuantity: 2,
  onSubmit: onSubmitAction,
  onClear: onClearAction
}

const minimalExampleProps = {
  pools: [
    { id: 'de577733-0f4a-4b15-b217-e79df29afbcb', name: 'Pool 1' },
    { id: 'e441b4c0-3477-4970-82c6-f5ed8ad9ccc1', name: 'Pool 2' }
  ],
  onSubmit: onSubmitAction,
  onClear: onClearAction
}

const minimalWithDelegationExampleProps = {
  user: {
    id: 'a06ec573-d8da-4999-81fa-63226a8b00b7',
    name: 'Hans Heiri'
  },
  initialUserId: '37372089-450b-49ec-8486-fcc3a9e6ae22',
  delegations: [
    { id: '37372089-450b-49ec-8486-fcc3a9e6ae22', name: 'Delegation 1' },
    { id: '3013ff5a-0203-4ec5-bda5-61871ddd5dc7', name: 'Delegation 2' }
  ],
  pools: [
    { id: 'de577733-0f4a-4b15-b217-e79df29afbcb', name: 'Pool 1' },
    { id: 'e441b4c0-3477-4970-82c6-f5ed8ad9ccc1', name: 'Pool 2' }
  ],
  onSubmit: onSubmitAction,
  onClear: onClearAction
}

export const fullExample = () => <ModelFilterForm {...fullExampleProps} />
export const minimalExample = () => <ModelFilterForm {...minimalExampleProps} />
export const minimalWithDelegationExample = () => <ModelFilterForm {...minimalWithDelegationExampleProps} />
