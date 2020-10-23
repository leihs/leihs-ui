import React from 'react'

import { AppWrapper, MainView, Navbar, Page } from './AppLayout'

import { ReservationLines } from './ShoppingCart.js'

export default {
  title: 'MobileApp/Components/ShoppingCart',
  component: ReservationLines
}

const fakeNavbar = (
  <Navbar brandName="LEIHS" menuItem={{ href: '#/app/borrow/about' }} cartItem={{ href: '#/app/borrow/order' }} />
)

const FAKE_DATA = {
  lines: [
    {
      reservation: {
        'end-date': '2020-10-13T00:00:00Z',
        id: '973668f8-e198-4018-bde9-9dc844b71194',
        'inventory-pool': { id: '8bd16d45-056d-5590-bc7f-12849f034351', name: 'Ausleihe Toni-Areal' },
        model: {
          id: '1c18b3d3-88e8-57ac-8c28-24d3f8f77604',
          name: 'AVCHD-Kamera Sony HXR-NX5E',
          manufacturer: 'Sony',
          coverImage: {
            id: 'e2d0cfdf-745c-57cb-8c6b-09c14af6bb51',
            'image-url': require('../../static/example-images/models/e2d0cfdf-745c-57cb-8c6b-09c14af6bb51.jpg')
          }
        },
        'start-date': '2020-10-12T00:00:00Z',
        user: { id: '7da6733c-c819-5613-8cad-2a40f51c90da' }
      },
      quantity: 3,
      isEditing: false,
      isInvalid: true
    },
    {
      reservation: {
        'end-date': '2020-10-13T00:00:00Z',
        id: 'e86b8785-2f4f-44a2-87e3-7b5eaf7ddfd2',
        'inventory-pool': { id: '8bd16d45-056d-5590-bc7f-12849f034351', name: 'Ausleihe Toni-Areal' },
        model: {
          id: '1d2e607b-d811-4984-a127-95cbc11b9bbf',
          name: 'Videostativ Manfrotto 755XB/MVH500AH Videoneiger',
          manufacturer: 'Manfrotto',
          coverImage: {
            id: '0350f864-3e72-43dc-9365-b5f8ca277063',
            'image-url': require('../../static/example-images/models/0350f864-3e72-43dc-9365-b5f8ca277063.jpg')
          }
        },
        'start-date': '2020-10-12T00:00:00Z',
        user: { id: '7da6733c-c819-5613-8cad-2a40f51c90da' }
      },
      quantity: 1,
      isEditing: false,
      isInvalid: false
    }
  ]
}

export const ExampleLines = () => (
  <div>
    {/* <pre>{JSON.stringify(FAKE_DATA, 0, 2)}</pre> */}
    <ReservationLines lines={FAKE_DATA.lines} />
  </div>
)

export const ExampleCart = () => (
  <AppWrapper>
    <MainView navbar={fakeNavbar}>
      <Page title={'Warenkorb'}>
        {/* <pre>{JSON.stringify(FAKE_DATA, 0, 2)}</pre> */}
        <ReservationLines lines={FAKE_DATA.lines} />
      </Page>
    </MainView>
  </AppWrapper>
)
ExampleCart.parameters = { layout: 'fullscreen' }
