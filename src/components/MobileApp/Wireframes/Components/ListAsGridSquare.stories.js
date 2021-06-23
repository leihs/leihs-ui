import React from 'react'
import ListAsGridSquare from './ListAsGridSquare'

export default {
  title: 'MobileApp/Wireframes2021/Components/ListAsGridSquare'
}

export const listAsGridSquare = () => {
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
        caption: 'Item 2'
      },
      {
        id: 3,
        href: null,
        imgSrc: null,
        caption: 'Item 3 with much text text text'
      }
    ]
  }

  return <ListAsGridSquare {...listGridProps} />
}
