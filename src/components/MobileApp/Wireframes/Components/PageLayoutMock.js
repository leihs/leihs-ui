import React from 'react'
import PageLayout from './PageLayout'

export default function PageLayoutMock({ children, ...overrides }) {
  const pageLayoutProps = {
    title: undefined,
    preTitle: undefined,
    brandName: 'Leihs',
    cartItemCount: 3,
    ...overrides
  }
  return <PageLayout {...pageLayoutProps}>{children}</PageLayout>
}
