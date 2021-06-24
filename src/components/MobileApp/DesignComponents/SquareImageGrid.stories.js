import React from 'react'
import SquareImageGrid from './SquareImageGrid'

export default {
  title: 'MobileApp/DesignComponents/Square Image Grid',
  component: SquareImageGrid
}

export const squareImageGrid = () => {
  const listGridProps = {
    list: [
      {
        id: 1,
        href: null,
        imgSrc: null,
        caption: 'Item 1'
      },
      {
        id: 2,
        href: null,
        imgSrc: null,
        caption: 'Item 2',
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

  return <SquareImageGrid {...listGridProps} />
}
