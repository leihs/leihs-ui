import React from 'react'
import PageLayout from './PageLayout'

export default {
  title: 'MobileApp/DesignComponents/PageLayout',
  parameters: { layout: 'fullscreen' },
  component: PageLayout
}
const lorem =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'

export const pageLayout = () => {
  return (
    <PageLayout title="Titel" preTitle="Kontext" brandName="Leihs" cartItemCount={3}>
      {lorem}
    </PageLayout>
  )
}

export const pageLayoutHeader = () => {
  return (
    <PageLayout brandName="Leihs" cartItemCount={3}>
      <PageLayout.Header preTitle="Audio" title="Mischpulte & CD Player" />
      <PageLayout.Divider />
      <p>Title only:</p>
      <PageLayout.Header title={lorem} />
      <PageLayout.Divider />
      <p>Pre-title only:</p>
      <PageLayout.Header preTitle={lorem} />
    </PageLayout>
  )
}

export const pageLayoutDivider = () => {
  return (
    <PageLayout title="Divider" brandName="Leihs" cartItemCount={3}>
      <PageLayout.Divider />
      {lorem}
      <PageLayout.Divider />
      {lorem}
      <PageLayout.Divider style={{ borderStyle: 'dashed', borderColor: 'black' }} />
      (The divider can also be styled)
    </PageLayout>
  )
}

export const pageLayoutDividedStack = () => {
  return (
    <PageLayout title="Divided List" brandName="Leihs" cartItemCount={3}>
      <PageLayout.DividedStack>
        <div className="my-3">{lorem}</div>
        <div className="my-3">{lorem}</div>
        <div className="my-3">{lorem}</div>
      </PageLayout.DividedStack>
    </PageLayout>
  )
}
