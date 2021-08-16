import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Section from '../../DesignComponents/Section'
import InputWithClearButton from '../../DesignComponents/InputWithClearButton'
import DialogLayout from '../../DesignComponents/DialogLayout'
import Stack from '../../DesignComponents/Stack'
import FormButtonGroup from '../../DesignComponents/FormButtonGroup'
import LabelInside from '../../DesignComponents/LabelInside'

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
    <DialogLayout title="Meine Ausleihen filtern">
      <form action="/search" onSubmit={submit} autoComplete="off">
        <DialogLayout.Body>
          <Stack space="4">
            {delegations && (
              <Section title="Delegation" collapsible>
                <label htmlFor="user-id" className="visually-hidden">
                  Delegation
                </label>
                <select
                  className="form-select"
                  name="user-id"
                  id="user-id"
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
              </Section>
            )}
            <Section title="Stichwort" collapsible>
              <label htmlFor="term" className="visually-hidden">
                Stichwort
              </label>
              <InputWithClearButton
                name="term"
                id="term"
                placeholder="Suchbegriff eingeben"
                value={term}
                onChange={e => setTerm(e.target.value)}
              />
            </Section>
            <Section title="Status" collapsible>
              <label htmlFor="order-state" className="visually-hidden">
                Status
              </label>
              <select
                className="form-select"
                name="order-state"
                id="order-state"
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
            </Section>
            <Section title="Zeitraum" collapsible>
              <fieldset>
                <legend className="visually-hidden">Zeitraum</legend>
                <div className="d-flex flex-column gap-3">
                  <LabelInside>
                    <input
                      type="text"
                      name="start-date"
                      id="start-date"
                      className="form-control calendar-indicator"
                      defaultValue={startDate}
                      onChange={e => setStartDate(e.target.value)}
                      placeholder="Unbestimmt"
                    />
                    <label htmlFor="start-date">Von</label>
                  </LabelInside>
                  <LabelInside>
                    <input
                      type="text"
                      name="end-date"
                      id="end-date"
                      className="form-control calendar-indicator"
                      defaultValue={startDate}
                      onChange={e => setStartDate(e.target.value)}
                      placeholder="Unbestimmt"
                    />
                    <label htmlFor="end-date">Bis</label>
                  </LabelInside>
                </div>
              </fieldset>
            </Section>
            <Section title="Gerätepark" collapsible>
              <label htmlFor="pool-id" className="visually-hidden">
                Gerätepark
              </label>
              <select
                className="form-select"
                name="pool-id"
                id="pool-id"
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
            </Section>
          </Stack>
        </DialogLayout.Body>
        <DialogLayout.Foot>
          <FormButtonGroup>
            <button type="button" onClick={clear} className="btn btn-secondary">
              Zurücksetzen
            </button>
            <button type="submit" onClick={submit} className="btn btn-primary">
              Auswählen
            </button>
          </FormButtonGroup>
        </DialogLayout.Foot>
      </form>
    </DialogLayout>
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
