import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Section from '../../DesignComponents/Section'
import InputWithClearButton from '../../DesignComponents/InputWithClearButton'
import DialogCard from '../../DesignComponents/DialogCard'

const DEFAULT_TERM = ''
const DEFAULT_ORDER_STATE = ''
const DEFAULT_START_DATE = ''
const DEFAULT_END_DATE = ''
const DEFAULT_POOL_ID = 'all'
const DEFAULT_DELEGATION_ID = ''

const orderStates = [
  { id: 'inApproval', name: 'In der Genehmigung' },
  { id: 'inHandOver', name: 'Bereit zur Abholung' },
  { id: 'lent', name: 'Ausgeliehen' },
  { id: 'inReturn', name: 'Teilweise zurückgebracht' },
  { id: 'allItemsReturned', name: 'Alle Gegenstände zurückgebracht' },
  { id: 'allItemsRejected', name: 'Abgelehnt' },
  { id: 'transferred', name: 'Übertragen' }
]

const OrderFilterForm = ({
  pools = [],
  delegations,
  user = {},
  initialTerm = DEFAULT_TERM,
  initialOrderState = DEFAULT_ORDER_STATE,
  initialStartDate = DEFAULT_START_DATE,
  initialEndDate = DEFAULT_END_DATE,
  initialPoolId = DEFAULT_POOL_ID,
  initialDelegationId = DEFAULT_DELEGATION_ID,
  onClear,
  onSubmit
}) => {
  const [term, setTerm] = useState(initialTerm)
  const [orderState, setOrderState] = useState(initialOrderState)
  const [startDate, setStartDate] = useState(initialStartDate)
  const [endDate, setEndDate] = useState(initialEndDate)
  const [poolId, setPoolId] = useState(initialPoolId)
  const [delegationId, setDelegationId] = useState(initialDelegationId)

  function clear(e) {
    setTerm(DEFAULT_TERM)
    setOrderState(DEFAULT_ORDER_STATE)
    setStartDate(DEFAULT_START_DATE)
    setEndDate(DEFAULT_END_DATE)
    setPoolId(DEFAULT_POOL_ID)
    setDelegationId(user.id)

    onClear && onClear()
  }

  const submit = e => {
    e.preventDefault()
    onSubmit(getFormData())
  }

  const getFormData = () => {
    return {
      term,
      orderState,
      startDate,
      endDate,
      poolId: poolId !== 'all' ? poolId : null,
      delegationId
    }
  }

  return (
    <DialogCard title="Meine Ausleihen filtern">
      <form action="/search" onSubmit={submit} className="form form-compact">
        <DialogCard.Body className="pb-5">
          {delegations && (
            <Section title="Delegation" collapsible="true">
              <div className="form-group">
                <select
                  className="form-control custom-select"
                  name="user-id"
                  value={delegationId}
                  onChange={e => setDelegationId(e.target.value)}
                >
                  <option value={user.id} key={user.id}>
                    {user.name} (persönlich)
                  </option>
                  {delegations.map(d => (
                    <option value={d.id} key={d.id}>
                      {d.name}
                    </option>
                  ))}
                </select>
              </div>
            </Section>
          )}
          <Section title="Stichwort" collapsible="true">
            <div className="form-group">
              <InputWithClearButton
                name="term"
                placeholder="Suchbegriff eingeben"
                value={term}
                onChange={e => setTerm(e.target.value)}
                onClearClick={() => setTerm('')}
              />
            </div>
          </Section>
          <Section title="Status" collapsible="true">
            <div className="form-group">
              <select
                className="form-control custom-select"
                name="order-state"
                value={orderState}
                onChange={e => setOrderState(e.target.value)}
              >
                <option value="all" key="all">
                  Alle
                </option>
                {orderStates.map(p => (
                  <option value={p.id} key={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>
          </Section>
          <Section title="Zeitraum" collapsible="true">
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <label htmlFor="start-date" className="input-group-text bg-white" style={{ width: '3.5em' }}>
                  Von
                </label>
              </div>
              <input
                placeholder="From"
                name="start-date"
                id="start-date"
                type="date"
                className="form-control "
                defaultValue={startDate}
                onChange={e => setStartDate(e.target.value)}
              />
            </div>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <label htmlFor="end-date" className="input-group-text bg-white" style={{ width: '3.5em' }}>
                  Bis
                </label>
              </div>
              <input
                placeholder="Until"
                name="end-date"
                id="end-date"
                type="date"
                className="form-control "
                defaultValue={endDate}
                onChange={e => setEndDate(e.target.value)}
              />
            </div>
          </Section>
          <Section title="Gerätepark" collapsible="true">
            <div className="form-group">
              <select
                className="form-control custom-select"
                name="pool-id"
                value={poolId}
                onChange={e => setPoolId(e.target.value)}
              >
                <option value="all" key="all">
                  Alle
                </option>
                {pools.map(p => (
                  <option value={p.id} key={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>
          </Section>
        </DialogCard.Body>
        <DialogCard.Foot>
          <div className="row">
            <div className="col pr-2">
              <button type="button" onClick={clear} className="btn btn-outline-danger">
                Zurücksetzen
              </button>
            </div>
            <div className="col pl-2 text-right">
              <button type="submit" onClick={submit} className="btn btn-success">
                Auswählen
              </button>
            </div>
          </div>
        </DialogCard.Foot>
      </form>
    </DialogCard>
  )
}

OrderFilterForm.propTypes = {
  /** list of delegations for selecting */
  delegations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ),
  /** list of inventory pools for selecting */
  pools: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  /** logged in user */
  user: PropTypes.object,
  /** initially used term */
  initalTerm: PropTypes.string,
  /** initially selected order state */
  initalOrderState: PropTypes.string,
  /** initially selected start date */
  initialStartDate: PropTypes.string,
  /** initially selected end date */
  initialEndDate: PropTypes.string,
  /** initially selected pool id */
  initialPoolId: PropTypes.string,
  /** initially selected user or delegation id */
  initialDelegationId: PropTypes.string,
  /** callback, submits user selection. arguments: `?` */
  onSubmit: PropTypes.func.isRequired,
  /** callback, house-keeping to do after the input fields have been reset to their default values */
  onClear: PropTypes.func.isRequired
}

export default OrderFilterForm
