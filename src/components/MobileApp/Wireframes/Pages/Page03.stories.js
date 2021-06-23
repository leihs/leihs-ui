import React from 'react'
import { modelListProps, subCategoryListProps } from '../sample-props'
import FilterSummary from '../Components/FilterSummary'
import ListAsGridSquare from '../Components/ListAsGridSquare'
import PageLayoutMock from '../Components/PageLayoutMock'
import Section from '../Components/Section'

export default {
  title: 'MobileApp/Wireframes2021/Pages/Page03',
  parameters: { layout: 'fullscreen' }
}

export const Page03 = () => {
  return (
    <PageLayoutMock title="Audio">
      <FilterSummary>Nur Ausleihe Toni, jetzt verfügbar</FilterSummary>
      <Section title="Unterkategorien" collapsible="true">
        <ListAsGridSquare {...subCategoryListProps} />
      </Section>
      <Section title="Gegenstände" collapsible="true">
        <ListAsGridSquare {...modelListProps} />
      </Section>
    </PageLayoutMock>
  )
}

Page03.storyName = 'Katalog Level 1'
