import React from 'react'
import Section from './Section'

export default {
  title: 'MobileApp/Design Components/Content/Section',
  component: Section
}

export const section = () => {
  return (
    <div>
      <h1>Section</h1>
      <p className="text-muted">Wraps a primary piece of content, has a title and often is collapsible.</p>
      <Section title="Ibex" collapsible>
        The Alpine ibex (Capra ibex), also known as the steinbock, bouquetin, or simply ibex, is a species of wild goat
        that lives in the mountains of the European Alps.
      </Section>
    </div>
  )
}

export const collapsingOptions = () => {
  return (
    <div>
      <h1>Section</h1>
      <p className="text-muted">Uncollapsible example:</p>
      <Section title="Ibex" className="mb-3">
        The Alpine ibex (Capra ibex), also known as the steinbock, bouquetin, or simply ibex, is a species of wild goat
        that lives in the mountains of the European Alps.
      </Section>
      <p className="text-muted">Default-collapsed example:</p>
      <Section title="Ibex" collapsible defaultCollapsed>
        The Alpine ibex (Capra ibex), also known as the steinbock, bouquetin, or simply ibex, is a species of wild goat
        that lives in the mountains of the European Alps.
      </Section>
    </div>
  )
}

export const restProps = () => {
  return (
    <div>
      <h1>Section</h1>
      <p className="text-muted">Set arbitrary attributes with restProps</p>
      <Section title="Ibex" collapsible className="text-primary">
        The Alpine ibex (Capra ibex), also known as the steinbock, bouquetin, or simply ibex, is a species of wild goat
        that lives in the mountains of the European Alps.
      </Section>
    </div>
  )
}
