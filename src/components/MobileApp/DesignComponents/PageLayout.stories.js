import React from 'react'
import { linkTo } from '@storybook/addon-links'
import PageLayout from './PageLayout'
import ErrorView from './ErrorView'
import Navbar from './Navbar'

export default {
  title: 'MobileApp/Design Components/Layout/PageLayout',
  component: PageLayout
}
const lorem =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'

export const pageLayout = () => {
  const navbar = <div className="border-bottom text-center p-2">Navbar</div>
  return (
    <div>
      <h1>PageLayout</h1>
      <p className="text-muted">The layout consists of a zone for the navbar and a padded zone for the content:</p>
      <div className="shadow">
        <PageLayout navbar={navbar}>{lorem}</PageLayout>
      </div>
    </div>
  )
}
pageLayout.storyName = 'PageLayout'

export const withNavbar = () => {
  const navbar = <Navbar brandName="leihs" cartItemCount={3} />
  return (
    <div>
      <h1>PageLayout</h1>
      <p className="text-muted">The navbar is a separate component, here&apos;s how it looks in context:</p>
      <div className="shadow">
        <PageLayout navbar={navbar}>{lorem}</PageLayout>
      </div>
    </div>
  )
}

export const horizontalInset = () => {
  const navbar = <Navbar brandName="leihs" cartItemCount={3} />
  return (
    <div>
      <h1>PageLayout</h1>
      <p className="text-muted">The content area of the page layout has a horizontal inset (padding).</p>
      <p className="text-muted">
        If for some reason edge-to-edge content is needed, use the <code>.page-inset-x-inverse</code> class.
      </p>
      <p className="text-muted">
        To re-apply horizontal inset, use <code>.page-inset-x</code>
      </p>
      <div className="shadow">
        <PageLayout navbar={navbar}>
          <div className="border mb-3">Normal content</div>
          <div className="border mb-3 page-inset-x-inverse">Edge-to-edge content</div>
          <div className="border mb-3 page-inset-x-inverse page-inset-x">Edge-to-edge content, inset re-applied</div>
        </PageLayout>
      </div>
    </div>
  )
}

export const errorBoundary = () => {
  const navbar = <Navbar brandName="leihs" cartItemCount={3} />
  return (
    <div>
      <h1>PageLayout - ErrorBoundary</h1>
      <p className="text-muted">Navbar will stay alive when page content rendering crashes (and vice versa).</p>
      <div className="shadow mb-4">
        <PageLayout navbar={navbar}>
          <ErrorView
            title="Error displaying this content"
            details={'- bar\n- baz'}
            actions={[
              { title: 'Reload current page', onClick: () => document.location.reload(), variant: 'button' },
              { title: 'Go to start page', href: '/', variant: 'link-button' }
            ]}
          />
        </PageLayout>
      </div>
      <p className="text-muted">For an interactive example see:</p>
      <p className="text-muted">
        <button className="btn btn-light btn-sm" onClick={linkTo('MobileApp/Wireframes/Errors')}>
          Wireframes &gt; Errors
        </button>
      </p>
    </div>
  )
}
errorBoundary.storyName = 'ErrorBoundary'
