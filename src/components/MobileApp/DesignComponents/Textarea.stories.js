import React, { useState } from 'react'
import Textarea from './Textarea'

export default {
  title: 'MobileApp/Design Components/Form Controls/Textarea',
  component: Textarea,
  argTypes: {
    minRows: { control: { type: 'number' } },
    maxRows: { control: { type: 'number' } }
  },
  args: {
    minRows: 2,
    maxRows: 5
  }
}

export const textarea = ({ minRows, maxRows }) => {
  const [message, setMessage] = useState('')

  return (
    <div>
      <h1>Textarea</h1>
      <p className="text-muted">
        A drop-in replacement for <code>{`<textarea />`}</code> which adapts its rows automatically to the entered text
        (at least when state-controlled).
      </p>
      <p className="text-muted">Controlled textarea example (state-bound):</p>
      <div className="d-flex flex-column gap-3">
        <Textarea
          name="name"
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="form-control"
          minRows={minRows}
          maxRows={maxRows}
        />
        <textarea
          name="mirror"
          placeholder="Textarea bound to same state"
          className="form-control"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
      </div>
    </div>
  )
}
Textarea.storyName = 'Textarea'

export function minMaxRows() {
  const [message, setMessage] = useState('')

  return (
    <div>
      <h1>Textarea</h1>
      <p className="text-muted">
        Some examples with <code>minRows</code> and <code>maxRows</code>
      </p>
      <p className="text-muted">3-7 (default)</p>
      <p>
        <Textarea name="name" value={message} onChange={e => setMessage(e.target.value)} className="form-control" />
      </p>
      <p className="text-muted">1-3</p>
      <p>
        <Textarea
          name="name"
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="form-control"
          minRows="1"
          maxRows="3"
        />
      </p>
      <p className="text-muted">10-20</p>
      <p>
        <Textarea
          name="name"
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="form-control"
          minRows="10"
          maxRows="20"
        />
      </p>
      <p className="text-muted">
        Note that setting <code>rows</code> directly will disable the autoresizer
      </p>
      <p>
        <Textarea
          name="name"
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="form-control"
          rows="2"
        />
      </p>
    </div>
  )
}

export const uncontrolled = () => {
  return (
    <div>
      <h1>Textarea</h1>

      <p className="text-muted">As an uncontrolled textarea (without autoresizer, just a plain textarea)</p>
      <Textarea name="name" className="form-control" rows="5" />
    </div>
  )
}
