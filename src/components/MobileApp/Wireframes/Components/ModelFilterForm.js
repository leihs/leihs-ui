import PropTypes from 'prop-types'
import React, { useState } from 'react'
import f from 'lodash'
import Section from '../../DesignComponents/Section'
import InputWithClearButton from '../../DesignComponents/InputWithClearButton'
import ActionButton from '../../DesignComponents/ActionButton'
import DialogCard from '../../DesignComponents/DialogCard'

const DEFAULT_TERM = ''
const DEFAULT_START_DATE = ''
const DEFAULT_END_DATE = ''
const DEFAULT_POOL_ID = 'all'

const ModelFilterForm = ({
  pools = [],
  delegations,
  user = {},
  initialShowTerm,
  initialTerm = DEFAULT_TERM,
  initialShowAvailability,
  initialStartDate = DEFAULT_START_DATE,
  initialEndDate = DEFAULT_END_DATE,
  initialShowPools,
  initialPoolId = DEFAULT_POOL_ID,
  initialShowDelegation,
  initialDelegationId = user.id,
  onSubmit,
  onClear = () => {}
}) => {
  const [term, setTerm] = useState(initialTerm)
  const [startDate, setStartDate] = useState(initialStartDate)
  const [endDate, setEndDate] = useState(initialEndDate)
  const [poolId, setPoolId] = useState(initialPoolId)
  const [delegationId, setDelegationId] = useState(initialDelegationId)

  const clear = () => {
    setTerm(DEFAULT_TERM)
    setStartDate(DEFAULT_START_DATE)
    setEndDate(DEFAULT_END_DATE)
    setPoolId(DEFAULT_POOL_ID)
    setDelegationId(user.id)

    onClear()
  }

  const submit = e => {
    e.preventDefault()
    onSubmit(queryArgs())
  }

  const queryArgs = () => {
    const fields = {
      term,
      userId: delegationId, // (sic! the query arg is called 'userId', not 'delegationId')
      poolId: poolId !== 'all' ? poolId : null,
      'availableBetween?': !!startDate && !!endDate,
      startDate,
      endDate,
      quantity: 1
    }
    return f.omitBy(fields, f.isNil)
  }

  return (
    <DialogCard title="Katalog filtern">
      <form onSubmit={submit} className="form form-compact">
        <DialogCard.Body className="pb-5">
          {delegations && (
            <Section title="Delegation" collapsible="true" defaultCollapsed={!initialShowDelegation}>
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
          <Section title="Stichwort" collapsible="true" defaultCollapsed={!initialShowTerm}>
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
          <Section title="Verfügbarkeit" collapsible="true" defaultCollapsed={!initialShowAvailability}>
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
                required
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
                required
                defaultValue={endDate}
                onChange={e => setEndDate(e.target.value)}
              />
            </div>
          </Section>
          <Section title="Geräteparks" collapsible="true" defaultCollapsed={!initialShowPools}>
            <div className="form-group">
              <select
                className="form-control custom-select"
                name="pool-id"
                value={poolId}
                onChange={e => setPoolId(e.target.value)}
              >
                <option value="all" key="all">
                  Alle Geräteparks
                </option>
                {pools.map(p => (
                  <option value={p.id} key={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
              <ActionButton className="action-button--lighter mt-2" onClick={() => alert('TODO')}>
                Gerätepark hinzufügen
              </ActionButton>
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
              <button type="submit" className="btn btn-primary">
                Auswählen
              </button>
            </div>
          </div>
        </DialogCard.Foot>
      </form>
    </DialogCard>
  )
}

ModelFilterForm.propTypes = {
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
  /** initially expand term section */
  initialShowTerm: PropTypes.bool,
  /** initially used term */
  initalTerm: PropTypes.string,
  /** initially expand availability section */
  initialShowAvailability: PropTypes.bool,
  /** initially selected start date */
  initialStartDate: PropTypes.string,
  /** initially selected end date */
  initialEndDate: PropTypes.string,
  /** initially expand pools section */
  initialShowPools: PropTypes.bool,
  /** initially selected pool id */
  initialPoolId: PropTypes.string,
  /** initially expand delegation section */
  initialShowDelegation: PropTypes.bool,
  /** initially selected user or delegation id */
  initialDelegationId: PropTypes.string,
  /** callback, submits user selection. arguments: `?` */
  onSubmit: PropTypes.func.isRequired,
  /** callback, house-keeping to do after the input fields have been reset to their default values */
  onClear: PropTypes.func
}

export default ModelFilterForm
