import React from 'react'
import PageLayout from './PageLayout'
import Navbar from './Navbar'
import Section from './Section'

export default {
  title: 'MobileApp/DesignComponents/PageLayout',
  parameters: { layout: 'fullscreen' },
  component: PageLayout
}
const lorem =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'

const navbar = <Navbar brandName="leihs" cartItemCount={3} />

export const pageLayout = () => {
  return <PageLayout navbar={navbar}>{lorem}</PageLayout>
}

export const pageLayoutHeader = () => {
  return (
    <PageLayout navbar={navbar}>
      <PageLayout.Header preTitle="Audio" title="Mischpulte & CD Player">
        and more important things
      </PageLayout.Header>
      <Section title="Then the content starts">{lorem}</Section>
      <PageLayout.Divider />
      <p>Title only:</p>
      <PageLayout.Header title="Lorem ipsum" />
      <PageLayout.Divider />
      <p>Pre-title only:</p>
      <PageLayout.Header preTitle="Lorem ipsum" />
    </PageLayout>
  )
}

export const pageLayoutDivider = () => {
  return (
    <PageLayout navbar={navbar}>
      {lorem}
      <PageLayout.Divider />
      {lorem}
    </PageLayout>
  )
}

export const pageLayoutDividedStack = () => {
  return (
    <PageLayout navbar={navbar}>
      <PageLayout.DividedStack>
        <div>{lorem}</div>
        <div>{lorem}</div>
        <div>{lorem}</div>
      </PageLayout.DividedStack>
    </PageLayout>
  )
}

export const pageLayoutStack1 = () => {
  return (
    <PageLayout navbar={navbar}>
      <PageLayout.Stack1>
        <div>{lorem}</div>
        <div>{lorem}</div>
        <div>{lorem}</div>
      </PageLayout.Stack1>
    </PageLayout>
  )
}

export const pageLayoutStack2 = () => {
  return (
    <PageLayout navbar={navbar}>
      <PageLayout.Stack2>
        <div>{lorem}</div>
        <div>{lorem}</div>
        <div>{lorem}</div>
      </PageLayout.Stack2>
    </PageLayout>
  )
}
