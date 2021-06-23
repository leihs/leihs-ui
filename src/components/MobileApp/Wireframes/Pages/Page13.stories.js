import { action } from '@storybook/addon-actions'
import React from 'react'
import OrderFilterForm from '../Components/OrderFilterForm'
import DialogLayout from '../Components/DialogLayout'

export default {
  title: 'MobileApp/Wireframes2021/Pages/Page13',
  parameters: { layout: 'fullscreen' }
}

export const Page13 = () => {
  const onSubmitAction = action('get-results')
  const onClearAction = action('clear')

  const orderFilterFormProps = {
    delegations: [
      { id: '37372089-450b-49ec-8486-fcc3a9e6ae22', name: 'Delegation 1' },
      { id: '3013ff5a-0203-4ec5-bda5-61871ddd5dc7', name: 'Delegation 2' }
    ],
    pools: [
      { id: '8bd16d45-056d-5590-bc7f-12849f034351', name: 'Ausleihe Toni-Areal' },
      { id: '5dd25b58-fa56-5095-bd97-2696d92c2fb1', name: 'IT-Zentrum' }
    ],
    user: {
      id: 'a06ec573-d8da-4999-81fa-63226a8b00b7',
      name: 'Joël Gähwiler'
    },
    initialTerm: 'Mikrofon',
    initialOrderState: undefined,
    initialStartDate: undefined,
    initialEndDate: undefined,
    initialPoolId: '8bd16d45-056d-5590-bc7f-12849f034351',
    initialDelegationId: undefined, // (defaults to user.id)
    onSubmit: onSubmitAction,
    onClear: onClearAction
  }

  return (
    <DialogLayout title="Meine Ausleihen filtern">
      <OrderFilterForm {...orderFilterFormProps} />
    </DialogLayout>
  )
}

Page13.storyName = 'Meine Ausleihen filtern'
