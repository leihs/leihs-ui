import React from 'react'
import cx from 'classnames'
// import FilterBubble from '../../../DesignComponents/FilterButton'
import SquareImageGrid from '../../../DesignComponents/SquareImageGrid'
import Section from '../../../DesignComponents/Section'
import PageLayoutMock from '../../../StoryUtils/PageLayoutMock'
import PageLayout from '../../../DesignComponents/PageLayout'
import Stack from '../../../DesignComponents/Stack'
import ModelSearchFilter from '../../../ModelSearchFilter'
import { modelListProps } from '../../../StoryUtils/sample-props'
import Icon, { iconFilter, iconCross } from '../../../DesignComponents/Icons'

export default {
  title: 'MobileApp/Wireframes/Katalog',
  parameters: { layout: 'fullscreen' }
}

// just 1 case for now
const FAKE_SEARCH_PROPS = {
  currentFilters: {
    term: 'beamer',
    poolIds: null
  }
}

export const Suchresultate = () => {
  return (
    <PageLayoutMock>
      <PageLayout.Header title="Suchresultate">
        <ModelSearchFilter />
        <SearchFilterCombinedInput filterLabel="Filter" searchTerm={'Beamer'} />

        <FilterItemButton>Ausleihe Toni-Areal</FilterItemButton>
        <FilterItemButton>1 Stück verfügbar 23.-28.05.</FilterItemButton>
      </PageLayout.Header>
      <pre>{JSON.stringify(FAKE_SEARCH_PROPS, 0, 2)}</pre>
      <Stack space="4">
        <Section title="Gegenstände" collapsible>
          <SquareImageGrid {...modelListProps} />
        </Section>
      </Stack>
    </PageLayoutMock>
  )
}

function SearchFilterCombinedInput({ searchTerm, filterLabel }) {
  return (
    <div className="input-group mb-2">
      <input
        type="text"
        className="form-control border border-primary"
        placeholder="Suche nach…"
        defaultValue={searchTerm}
      />
      <button type="button" className="input-group-text btn btn-primary">
        <Icon icon={iconFilter} className="me-1" />
        <span className="position-relative" style={{ top: '0.1em' }}>
          {filterLabel}
        </span>
      </button>
    </div>
  )
}

function FilterBubble({ children, className, style, as: Elm = 'div', ...restProps }) {
  return (
    <Elm
      className={cx('ui-filter-bubble', 'btn btn-primary btn-sm rounded-pill very-small mb-1 me-1', className)}
      style={{ paddingTop: '7px', paddingBottom: '6px', ...style }}
      {...restProps}
    >
      {children}
    </Elm>
  )
}

function FilterItemButton({ children, ...restProps }) {
  return (
    <FilterBubble {...restProps} className="ps-3 pe-2 " onClick={() => alert('edit filters!')}>
      <span role="button">{children}</span>
      <span role="button">
        <Icon
          icon={iconCross}
          className="ms-1"
          onClick={e => {
            e.stopPropagation()
            alert('clear this filter!')
          }}
        ></Icon>
      </span>
    </FilterBubble>
  )
}
// function FilterMenuButton({ children, ...restProps }) {
//   return (
//     <FilterBubble as="button" type="button" className="ps-2 pe-3" {...restProps} onClick={() => alert('edit filters')}>
//       <Icon icon={iconFilter} className="me-1" /> {children}
//     </FilterBubble>
//   )
// }

// // try:
// <div class="btn-group" role="group" aria-label="Basic mixed styles example">
//   <button type="button" class="btn btn-danger">Left</button>
//   <button type="button" class="btn btn-warning">Middle</button>
//   <button type="button" class="btn btn-success">Right</button>
// </div>
