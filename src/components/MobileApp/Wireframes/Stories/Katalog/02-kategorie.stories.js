import React from 'react'
import FilterSummary from '../../../DesignComponents/FilterSummary'
import SquareImageGrid from '../../../DesignComponents/SquareImageGrid'
import Section from '../../../DesignComponents/Section'
import { modelListProps, subCategoryListProps } from '../../../StoryUtils/sample-props'
import PageLayoutMock from '../../../StoryUtils/PageLayoutMock'

export default {
  title: 'MobileApp/Wireframes/Katalog/Kategorie',
  parameters: { layout: 'fullscreen' }
}

export const kategorie = () => {
  return (
    <PageLayoutMock title="Audio">
      <FilterSummary>Nur Ausleihe Toni, jetzt verfügbar</FilterSummary>
      <Section title="Unterkategorien" collapsible="true">
        <SquareImageGrid {...subCategoryListProps} />
      </Section>
      <Section title="Gegenstände" collapsible="true">
        <SquareImageGrid {...modelListProps} />
      </Section>
    </PageLayoutMock>
  )
}
