import React from 'react'
import FilterButton from '../../../DesignComponents/FilterButton'
import SquareImageGrid from '../../../DesignComponents/SquareImageGrid'
import Section from '../../../DesignComponents/Section'
import PageLayoutMock from '../../../StoryUtils/PageLayoutMock'
import { categoryListPropsV2 as categoryListProps } from '../../../StoryUtils/sample-props'
import PageLayout from '../../../DesignComponents/PageLayout'

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
      <PageLayout.Stack2>
        <Section title="Kategorien">
          <SquareImageGrid {...categoryListProps} />
        </Section>
      </PageLayout.Stack2>
    </PageLayoutMock>
  )
}
