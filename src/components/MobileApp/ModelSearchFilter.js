import React, { useState } from 'react'
import cx from 'classnames'
import { format as formatDate, parseISO as parseDate } from 'date-fns'
import Icon, { iconFilter, iconCross } from './DesignComponents/Icons'

const BASE_CLASS = 'ui-model-search-filter'

export default function ModelSearchFilter({
  className,
  availableFilters = {},
  currentFilters = {},
  searchPlaceholder = 'Suchen…',
  filterLabel = 'Filter',
  locale,
  onChangeSearchTerm,
  onSubmit,
  onOpenPanel,
  onClearFilter,
  ...restProps
}) {
  const { term = '', poolIds = [], onlyAvailable = false, quantity = 1, startDate, endDate } = currentFilters
  const [searchTerm, setSearchTerm] = useState(term || '')
  const onChangeTerm = str => {
    setSearchTerm(str)
    onChangeSearchTerm(str)
  }
  return (
    <div className={cx(BASE_CLASS, className)} {...restProps}>
      <form
        onSubmit={e => {
          e.preventDefault()
          onSubmit({ searchTerm })
        }}
      >
        <SearchFilterCombinedInput
          onFilterClick={onOpenPanel}
          searchTerm={searchTerm}
          onSearchTermChange={onChangeTerm}
          filterLabel={filterLabel}
          searchPlaceholder={searchPlaceholder}
        />

        {!!poolIds &&
          poolIds.map(
            pool =>
              !!pool && (
                <FilterItemButton key={pool.id} onFilterClick={onOpenPanel} onClear={() => onClearFilter(pool)}>
                  {pool.label || pool.id}
                </FilterItemButton>
              )
          )}

        {!!onlyAvailable && (
          <FilterItemButton onFilterClick={onOpenPanel} onClear={() => onClearFilter({ type: 'onlyAvailable' })}>
            {quantity} Stück verfügbar {decorateDateRange({ startDate, endDate, locale })}
          </FilterItemButton>
        )}
      </form>
    </div>
  )
}

function SearchFilterCombinedInput({ searchTerm, onSearchTermChange, filterLabel, searchPlaceholder, onFilterClick }) {
  return (
    <div className="input-group mb-2">
      <input
        type="search" // TODO: use InputWithClearButton (needs style fixes)
        autoComplete="off"
        className="form-control border border-primary"
        name="term"
        value={searchTerm}
        onChange={e => onSearchTermChange(e.target.value)}
        placeholder={searchPlaceholder}
      />
      <button type="button" className="input-group-text btn btn-primary" onClick={onFilterClick}>
        <Icon icon={iconFilter} style={{ marginRight: '0.4rem' }} />
        <span className="position-relative" style={{ top: '0.1em' }}>
          {filterLabel}
        </span>
      </button>
    </div>
  )
}

/** shows 1 filter item in a bubble with a "clear" button */
function FilterItemButton({ children, onFilterClick, onClear, ...restProps }) {
  return (
    <FilterBubble {...restProps} className="ps-3 pe-2 ">
      <span role="button" onClick={onFilterClick}>
        {children}
      </span>
      <span role="button">
        <Icon
          icon={iconCross}
          className="ms-1"
          onClick={e => {
            e.stopPropagation()
            onClear()
          }}
        ></Icon>
      </span>
    </FilterBubble>
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

function decorateDateRange({ startDate, endDate, locale }) {
  const dateSep = ' – ' // special unicode inside!
  const fmtd = date => formatDate(parseDate(date), 'P', { locale })
  try {
    return `${fmtd(startDate)}${dateSep}${fmtd(endDate)}`
  } catch (error) {
    console.error(error)
    return `${startDate}${dateSep}${endDate}` // fallback, why not
  }
}
