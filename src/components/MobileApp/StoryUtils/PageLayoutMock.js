import React from 'react'
import PageLayout from '../DesignComponents/PageLayout'
import Topnav from '../DesignComponents/Topnav'

export default function PageLayoutMock({ children, ...overrides }) {
  const pageLayoutProps = {
    topBar: (
      <Topnav
        cartItemCount={3}
        userProfileShort="AB"
        appMenuLinkLabel="Ausleihen"
        mainMenuItems={[{ label: 'Nav 1', selected: true }, { label: 'Nav 2' }, { label: 'Nav 3' }]}
      />
    ),
    ...overrides
  }
  return <PageLayout {...pageLayoutProps}>{children}</PageLayout>
}
