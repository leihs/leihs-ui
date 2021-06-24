import React from 'react'
import CategoryList from './CategoryList'
import { categoryListPropsV1 as exampleCategoryProps } from '../MobileApp/StoryUtils/sample-props'

export default {
  title: 'MobileApp/Components/CategoryList',
  component: CategoryList
}

export const Example1 = () => <CategoryList {...exampleCategoryProps} />
