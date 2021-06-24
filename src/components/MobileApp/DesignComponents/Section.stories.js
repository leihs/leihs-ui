import React from 'react'
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

export const usingRestProps = () => {
  return (
    <Section title="Using restProps" className="p-4" style={{ backgroundColor: 'pink' }}>
      {lorem}
    </Section>
  )
}
