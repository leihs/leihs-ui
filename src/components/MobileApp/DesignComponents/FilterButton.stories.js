import React from 'react'
import { action } from '@storybook/addon-actions'
import FilterButton from './FilterButton'
import PageLayoutMock from '../StoryUtils/PageLayoutMock'
import PageLayout from './PageLayout'

export default {
  title: 'MobileApp/DesignComponents/Filter Button',
  component: FilterButton,
  parameters: { layout: 'fullscreen' }
}

const onClick = action('click')

export const filterButton = () => {
  return (
    <PageLayoutMock>
      <PageLayout.Header title="Single line">
        <FilterButton onClick={onClick}>Verfügbar ab 8.6.2021</FilterButton>
      </PageLayout.Header>
      <PageLayout.Header title="With multi-line content">
        <FilterButton onClick={onClick}>
          <div>Lorem ipsum dolor sit amet</div>
          <div>consetetur sadipscing elitr</div>
        </FilterButton>
      </PageLayout.Header>
    </PageLayoutMock>
  )
}
