import React from 'react'
import PageLayout from './PageLayout'
import Section from './Section'

export default {
  title: 'MobileApp/DesignComponents/Section',
  component: Section
}

const lorem =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'

export const plain = () => {
  return <Section title="Plain">{lorem}</Section>
}

export const collapsible = () => {
  return (
    <Section title="Collapsible" collapsible={true}>
      {lorem}
    </Section>
  )
}

export const collapsed = () => {
  return (
    <Section title="Collapsed" collapsible={true} defaultCollapsed={true}>
      {lorem}
    </Section>
  )
}

export const spacing = () => {
  return (
    <>
      <p>A section does not have vertical spacing per se!</p>
      <Section className="border">default (no spacing)</Section>
      <Section className="border">default (no spacing)</Section>
      <PageLayout.Divider />
      <p>Use Bootstrap utility classes:</p>
      <Section className="border mb-4">.mb-4</Section>
      <Section className="border mb-4">.mb-4</Section>
      <p>Use PageLayout.StackX1/2</p>
      <PageLayout.Stack1>
        <Section className="border">in a Stack1</Section>
        <Section className="border">in a Stack1</Section>
      </PageLayout.Stack1>
      <PageLayout.Stack2>
        <Section className="border">in a Stack2</Section>
        <Section className="border">in a Stack2</Section>
      </PageLayout.Stack2>
    </>
  )
}

export const usingRestProps = () => {
  return (
    <Section title="Using restProps" className="p-4" style={{ backgroundColor: 'pink' }}>
      {lorem}
    </Section>
  )
}
