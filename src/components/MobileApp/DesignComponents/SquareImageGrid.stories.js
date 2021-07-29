import React from 'react'
import SquareImageGrid from './SquareImageGrid'
import PageLayoutMock from '../StoryUtils/PageLayoutMock'

export default {
  title: 'MobileApp/DesignComponents/Square Image Grid',
  component: SquareImageGrid,
  parameters: { layout: 'fullscreen' }
}

export const squareImageGrid = () => {
  const listGridProps = {
    list: [
      {
        id: 1,
        href: null,
        imgSrc: require('../../../static/example-images/models/e2d0cfdf-745c-57cb-8c6b-09c14af6bb51.jpg').default,
        caption: 'Item 1'
      },
      {
        id: 2,
        href: null,
        imgSrc: require('../../../static/example-images/models/4f64adb0-6325-4eb1-bf36-8a73a986ed4b.jpg').default,
        caption: 'Item 2 (a favorite)',
        subCaption: 'it is a favorite',
        isFavorited: true
      },
      {
        id: 3,
        href: null,
        imgSrc: null,
        caption: 'Item 3',
        subCaption: 'it is dimmed',
        isDimmed: true
      },
      {
        id: 4,
        href: null,
        imgSrc: null,
        caption: 'Item 4 with much text text text'
      }
    ]
  }

  return (
    <PageLayoutMock>
      <SquareImageGrid {...listGridProps} />
    </PageLayoutMock>
  )
}
