import React from 'react'
import { action } from '@storybook/addon-actions'
import OrderDetail from '../../Components/OrderDetail'
import PageLayoutMock from '../../../StoryUtils/PageLayoutMock'

export default {
  title: 'MobileApp/Wireframes/MeineAusleihen/Detail',
  parameters: { layout: 'fullscreen' },
  component: OrderDetail
}

export const detail = ({ order, onOrderCancelClick }) => {
  return (
    <PageLayoutMock>
      <OrderDetail order={order} onOrderCancelClick={onOrderCancelClick} />
    </PageLayoutMock>
  )
}

const sampleOrder = {
  // Primary data (same structure in list entries):
  id: '98510838-a6ec-4752-823e-5a3db2282775',
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
  ],
  // Details:
  isCancellable: true,
  pools: [
    {
      id: '8bd16d45-056d-5590-bc7f-12849f034351',
      name: 'Ausleihe Toni-Areal',
      modelCount: 3,
      orderStateLabel: 'genehmigt'
    },
    {
      id: '5dd25b58-fa56-5095-bd97-2696d92c2fb1',
      name: 'IT-Zentrum',
      modelCount: 2,
      orderStateLabel: 'beantragt'
    }
  ],
  models: [
    {
      reservation: {
        id: '958fb184-fd1a-546f-965d-4852cf997563',
        startDate: '26.5.2021',
        endDate: '6.6.2021',
        durationDays: 13,
        quantity: 1,
        isCompleted: false
      },
      model: {
        id: '40ca9617-f879-5092-8789-b583f8064f9c',
        name: 'ARRI Alexa DTE-SXS Super 35mm'
      },
      pool: {
        id: '8bd16d45-056d-5590-bc7f-12849f034351',
        name: 'Ausleihe Toni-Areal'
      }
    },
    {
      reservation: {
        id: '958fb184-fd1a-546f-965d-4852cf997563',
        startDate: '27.5.2021',
        endDate: '6.6.2021',
        durationDays: 12,
        quantity: 2,
        isCompleted: false
      },
      model: {
        id: '40ca9617-f879-5092-8789-b583f8064f9c',
        name: 'Glasfilter Tiffen 4x4 Pol'
      },
      pool: {
        id: '8bd16d45-056d-5590-bc7f-12849f034351',
        name: 'Ausleihe Toni-Areal'
      }
    }
  ],
  delegation: {
    id: 'a06ec573-d8da-4999-81fa-63226a8b00b7',
    name: 'Joël Gähwiler',
    isUser: true
  },
  documents: [
    {
      id: '1111c573-d8da-4999-81fa-63226a8b00b7',
      name: 'Werteverzeichnis',
      url: '/app/borrow/path-to-document'
    }
  ]
}

detail.args = {
  order: sampleOrder,
  onOrderCancelClick: action('order-cancel')
}
