import React from 'react'
import { modelListProps } from '../sample-props'
import FilterSummary from '../Components/FilterSummary'
import ListAsGridSquare from '../Components/ListAsGridSquare'
import PageLayoutMock from '../Components/PageLayoutMock'
import Section from '../Components/Section'

export default {
  title: 'MobileApp/Wireframes2021/Pages/Page04',
  parameters: { layout: 'fullscreen' }
}

export const Page04 = () => {
  return (
    <PageLayoutMock title="Mischpulte & CD Player" preTitle="Audio">
      <FilterSummary>Nur Ausleihe Toni, jetzt verfügbar</FilterSummary>
      <Section title="Gegenstände" collapsible="true">
        <ListAsGridSquare {...modelListProps} />
      </Section>
    </PageLayoutMock>
  )
}

Page04.storyName = 'Katalog Level 2'
