import React from 'react'
import PageLayout from '../DesignComponents/PageLayout'
import Navbar from '../DesignComponents/Navbar'

export default function PageLayoutMock({ children, ...overrides }) {
  const pageLayoutProps = {
    navbar: <Navbar brandName="Leihs" cartItemCount={3} />,
    ...overrides
  }
  return <PageLayout {...pageLayoutProps}>{children}</PageLayout>
}
