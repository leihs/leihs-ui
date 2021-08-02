import React from 'react'
import FilterButton from '../../../DesignComponents/FilterButton'
import SquareImageGrid from '../../../DesignComponents/SquareImageGrid'
import Section from '../../../DesignComponents/Section'
import PageLayoutMock from '../../../StoryUtils/PageLayoutMock'
import PageLayout from '../../../DesignComponents/PageLayout'
import Stack from '../../../DesignComponents/Stack'
import { categoryList } from '../../../StoryUtils/sample-props'

export default {
  title: 'MobileApp/Wireframes/Katalog/Start',
  parameters: { layout: 'fullscreen' }
}

export const start = () => {
  return (
    <PageLayoutMock>
      <PageLayout.Header title="Katalog">
        <FilterButton>Nur Ausleihe Toni, jetzt verfügbar</FilterButton>
      </PageLayout.Header>
      <Stack space="4">
        <Section title="Kategorien">
          <SquareImageGrid list={categoryList} />
        </Section>
      </Stack>
    </PageLayoutMock>
  )
}
