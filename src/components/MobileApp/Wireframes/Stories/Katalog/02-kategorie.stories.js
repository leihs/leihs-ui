import React from 'react'
import FilterButton from '../../../DesignComponents/FilterButton'
import SquareImageGrid from '../../../DesignComponents/SquareImageGrid'
import Section from '../../../DesignComponents/Section'
import PageLayoutMock from '../../../StoryUtils/PageLayoutMock'
import PageLayout from '../../../DesignComponents/PageLayout'
import Stack from '../../../DesignComponents/Stack'
import { modelListProps, subCategoryListProps } from '../../../StoryUtils/sample-props'

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
      <Stack space="4">
        <Section title="Unterkategorien" collapsible>
          <SquareImageGrid {...subCategoryListProps} />
        </Section>
        <Section title="Gegenstände" collapsible>
          <SquareImageGrid {...modelListProps} />
        </Section>
      </Stack>
    </PageLayoutMock>
  )
}
