import React from 'react'
import PageLayout from '../DesignComponents/PageLayout'
import Navbar from '../DesignComponents/Navbar'

export default function PageLayoutMock({ children, ...overrides }) {
  const pageLayoutProps = {
    topBar: <Navbar cartItemCount={3} userProfileShort="AB" appMenuLinkLabel="Bereich" />,
    ...overrides
  }
  return <PageLayout {...pageLayoutProps}>{children}</PageLayout>
}
