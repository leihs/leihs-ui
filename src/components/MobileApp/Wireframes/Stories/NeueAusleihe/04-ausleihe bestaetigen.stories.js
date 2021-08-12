import React, { useState } from 'react'
import cx from 'classnames'

import DialogLayout from '../../../DesignComponents/DialogLayout'
import FormButtonGroup from '../../../DesignComponents/FormButtonGroup'
import Stack from '../../../DesignComponents/Stack'
import Section from '../../../DesignComponents/Section'
import Textarea from '../../../DesignComponents/Textarea'

export default {
  title: 'MobileApp/Wireframes/Neue Ausleihe/Ausleihe bestätigen',
  parameters: { layout: 'fullscreen' },
  argTypes: {
    onSubmit: { action: 'submit' },
    onCancel: { action: 'cancel' }
  },
  args: {
    delegations: [
      { id: '37372089-450b-49ec-8486-fcc3a9e6ae22', name: 'Delegation 1' },
      { id: '3013ff5a-0203-4ec5-bda5-61871ddd5dc7', name: 'Delegation 2' }
    ],
    user: {
      id: 'a06ec573-d8da-4999-81fa-63226a8b00b7',
      name: 'Joël Gähwiler'
    },
    initialTitle: 'Videomodul',
    initialPurpose: 'Material für Videomodul im 3. Semester.',
    initialUserId: 'a06ec573-d8da-4999-81fa-63226a8b00b7'
  }
}

export const ausleiheBestaetigen = ({
  delegations,
  user,
  onSubmit,
  onCancel,
  initialTitle,
  initialPurpose,
  initialUserId
}) => {
  const [title, setTitle] = useState(initialTitle)
  const [purpose, setPurpose] = useState(initialPurpose)
  const [userId, setUserId] = useState(initialUserId)

  const [formValidated, setFormValidated] = useState()
  const [titleValidated, setTitleValidated] = useState()
  const [summaryValidated, setSummaryValidated] = useState()
  const [userIdValidated, setUserIdValidated] = useState()

  function blurTitle() {
    setTitleValidated(true)
  }
  function blurSummary() {
    setSummaryValidated(true)
  }
  function blurUserId() {
    setUserIdValidated(true)
  }

  function changeTitle(e) {
    setTitle(e.target.value)
  }
  function changePurpose(e) {
    setPurpose(e.target.value)
  }
  function changeUserId(e) {
    setUserId(e.target.value)
  }

  function submit(e) {
    e.preventDefault()
    setFormValidated(true)
    if (e.target.checkValidity()) {
      onSubmit({ title, purpose, userId })
    }
  }
  return (
    <DialogLayout title="Neue Ausleihe bestätigen">
      <form onSubmit={submit} noValidate autoComplete="off" className={cx({ 'was-validated': formValidated })}>
        <DialogLayout.Body>
          <Stack space="4">
            <Section title="Titel" collapsible className={cx({ 'was-validated': titleValidated })}>
              <label htmlFor="title" className="visually-hidden">
                Titel
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="form-control"
                required
                value={title}
                onChange={changeTitle}
                onBlur={blurTitle}
              />
            </Section>
            <Section title="Zweck" collapsible className={cx({ 'was-validated': summaryValidated })}>
              <label htmlFor="purpose" className="visually-hidden">
                Zweck
              </label>
              <Textarea
                minRows="3"
                maxRows="15"
                name="purpose"
                id="purpose"
                className="form-control"
                required
                value={purpose}
                onChange={changePurpose}
                onBlur={blurSummary}
              />
            </Section>
            <Section title="Delegation" collapsible className={cx({ 'was-validated': userIdValidated })}>
              <label htmlFor="user-id" className="visually-hidden" required>
                Delegation
              </label>
              <select
                name="user-id"
                id="user-id"
                className="form-select"
                value={userId}
                onChange={changeUserId}
                onBlur={blurUserId}
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
          </Stack>
        </DialogLayout.Body>
        <DialogLayout.Foot>
          <FormButtonGroup>
            <button type="button" className="btn btn-secondary" onClick={onCancel}>
              Abbrechen
            </button>
            <button type="submit" className="btn btn-primary">
              Bestätigen
            </button>
          </FormButtonGroup>
        </DialogLayout.Foot>
      </form>
    </DialogLayout>
  )
}

ausleiheBestaetigen.storyName = 'Ausleihe bestätigen'
