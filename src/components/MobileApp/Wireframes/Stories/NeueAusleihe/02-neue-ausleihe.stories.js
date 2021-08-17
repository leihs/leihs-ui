import React, { useState } from 'react'

import ActionButtonGroup from '../../../DesignComponents/ActionButtonGroup'
import Badge from '../../../DesignComponents/Badge'
import ListCard from '../../../DesignComponents/ListCard'
import PageLayout from '../../../DesignComponents/PageLayout'
import ProgressInfo from '../../../DesignComponents/ProgressInfo'
import Section from '../../../DesignComponents/Section'
import Stack from '../../../DesignComponents/Stack'
import Warning from '../../../DesignComponents/Warning'
import PageLayoutMock from '../../../StoryUtils/PageLayoutMock'

export default {
  title: 'MobileApp/Wireframes/Neue Ausleihe/Neue Ausleihe',
  parameters: { layout: 'fullscreen' },
  argTypes: {
    onResetTimeLimitClick: { action: 'reset-time-limit' },
    onItemClick: { action: 'item-click' },
    onConfirmClick: { action: 'confirm-click' },
    onDeleteClick: { action: 'delete-click' },
    onDelegationChange: { action: 'delegation-change' }
  },
  args: {
    order: {
      models: [
        {
          reservation: {
            id: '958fb184-fd1a-546f-965d-4852cf997563',
            startDate: '26.5.2021',
            endDate: '6.6.2021',
            durationDays: 13,
            quantity: 1,
            isCompleted: false,
            isInvalid: true // TODO: unconfirmed model name
          },
          model: {
            id: '40ca9617-f879-5092-8789-b583f8064f9c',
            name: 'ARRI Alexa DTE-SXS Super 35mm'
          },
          pool: {
            id: '8bd16d45-056d-5590-bc7f-12849f034351',
            name: 'Ausleihe Toni-Areal'
          }
        },
        {
          reservation: {
            id: '958fb184-fd1a-546f-965d-4852cf997563',
            startDate: '27.5.2021',
            endDate: '6.6.2021',
            durationDays: 12,
            quantity: 2,
            isCompleted: false
          },
          model: {
            id: '40ca9617-f879-5092-8789-b583f8064f9c',
            name: 'Glasfilter Tiffen 4x4 Pol'
          },
          pool: {
            id: '8bd16d45-056d-5590-bc7f-12849f034351',
            name: 'Ausleihe Toni-Areal'
          }
        },
        {
          reservation: {
            id: '958fb184-fd1a-546f-965d-4852cf997563',
            startDate: '6.6.2021',
            endDate: '8.6.2021',
            durationDays: 3,
            quantity: 1,
            isCompleted: false
          },
          model: {
            id: '40ca9617-f879-5092-8789-b583f8064f9c',
            name: 'Monitor HD LCD Panasonic'
          },
          pool: {
            id: '8bd16d45-056d-5590-bc7f-12849f034351',
            name: 'Werkstattausleihe'
          }
        }
      ]
    },
    user: {
      id: 'a06ec573-d8da-4999-81fa-63226a8b00b7',
      name: 'Joël Gähwiler'
    },
    delegations: [
      { id: '37372089-450b-49ec-8486-fcc3a9e6ae22', name: 'Delegation 1' },
      { id: '3013ff5a-0203-4ec5-bda5-61871ddd5dc7', name: 'Delegation 2' }
    ],
    errorMessage: '1 Gegenstand ungültig'
  }
}

export const neueAusleihe = ({
  order,
  user,
  delegations,
  onResetTimeLimitClick,
  onDelegationChange,
  onItemClick,
  onConfirmClick,
  onDeleteClick,
  errorMessage
}) => {
  const [userId, setUserId] = useState(user.id)

  function confirmClick() {
    onConfirmClick({ userId })
  }
  function userIdChange(e) {
    setUserId(e.target.value)
    onDelegationChange(e.target.value)
  }

  return (
    <PageLayoutMock>
      <PageLayout.Header title="Neue Ausleihe"></PageLayout.Header>

      <Stack space="5">
        <Section title="Status" collapsible>
          <Stack space="3">
            <ProgressInfo title="Zeitlimit" info="Noch 23 Minuten übrig" totalCount="30" doneCount="23" />
            <ActionButtonGroup>
              <button type="button" className="btn btn-secondary" onClick={onResetTimeLimitClick}>
                Zeitlimit zurückstellen
              </button>
            </ActionButtonGroup>
          </Stack>
        </Section>

        <Section title="Delegation" collapsible>
          <label htmlFor="user-id" className="visually-hidden" required>
            Delegation
          </label>
          <select name="user-id" id="user-id" className="form-select" value={userId} onChange={userIdChange}>
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

        <Section title="Gegenstände" collapsible className="position-relative">
          <ListCard.Stack>
            {order.models.map(({ reservation, model, pool }, i) => (
              <ListCard key={i} onClick={() => onItemClick(reservation.id)}>
                <ListCard.Title>
                  {reservation.quantity}x {model.name}
                </ListCard.Title>
                <ListCard.Body>{pool.name}</ListCard.Body>
                <ListCard.Foot>
                  <Badge className={reservation.isInvalid ? 'bg-danger' : undefined}>
                    {reservation.durationDays} Tage{' '}
                    {reservation.isCompleted ? `bis ${reservation.endDate}` : `ab ${reservation.startDate}`}
                  </Badge>
                </ListCard.Foot>
              </ListCard>
            ))}
          </ListCard.Stack>
        </Section>

        <Section>
          <ActionButtonGroup>
            {errorMessage && <Warning>{errorMessage}</Warning>}
            <button type="submit" className="btn btn-primary" disabled={errorMessage} onClick={confirmClick}>
              Ausleihe bestätigen
            </button>
            <button type="button" className="btn btn-secondary" onClick={onDeleteClick}>
              Ausleihe löschen
            </button>
          </ActionButtonGroup>
        </Section>
      </Stack>
    </PageLayoutMock>
  )
}
neueAusleihe.storyName = 'Neue Ausleihe'
