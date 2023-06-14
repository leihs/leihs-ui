import React from 'react'
import ModelSearchFilter from '../../ModelSearchFilter'
import SquareImageGrid from '../../DesignComponents/SquareImageGrid'
import Section from '../../DesignComponents/Section'
import PageLayoutMock from '../../StoryUtils/PageLayoutMock'
import PageLayout from '../../DesignComponents/PageLayout'
import Stack from '../../DesignComponents/Stack'
import { categoryList, modelSearchFilterProps } from '../../StoryUtils/sample-props'

export default {
  title: 'Borrow/Prototypes/Katalog/Start',
  parameters: { layout: 'fullscreen' }
}

export const start = () => {
  return (
    <PageLayoutMock>
      <PageLayout.Header title="Katalog">
        <ModelSearchFilter {...modelSearchFilterProps} />
      </PageLayout.Header>
      <Stack space="4">
        <Section title="Kategorien">
          <SquareImageGrid list={categoryList} />
        </Section>
      </Stack>
    </PageLayoutMock>
  )
}
