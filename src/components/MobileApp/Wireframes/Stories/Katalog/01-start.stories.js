import React from 'react'
import FilterSummary from '../../../DesignComponents/FilterSummary'
import SquareImageGrid from '../../../DesignComponents/SquareImageGrid'
import Section from '../../../DesignComponents/Section'
import PageLayoutMock from '../../../StoryUtils/PageLayoutMock'
import { categoryListPropsV2 as categoryListProps } from '../../../StoryUtils/sample-props'

export default {
  title: 'MobileApp/Wireframes/Katalog/Start',
  parameters: { layout: 'fullscreen' }
}

export const start = () => {
  return (
    <PageLayoutMock title="Katalog">
      <FilterSummary>Nur Ausleihe Toni, jetzt verfügbar</FilterSummary>
      <Section title="Kategorien">
        <SquareImageGrid {...categoryListProps} />
      </Section>
    </PageLayoutMock>
  )
}
