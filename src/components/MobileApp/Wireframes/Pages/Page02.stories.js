import React from 'react'
import FilterSummary from '../Components/FilterSummary'
import ListAsGridSquare from '../Components/ListAsGridSquare'
import PageLayoutMock from '../Components/PageLayoutMock'
import Section from '../Components/Section'
import { categoryListProps } from '../sample-props'

export default {
  title: 'MobileApp/Wireframes2021/Pages/Page02',
  parameters: { layout: 'fullscreen' }
}

export const Page02 = () => {
  return (
    <PageLayoutMock title="Katalog">
      <FilterSummary>Nur Ausleihe Toni, jetzt verfügbar</FilterSummary>
      <Section title="Kategorien">
        <ListAsGridSquare {...categoryListProps} />
      </Section>
    </PageLayoutMock>
  )
}

Page02.storyName = 'Katalog Level 0'
