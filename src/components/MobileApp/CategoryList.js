import React from 'react'
import SquareImageGrid from './DesignComponents/SquareImageGrid'

const BASE_CLASS = 'ui-models-list' // (sic! might be a FIXME)

export default function CategoryList({ list }) {
  return <SquareImageGrid className={BASE_CLASS} itemClassName={BASE_CLASS + '-item'} list={list} />
}
