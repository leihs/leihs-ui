import React from 'react'
import { action } from '@storybook/addon-actions'
import FilterSummary from '../Components/FilterSummary'
import OrderList from '../Components/OrderList'
import PageLayoutMock from '../Components/PageLayoutMock'

export default {
  title: 'MobileApp/Wireframes2021/Pages/Page12',
  parameters: { layout: 'fullscreen' },
  component: OrderList
}

export const Page12 = ({ ordersByBasicState, onItemClick }) => {
  return (
    <PageLayoutMock title="Meine Ausleihen">
      <FilterSummary>Alle Ausleihen</FilterSummary>
      <OrderList ordersByBasicState={ordersByBasicState} onItemClick={onItemClick} />
    </PageLayoutMock>
  )
}

const sampleOrders = [
  {
    basicState: { key: 'open', label: 'Offen' },
    orders: [
      {
        id: '98510838-a6ec-4752-823e-000000000001',
        title: 'Video Semesterprojekt',
        purpose: 'Material für das Video Semesterprojekt bei Prof. Zimmer',
        startDate: '6.5.2020',
        endDate: '30.6.2020',
        durationDays: 24,
        modelCount: 11,
        isCompleted: false,
        stateGroups: [
          {
            id: 'f1a574c5-3c23-4c86-827e-940e1e7bc9e4',
            type: 'inApproval',
            totalPoolCount: 3,
            approvedPoolCount: 1
          }
        ]
      },
      {
        id: '98510838-a6ec-4752-823e-000000000002',
        title: 'Werkschau 2021',
        purpose: '',
        startDate: '15.3.2020',
        endDate: '23.3.2020',
        durationDays: 8,
        modelCount: 7,
        isCompleted: false,
        stateGroups: [
          {
            id: 'f1a574c5-3c23-4c86-827e-940e1e7bc9e4',
            type: 'inHandOver',
            totalCount: 7,
            handedOverCount: 4
          }
        ]
      },
      {
        id: '98510838-a6ec-4752-823e-000000000003',
        title: 'Siebdruck Material',
        purpose: '',
        startDate: '18.2.2020',
        endDate: '10.4.2020',
        durationDays: 54,
        modelCount: 4,
        isCompleted: false,
        stateGroups: [
          {
            id: 'f1a574c5-3c23-4c86-827e-940e1e7bc9e4',
            type: 'lent',
            durationDays: 54,
            remainingDays: 47
          }
        ]
      },
      {
        id: '98510838-a6ec-4752-823e-000000000004',
        title: 'Freitags Experiment',
        purpose: '',
        startDate: '12.2.2020',
        endDate: '10.4.2020',
        durationDays: 2,
        modelCount: 3,
        isCompleted: false,
        stateGroups: [
          {
            id: 'f1a574c5-3c23-4c86-827e-940e1e7bc9e4',
            type: 'inReturn',
            totalCount: 3,
            returnedCount: 2
          }
        ]
      }
    ]
  },
  {
    basicState: { key: 'closed', label: 'Abgeschlossen' },
    orders: [
      {
        id: '98510838-a6ec-4752-823e-000000000005',
        title: 'Diplomausstellung 2019',
        purpose: '',
        startDate: '1.4.2019',
        endDate: '12.6.2019',
        durationDays: 72,
        modelCount: 16,
        isCompleted: true,
        stateGroups: [
          {
            id: 'f1a574c5-3c23-4c86-827e-940e1e7bc9e4',
            type: 'allItemsReturned',
            totalCount: 3,
            returnedCount: 3
          }
        ]
      },
      {
        id: '98510838-a6ec-4752-823e-000000000006',
        title: 'Semesterfest',
        purpose: '',
        startDate: '23.2.2019',
        endDate: '24.2.2019',
        durationDays: 2,
        modelCount: 1,
        isCompleted: true,
        stateGroups: [
          {
            id: 'f1a574c5-3c23-4c86-827e-940e1e7bc9e4',
            type: 'allItemsRejected',
            totalCount: 1,
            rejectedCount: 1
          }
        ]
      },
      {
        id: '98510838-a6ec-4752-823e-000000000007',
        title: 'Kurs Präsentation',
        purpose: '',
        startDate: '16.7.2018',
        endDate: '17.7.2018',
        durationDays: 2,
        modelCount: 1,
        isCompleted: true,
        stateGroups: [
          {
            id: 'f1a574c5-3c23-4c86-827e-940e1e7bc9e4',
            type: 'transferred',
            transferUser: {
              id: '111174c5-3c23-4c86-827e-940e1e70000',
              name: 'Reto Brunner'
            }
          }
        ]
      }
    ]
  }
]

Page12.storyName = 'Meine Ausleihen'
Page12.args = {
  ordersByBasicState: sampleOrders,
  onItemClick: action('item-click')
}
