import React from 'react'
import SquareImageGrid from '../../DesignComponents/SquareImageGrid'
import Section from '../../DesignComponents/Section'
import PageLayoutMock from '../../StoryUtils/PageLayoutMock'
import PageLayout from '../../DesignComponents/PageLayout'
import Stack from '../../DesignComponents/Stack'
import ModelSearchFilter from '../../ModelSearchFilter'
import CategoryBreadcrumbs from '../../CategoryBreadcrumbs'
import { modelListProps, modelSearchFilterProps } from '../../StoryUtils/sample-props'

export default {
  title: 'MobileApp/Prototypes/Katalog/Unterkategorie',
  parameters: { layout: 'fullscreen' }
}

export const unterkategorie = () => {
  return (
    <PageLayoutMock>
      <PageLayout.Header
        title="Mischpulte & CD Player"
        preTitle={
          <CategoryBreadcrumbs ancestorCats={[{ id: '1', name: 'Audio' }]} getPathForCategory={x => `cat/${x}`} />
        }
      >
        <ModelSearchFilter {...modelSearchFilterProps} />
      </PageLayout.Header>
      <Stack space="4">
        <Section title="Gegenstände" collapsible>
          <SquareImageGrid {...modelListProps} />
        </Section>
      </Stack>
    </PageLayoutMock>
  )
}
