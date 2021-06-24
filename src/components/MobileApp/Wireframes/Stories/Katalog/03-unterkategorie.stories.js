import React from 'react'
import FilterSummary from '../../../DesignComponents/FilterSummary'
import SquareImageGrid from '../../../DesignComponents/SquareImageGrid'
import Section from '../../../DesignComponents/Section'
import PageLayoutMock from '../../../StoryUtils/PageLayoutMock'
import { modelListProps } from '../../../StoryUtils/sample-props'

export default {
  title: 'MobileApp/Wireframes/Katalog/Unterkategorie',
  parameters: { layout: 'fullscreen' }
}

export const unterkategorie = () => {
  return (
    <PageLayoutMock title="Mischpulte & CD Player" preTitle="Audio">
      <FilterSummary>Nur Ausleihe Toni, jetzt verfügbar</FilterSummary>
      <Section title="Gegenstände" collapsible="true">
        <SquareImageGrid {...modelListProps} />
      </Section>
    </PageLayoutMock>
  )
}
