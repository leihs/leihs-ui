import React from 'react'
// import { action } from '@storybook/addon-actions'
import CategoryList from './CategoryList'

export default {
  title: 'MobileApp/Components/CategoryList',
  component: CategoryList,
  excludeStories: /exampleProps/
}

export const exampleProps1 = {
  list: [
    {
      id: '78920f6d-57c1-5231-b0c4-f58dcddc64cf',
      href: '#app/borrow/categories/78920f6d-57c1-5231-b0c4-f58dcddc64cf',
      imgSrc: require('../../static/example-images/categories/5d302b26-5737-48e7-a90d-e65f22d8c065.jpg'),
      caption: 'Audio'
    },
    {
      id: 'b279bb7f-314c-55d1-a407-0de794c2c25e',
      href: '#app/borrow/categories/b279bb7f-314c-55d1-a407-0de794c2c25e',
      imgSrc: require('../../static/example-images/categories/2b4c8bd3-3d65-5e68-bf7a-3649ec67a1a2.jpg'),
      caption: 'Beleuchtungstechnik'
    },
    {
      id: '298ec3da-d2c8-5d9d-ae1a-55715ccd933c',
      href: '#app/borrow/categories/298ec3da-d2c8-5d9d-ae1a-55715ccd933c',
      imgSrc: require('../../static/example-images/categories/fdfb06be-9bfc-5377-a82b-5d9fb0cc28fb.jpg'),
      caption: 'Effektgeräte Veranstaltungstechnik'
    },
    {
      id: 'c6a221ec-6df2-5ce7-b9a0-cc5694902353',
      href: '#app/borrow/categories/c6a221ec-6df2-5ce7-b9a0-cc5694902353',
      imgSrc: null,
      caption: 'Externe Massenspeicher'
    }
  ]
}
exampleProps1.story = false

export const Example1 = () => <CategoryList {...exampleProps1} />
