import React from 'react'
import PageLayout, { PageLayoutDivider } from './PageLayout'

export default {
  title: 'MobileApp/Wireframes2021/Components/PageLayout',
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

export const pageLayoutDivider = () => {
  return (
    <PageLayout title="Titel" preTitle="Kontext" brandName="Leihs" cartItemCount={3}>
      The content element has horizontal padding - use PageLayoutDivider as a full width ruler (negative margin).
      <PageLayoutDivider />
      It can also be styled.
      <PageLayoutDivider className="my-2" style={{ borderColor: 'black' }} />
    </PageLayout>
  )
}
