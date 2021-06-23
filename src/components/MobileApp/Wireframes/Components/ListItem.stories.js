import React from 'react'
import ListItem from './ListItem'

export default {
  title: 'MobileApp/Wireframes2021/Components/ListItem',
  component: ListItem
}

export const listItem = () => {
  return <ListItem>Lorem ipsum</ListItem>
}

export const listItemClickable = () => {
  return (
    <ListItem foot={<div>Foot content (below vertical icon alignment zone)</div>} onClick={() => alert('click')}>
      Lorem ipsum
      <br />
      Lorem ipsum
    </ListItem>
  )
}
