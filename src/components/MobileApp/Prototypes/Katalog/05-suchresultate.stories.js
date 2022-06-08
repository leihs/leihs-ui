import React from 'react'
import { action } from '@storybook/addon-actions'
import SquareImageGrid from '../../DesignComponents/SquareImageGrid'
import Section from '../../DesignComponents/Section'
import PageLayoutMock from '../../StoryUtils/PageLayoutMock'
import PageLayout from '../../DesignComponents/PageLayout'
import Stack from '../../DesignComponents/Stack'
import ModelSearchFilter from '../../ModelSearchFilter'
import { modelListProps, modelSearchFilterProps } from '../../StoryUtils/sample-props'

export default {
  title: 'MobileApp/Prototypes/Katalog/Suchresultate',
  parameters: { layout: 'fullscreen' }
}

// just 1 case for now
const FAKE_SEARCH_PROPS = {
  currentFilters: {
    term: 'beamer!',
    poolIds: [{ id: 1, label: 'pool A' }],
    onlyAvailable: true,
    quantity: 3,
    startDate: '2022-04-21',
    endDate: '2022-04-24'
  },
  locale: 'de-CH',
  onSubmit: action('onSubmit '),
  onChangeSearchTerm: action('onChangeSearchTerm'),
  onOpenPanel: action('onOpenPanel'),
  onClearFilter: filter => action('onClearFilter')(filter)
}

export const Suchresultate = () => {
  return (
    <PageLayoutMock>
      <PageLayout.Header title="Suchresultate">
        <ModelSearchFilter
          currentFilters={FAKE_SEARCH_PROPS.currentFilters}
          onOpenPanel={FAKE_SEARCH_PROPS.onOpenPanel}
          onClearFilter={FAKE_SEARCH_PROPS.onClearFilter}
          onSubmit={FAKE_SEARCH_PROPS.onSubmit}
          onChangeSearchTerm={FAKE_SEARCH_PROPS.onChangeSearchTerm}
          locale={FAKE_SEARCH_PROPS.locale}
          txt={modelSearchFilterProps.txt}
        />
      </PageLayout.Header>

      <Stack space="4">
        <Section title="Gegenstände" collapsible>
          <SquareImageGrid {...modelListProps} />
        </Section>
      </Stack>
    </PageLayoutMock>
  )
}
