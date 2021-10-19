import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { de } from 'date-fns/locale'
import { isAfter, parse } from 'date-fns'

import Section from '../../../DesignComponents/Section'
import InputWithClearButton from '../../../DesignComponents/InputWithClearButton'
import ActionButtonGroup from '../../../DesignComponents/ActionButtonGroup'
import ModalDialog from '../../../DesignComponents/ModalDialog'
import Stack from '../../../DesignComponents/Stack'
import DatePicker from '../../../DesignComponents/DatePicker'
import Warning from '../../../DesignComponents/Warning'

export default {
  title: 'MobileApp/Wireframes/Katalog/Filter',
  parameters: {
    layout: 'fullscreen',
    storyshots: { disable: true } // (related to ModalDialog, see https://github.com/leihs/leihs/issues/1125)
  },
  args: {
    onSubmit: action('get-results')
  }
}

export const filter = ({ onSubmit }) => {
  // data
  const delegations = [
    { id: '37372089-450b-49ec-8486-fcc3a9e6ae22', name: 'Delegation 1' },
    { id: '3013ff5a-0203-4ec5-bda5-61871ddd5dc7', name: 'Delegation 2' }
  ]
  const pools = [
    { id: '8bd16d45-056d-5590-bc7f-12849f034351', name: 'Ausleihe Toni-Areal' },
    { id: '5863967f-9804-4909-a9b7-92254616d6b2', name: 'FM-Inventar' },
    { id: 'a02b8163-9a16-5066-b48e-9eb74cf8b791', name: 'Fundus-Dok' },
    { id: '5dd25b58-fa56-5095-bd97-2696d92c2fb1', name: 'IT-Zentrum' },
    { id: 'ffaa3aea-2a1f-4d6a-bdfc-f3be93699750', name: 'ITZ Occasions-Shop' },
    { id: '3977012c-ce0e-501f-889b-8715fdb5d83b', name: 'ITZ Software' }
  ]
  const user = {
    id: 'a06ec573-d8da-4999-81fa-63226a8b00b7',
    name: 'Joël Gähwiler'
  }
  const initialTerm = 'Mikrofon'
  const initialStartDate = ''
  const initialEndDate = ''
  const initialPoolId = '8bd16d45-056d-5590-bc7f-12849f034351'
  const initialDelegationId = 'a06ec573-d8da-4999-81fa-63226a8b00b7'

  // env
  const locale = de

  // state
  const [term, setTerm] = useState(initialTerm)
  const [startDate, setStartDate] = useState(initialStartDate) // localized string
  const [endDate, setEndDate] = useState(initialEndDate) // localized string
  const [poolId, setPoolId] = useState(initialPoolId)
  const [delegationId, setDelegationId] = useState(initialDelegationId)

  // validation
  const parseDate = s => parse(s, 'P', new Date(), { locale: de })
  const isEndDateBeforeStartDate = startDate && endDate && isAfter(parseDate(startDate), parseDate(endDate))

  // actions
  function submit(e) {
    e.preventDefault()
    onSubmit({ term, startDate, endDate, poolId, delegationId })
  }
  function clear() {
    setTerm('')
    setStartDate('')
    setEndDate('')
    setPoolId('')
    setDelegationId(user.id)
  }

  return (
    <ModalDialog title="Katalog filtern" shown>
      <ModalDialog.Body>
        <form onSubmit={submit} noValidate autoComplete="off" id="model-filter-form">
          <Stack space="4">
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
            <Section title="Verfügbarkeit" collapsible>
              <Stack space="3">
                <DatePicker
                  locale={locale}
                  label={<label htmlFor="start-date">Von</label>}
                  id="start-date"
                  name="start-date"
                  placeholder="Unbestimmt"
                  value={startDate}
                  onChange={e => setStartDate(e.target.value)}
                />
                <DatePicker
                  locale={locale}
                  label={<label htmlFor="end-date">Bis</label>}
                  id="end-date"
                  name="end-date"
                  placeholder="Unbestimmt"
                  value={endDate}
                  onChange={e => setEndDate(e.target.value)}
                />
                {isEndDateBeforeStartDate && <Warning>Bis-Datum ist vor Von-Datum</Warning>}
              </Stack>
            </Section>
            <Section title="Geräteparks" collapsible>
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
        </form>
      </ModalDialog.Body>
      <ModalDialog.Footer>
        <button type="submit" className="btn btn-primary" form="model-filter-form">
          Auswählen
        </button>
        <button type="button" onClick={clear} className="btn btn-secondary" form="model-filter-form">
          Zurücksetzen
        </button>
      </ModalDialog.Footer>
    </ModalDialog>
  )
}
