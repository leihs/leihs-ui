import React from 'react'
import FilterButton from '../../../DesignComponents/FilterButton'
import SquareImageGrid from '../../../DesignComponents/SquareImageGrid'
import Section from '../../../DesignComponents/Section'
import { modelListProps, subCategoryListProps } from '../../../StoryUtils/sample-props'
import PageLayoutMock from '../../../StoryUtils/PageLayoutMock'
import PageLayout from '../../../DesignComponents/PageLayout'

export default {
  title: 'MobileApp/Wireframes/Katalog/Kategorie',
  parameters: { layout: 'fullscreen' }
}

export const kategorie = () => {
  return (
    <PageLayoutMock>
      <PageLayout.Header title="Audio">
        <FilterButton>Nur Ausleihe Toni, jetzt verfügbar</FilterButton>
      </PageLayout.Header>
      <PageLayout.Stack2>
        <Section title="Unterkategorien" collapsible="true">
          <SquareImageGrid {...subCategoryListProps} />
        </Section>
        <Section title="Gegenstände" collapsible="true">
          <SquareImageGrid {...modelListProps} />
        </Section>
      </PageLayout.Stack2>
    </PageLayoutMock>
  )
}
