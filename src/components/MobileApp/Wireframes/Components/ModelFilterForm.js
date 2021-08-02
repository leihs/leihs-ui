import PropTypes from 'prop-types'
import React, { useState } from 'react'
import f from 'lodash'
import Section from '../../DesignComponents/Section'
import InputWithClearButton from '../../DesignComponents/InputWithClearButton'
import ActionButtonGroup from '../../DesignComponents/ActionButtonGroup'
import DialogLayout from '../../DesignComponents/DialogLayout'
import Stack from '../../DesignComponents/Stack'
import FormButtonGroup from '../../DesignComponents/FormButtonGroup'
import LabelInside from '../../DesignComponents/LabelInside'

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
    <DialogLayout title="Katalog filtern">
      <form onSubmit={submit} noValidate>
        <DialogLayout.Body>
          <Stack space="4">
            {delegations && (
              <Section title="Delegation" collapsible defaultCollapsed={!initialShowDelegation}>
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
            <Section title="Stichwort" collapsible defaultCollapsed={!initialShowTerm}>
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
            <Section title="Verfügbarkeit" collapsible defaultCollapsed={!initialShowAvailability}>
              <fieldset>
                <legend className="visually-hidden">Verfügbarkeit</legend>
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
            <Section title="Geräteparks" collapsible defaultCollapsed={!initialShowPools}>
              <div className="d-flex flex-column gap-3">
                <div>
                  <label htmlFor="pool-id" className="visually-hidden">
                    Geräteparks
                  </label>
                  <select
                    className="form-select"
                    name="pool-id"
                    id="pool-id"
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
                </div>
                <ActionButtonGroup>
                  <button type="button" className="btn btn-secondary" onClick={() => alert('TODO')}>
                    Gerätepark hinzufügen
                  </button>
                </ActionButtonGroup>
              </div>
            </Section>
          </Stack>
        </DialogLayout.Body>
        <DialogLayout.Foot>
          <FormButtonGroup>
            <button type="button" onClick={clear} className="btn btn-secondary">
              Zurücksetzen
            </button>
            <button type="submit" className="btn btn-primary">
              Auswählen
            </button>
          </FormButtonGroup>
        </DialogLayout.Foot>
      </form>
    </DialogLayout>
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
