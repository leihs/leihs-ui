import React from 'react'
import CategoryBreadcrumbs from './CategoryBreadcrumbs'
import PageLayout from './DesignComponents/PageLayout'
import PageLayoutMock from './StoryUtils/PageLayoutMock'

export default {
  title: 'MobileApp/Feature Components/CategoryBreadcrumbs',
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
    ></PageLayout.Header>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse repudiandae non totam voluptatem voluptate
      architecto, eius exercitationem enim unde sunt nostrum neque iste consequuntur et perspiciatis quas praesentium?
      Recusandae, nesciunt?
    </p>
  </PageLayoutMock>
)

export const level1 = () => (
  <PageLayoutMock>
    <PageLayout.Header
      title="Säugetiere"
      preTitle={
        <CategoryBreadcrumbs ancestorCats={[{ id: '1', name: 'Wirbeltiere' }]} getPathForCategory={x => `cat/${x}`} />
      }
    ></PageLayout.Header>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse repudiandae non totam voluptatem voluptate
      architecto, eius exercitationem enim unde sunt nostrum neque iste consequuntur et perspiciatis quas praesentium?
      Recusandae, nesciunt?
    </p>
  </PageLayoutMock>
)

export const level0 = () => (
  <PageLayoutMock>
    <PageLayout.Header title="Wirbeltiere"></PageLayout.Header>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse repudiandae non totam voluptatem voluptate
      architecto, eius exercitationem enim unde sunt nostrum neque iste consequuntur et perspiciatis quas praesentium?
      Recusandae, nesciunt?
    </p>
  </PageLayoutMock>
)
