import React from 'react'
import FilterButton from '../../../DesignComponents/FilterButton'
import SquareImageGrid from '../../../DesignComponents/SquareImageGrid'
import Section from '../../../DesignComponents/Section'
import PageLayoutMock from '../../../StoryUtils/PageLayoutMock'
import { modelListProps } from '../../../StoryUtils/sample-props'
import PageLayout from '../../../DesignComponents/PageLayout'

export default {
  title: 'MobileApp/Wireframes/Katalog/Unterkategorie',
  parameters: { layout: 'fullscreen' }
}

export const unterkategorie = () => {
  return (
    <PageLayoutMock>
      <PageLayout.Header title="Mischpulte & CD Player" preTitle="Audio">
        <FilterButton>Nur Ausleihe Toni, jetzt verfügbar</FilterButton>
      </PageLayout.Header>
      <PageLayout.Stack2>
        <Section title="Gegenstände" collapsible="true">
          <SquareImageGrid {...modelListProps} />
        </Section>
      </PageLayout.Stack2>
    </PageLayoutMock>
  )
}
