import React from 'react'
import FilterButton from '../../../DesignComponents/FilterButton'
import SquareImageGrid from '../../../DesignComponents/SquareImageGrid'
import Section from '../../../DesignComponents/Section'
import PageLayoutMock from '../../../StoryUtils/PageLayoutMock'
import PageLayout from '../../../DesignComponents/PageLayout'
import Stack from '../../../DesignComponents/Stack'
import { modelListProps } from '../../../StoryUtils/sample-props'

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
      <Stack space="4">
        <Section title="Gegenstände" collapsible>
          <SquareImageGrid {...modelListProps} />
        </Section>
      </Stack>
    </PageLayoutMock>
  )
}
