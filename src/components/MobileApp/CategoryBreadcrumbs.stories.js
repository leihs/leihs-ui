import React from 'react'
import CategoryBreadcrumbs from './CategoryBreadcrumbs'
import PageLayout from './DesignComponents/PageLayout'
import FilterButton from './DesignComponents/FilterButton'
import PageLayoutMock from './StoryUtils/PageLayoutMock'

export default {
  title: 'MobileApp/Integrated Components/CategoryBreadcrumbs',
  component: CategoryBreadcrumbs,
  parameters: {
    layout: 'fullscreen'
  }
}

export const level2 = () => (
  <PageLayoutMock>
    <PageLayout.Header
      title="Bären"
      preTitle={
        <CategoryBreadcrumbs
          ancestorCats={[
            { id: '1', name: 'Wirbeltiere' },
            { id: '2', name: 'Säugetiere' }
          ]}
          getPathForCategory={x => `cat/${x}`}
        />
      }
    >
      <FilterButton>Filter</FilterButton>
    </PageLayout.Header>
  </PageLayoutMock>
)

export const level1 = () => (
  <PageLayoutMock>
    <PageLayout.Header
      title="Säugetiere"
      preTitle={
        <CategoryBreadcrumbs ancestorCats={[{ id: '1', name: 'Wirbeltiere' }]} getPathForCategory={x => `cat/${x}`} />
      }
    >
      <FilterButton>Filter</FilterButton>
    </PageLayout.Header>
  </PageLayoutMock>
)

export const level0 = () => (
  <PageLayoutMock>
    <PageLayout.Header title="Wirbeltiere">
      <FilterButton>Filter</FilterButton>
    </PageLayout.Header>
  </PageLayoutMock>
)
