import React from 'react'

import { AppWrapper, MainView, Navbar, Page, SubSection, CallToAction } from './AppLayout'
import CategoryList from './CategoryList'

import { exampleProps1 as exampleCategories } from './CategoryList.stories'

export default {
  title: 'MobileApp/Components/AppLayout',
  parameters: { layout: 'fullscreen' }
}

const fakeNavbar = (
  <Navbar brandName="LEIHS" menuItem={{ href: '#/app/borrow/about' }} cartItem={{ href: '#/app/borrow/order' }} />
)

const fakeSearchForm = (
  <div
    className="px-3 py-4 bg-light Xbg-content-muted mt-2 mb-3"
    Xstyle={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0rem 2rem inset' }}
  >
    <form action="/search" className="form form-compact">
      <div className="form-group">
        <label className="row">
          <span className="text-xs col-3 col-form-label">Suche </span>
          <div className="col-9">
            <input type="text" name="search-term" placeholder="Suche" className="form-control " value="" />
          </div>
        </label>
      </div>
      <label className="row">
        <span className="text-xs col-3 col-form-label">Aus </span>
        <div className="col-9">
          <select className="form-control" name="user-id">
            <option value="all" selected="">
              Allen Geräteparks
            </option>
            <option value="8bd16d45-056d-5590-bc7f-12849f034351">Ausleihe Toni-Areal</option>
            <option value="a02b8163-9a16-5066-b48e-9eb74cf8b791">Fundus-DDK</option>
            <option value="5dd25b58-fa56-5095-bd97-2696d92c2fb1">IT-Zentrum</option>
            <option value="4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04">ITZ-Ausstellungen</option>
            <option value="3977012c-ce0e-501f-889b-8715fdb5d83b">ITZ-Software</option>
          </select>
        </div>
      </label>
      <div className="form-group">
        <div className="row">
          <span className="text-xs col-3 col-form-label">Time Span</span>
          <div className="col-9">
            <label className="custom-control custom-checkbox">
              <input type="checkbox" name="only-available" className="custom-control-input" />
              <span className="custom-control-label">Show available only</span>
            </label>
          </div>
        </div>
      </div>
      {/* (advanced form ommitted) */}
      <button type="submit" className="btn btn-success dont-invert rounded-pill mt-2">
        Get Results
      </button>
      <button type="button" className="btn btn-secondary dont-invert rounded-pill mx-1 mt-2">
        Clear
      </button>
    </form>
  </div>
)

class ErrorThrower extends React.Component {
  /* eslint-disable-next-line react/require-render-return */
  render() {
    throw new Error('I crashed!')
  }
}

// stories

export const empty_page = () => (
  <AppWrapper>
    <MainView navbar={fakeNavbar}>
      <Page title={'Title'}>Content</Page>
    </MainView>
  </AppWrapper>
)
export const empty_page_with_subtitle_and_backlink = () => (
  <AppWrapper>
    <MainView navbar={fakeNavbar}>
      <Page title={'Title'} backLink={{ href: '#', children: 'back' }} subTitle="Subtitle">
        Content
      </Page>
    </MainView>
  </AppWrapper>
)

export const empty_cart_with_call_to_action = () => (
  <AppWrapper>
    <MainView navbar={fakeNavbar}>
      <Page title={'Bestellübersicht'}>
        <div className="d-flex">
          <CallToAction
            className="xmy-4 w-100 my-auto"
            actions={[{ href: '#/app/borrow/', children: 'Gegenstände ausleihen' }]}
          >
            Deine Bestellung ist leer
          </CallToAction>
        </div>
      </Page>
    </MainView>
  </AppWrapper>
)

export const homepage = () => (
  <AppWrapper>
    <MainView navbar={fakeNavbar}>
      <Page Xtitle={'Bestellübersicht'}>
        {fakeSearchForm}
        <CallToAction className="mt-2 mb-4" actions={[{ href: '#/app/borrow/orders', children: 'Abholungen ansehen' }]}>
          Du hast bald eine Abholung!
        </CallToAction>
        <SubSection title="Kategorien" moreLink={{ href: '#', children: 'Alle' }}>
          <CategoryList {...exampleCategories} />
        </SubSection>
      </Page>
    </MainView>
  </AppWrapper>
)

export const page_with_error_crash = () => (
  <AppWrapper>
    <MainView>
      <Page>
        <ErrorThrower />
      </Page>
    </MainView>
  </AppWrapper>
)
page_with_error_crash.storyName = 'Page with Crash (Error Boundary)'
