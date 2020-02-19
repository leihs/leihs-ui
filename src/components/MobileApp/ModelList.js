import React from 'react'

import ListAsGridSquare from './ListAsGridSquare'

const BASE_CLASS = 'ui-models-list'

const ModelList = ({ list }) => {
  return <ListAsGridSquare baseClass={BASE_CLASS} list={list} />
}

export default ModelList
