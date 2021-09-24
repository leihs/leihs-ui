import PropTypes from 'prop-types'
import React, { useState } from 'react'
import cx from 'classnames/dedupe'
import f from 'lodash'

// import { action } from '@storybook/addon-actions'
// import { Let } from '../Util'
// import Icon from '../Icons'

const DEFAULT_TERM = ''
const DEFAULT_POOL_ID = 'all'
const DEFAULT_ONLY_AVAILABLE = false
const DEFAULT_START_DATE = ''
const DEFAULT_END_DATE = ''
const DEFAULT_QUANTITY = 1

// const NOOP = () => {}

const ModelFilterForm = ({
  className = '',
  user = {},
  delegations = [],
  initialTerm = DEFAULT_TERM,
  initialUserId = user.id,
  initialPoolId = DEFAULT_POOL_ID,
  initialOnlyAvailable = DEFAULT_ONLY_AVAILABLE,
  initialStartDate = DEFAULT_START_DATE,
  initialEndDate = DEFAULT_END_DATE,
  initialQuantity = DEFAULT_QUANTITY,
  pools,
  onClear,
  onSubmit
}) => {
  const [term, setTerm] = useState(initialTerm)
  const [userId, setUserId] = useState(initialUserId)
  const [poolId, setPoolId] = useState(initialPoolId)
  const [onlyAvailable, setOnlyAvailable] = useState(initialOnlyAvailable)
  const [startDate, setStartDate] = useState(initialStartDate)
  const [endDate, setEndDate] = useState(initialEndDate)
  const [quantity, setQuantity] = useState(initialQuantity)

  const clear = () => {
    setTerm(DEFAULT_TERM)
    setUserId(user.id)
    setPoolId(DEFAULT_POOL_ID)
    setOnlyAvailable(DEFAULT_ONLY_AVAILABLE)
    setStartDate(DEFAULT_START_DATE)
    setEndDate(DEFAULT_END_DATE)
    setQuantity(DEFAULT_QUANTITY)
  }

  const queryArgs = () => {
    const fields = {
      term: term,
      userId: userId,
      poolId: poolId,
      onlyAvailable: onlyAvailable,
      startDate: startDate,
      endDate: endDate,
      quantity: quantity
    }
    if (fields.poolId === 'all') {
      fields.poolId = null
    }
    return f.omitBy(fields, f.isNil)
  }

  return (
    <div className={cx('px-3 py-4 bg-light mt-3 mb-3', className)}>
      <form
        action="/search"
        onSubmit={e => {
          e.preventDefault()
          onSubmit(queryArgs())
        }}
        className="form form-compact"
        autoComplete="off"
      >
        <div>
          <label className="row">
            <span className="text-xs col-3 col-form-label">Search </span>
            <div className="col-9">
              <input
                type="text"
                name="search-term"
                placeholder="Search"
                className="form-control "
                value={term}
                onChange={e => setTerm(e.target.value)}
              />
            </div>
          </label>
        </div>
        {userId && !f.isEmpty(delegations) && (
          <label className="row">
            <span className="text-xs col-3 col-form-label">For</span>
            <div className="col-9">
              <select className="form-select" name="user-id" value={userId} onChange={e => setUserId(e.target.value)}>
                <option value={user.id} key={user.id}>
                  {user.name}
                </option>
                {delegations.map(d => (
                  <option value={d.id} key={d.id}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>
          </label>
        )}
        <label className="row">
          <span className="text-xs col-3 col-form-label">From</span>
          <div className="col-9">
            <select className="form-select" name="pool-id" value={poolId} onChange={e => setPoolId(e.target.value)}>
              <option value="all" key="all">
                All inventory pools
              </option>
              {pools.map(p => (
                <option value={p.id} key={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>
        </label>
        <div>
          <div className="row align-items-center">
            <span className="text-xs col-3 col-form-label">Time Span</span>
            <div className="col-9">
              <label className="form-check">
                <input
                  type="checkbox"
                  name="only-available"
                  checked={!!onlyAvailable}
                  onChange={e => setOnlyAvailable(prevBool => !prevBool)}
                  className="form-check-input"
                />
                <span className="form-check-label">Show available only</span>
              </label>
            </div>
          </div>
        </div>
        {onlyAvailable && (
          <div>
            <div>
              <label className="row">
                <span className="text-xs col-3 col-form-label">From </span>
                <div className="col-9">
                  <input
                    placeholder="From"
                    name="start-date"
                    type="date"
                    className="form-control "
                    required
                    value={startDate}
                    onChange={e => setStartDate(e.target.value)}
                  />
                </div>
              </label>
            </div>
            <div>
              <label className="row">
                <span className="text-xs col-3 col-form-label">Until </span>
                <div className="col-9">
                  <input
                    placeholder="Until"
                    name="end-date"
                    type="date"
                    className="form-control "
                    required
                    value={endDate}
                    onChange={e => setEndDate(e.target.value)}
                  />
                </div>
              </label>
            </div>
            <div>
              <label className="row">
                <span className="text-xs col-3 col-form-label">Quantity </span>
                <div className="col-9">
                  <input
                    type="number"
                    min={1}
                    name="quantity"
                    placeholder="Quantity"
                    className="form-control "
                    value={quantity}
                    onChange={e => setQuantity(e.target.value)}
                  />
                </div>
              </label>
            </div>
          </div>
        )}
        <button type="submit" className="btn btn-primary dont-invert mt-2">
          Get Results
        </button>
        <button
          type="button"
          onClick={e => {
            e.preventDefault()
            clear()
            onClear()
          }}
          className="btn btn-secondary dont-invert mx-1 mt-2"
        >
          Clear
        </button>
      </form>
    </div>
  )
}

ModelFilterForm.propTypes = {
  /** initially used term */
  term: PropTypes.string,
  /** logged in user */
  user: PropTypes.object,
  /** list of delegations for selecting */
  delegations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  /** initially selected user or delegation id */
  initialUserId: PropTypes.string,
  /** initially selected pool id */
  initialPoolId: PropTypes.string,
  /** initially selected start date */
  initialStartDate: PropTypes.string,
  /** initially selected end date */
  initialEndDate: PropTypes.string,
  /** initially selected quantity */
  initialQuantity: PropTypes.number,
  /** list of inventory pools for selecting */
  pools: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  /** callback, submits user selection. arguments: `?` */
  onSubmit: PropTypes.func.isRequired,
  /** callback, house-keeping to do after the input fields have been reset to their default values */
  onClear: PropTypes.func.isRequired
}

export default ModelFilterForm
