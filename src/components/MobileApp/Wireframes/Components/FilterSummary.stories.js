import React from 'react'
import FilterSummary from './FilterSummary'

export default {
  title: 'MobileApp/Wireframes2021/Components/FilterSummary',
  component: FilterSummary
}

function onClick() {
  alert('click')
}
export const plainExample = () => <FilterSummary onClick={onClick}>Lorem</FilterSummary>

export const withMoreContent = () => <FilterSummary onClick={onClick}>Lorem ipsum dolor sit amet</FilterSummary>

export const withMultiLineContent = () => (
  <FilterSummary onClick={onClick}>
    <div>Lorem ipsum dolor sit amet</div>
    <div>Lorem ipsum dolor sit amet</div>
  </FilterSummary>
)
