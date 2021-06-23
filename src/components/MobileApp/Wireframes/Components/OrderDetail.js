import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import OrderStateInfo from './OrderStateInfo'
import Section from './Section'
import ListItem from './ListItem'

export default function OrderDetail({ order, onOrderCancelClick = () => {} }) {
  return (
    <div>
      <div className="text-center">24 Tage ab 6.5.2020, 11 Gegenstände</div>

      <Section title="Status" collapsible={true} withDivider={true} className="pt-5">
        <div className="pt-3">
          <OrderStateInfo order={order} />
          {order.isCancellable && (
            <button
              type="button"
              className="btn btn-light border-0 w21-bg-light2 w-100 mt-2"
              onClick={() => onOrderCancelClick()}
            >
              Ausleihe stornieren
            </button>
          )}
        </div>
      </Section>

      <Section title="Zweck" collapsible={true} withDivider={true} className="pt-5">
        <div className="pt-3">{order.purpose}</div>
      </Section>

      <Section title="Geräteparks" collapsible={true} withDivider={true} className="pt-5">
        {order.pools.map((pool, i) => (
          <PoolListItem {...pool} key={i} />
        ))}
      </Section>

      <Section title="Gegenstände" collapsible={true} withDivider={true} className="pt-5">
        {order.models.map((model, i) => (
          <ModelListItem {...model} key={i} onClick={() => alert('TODO')} />
        ))}
      </Section>

      <Section title="Delegation" collapsible={true} withDivider={true} className="pt-5">
        <div className="pt-3">
          {order.delegation.name}
          {order.delegation.isUser && ' (persönlich)'}
        </div>
      </Section>

      <Section title="Dokumente" collapsible={true} withDivider={true} className="pt-5">
        <div className="pt-3">
          {order.documents.map((document, i) => (
            <Document {...document} key={i} />
          ))}
        </div>
      </Section>

      <div className="text-center text-muted text-center text-xs mt-5">ID {order.id}</div>
    </div>
  )
}

function PoolListItem({ name, modelCount, orderStateLabel }) {
  return (
    <ListItem>
      <h5>{name}</h5>
      <div>
        {modelCount} Gegenstände {orderStateLabel}
      </div>
    </ListItem>
  )
}

function ModelListItem({ reservation, model, pool, onClick }) {
  return (
    <ListItem
      onClick={() => onClick(reservation.id)}
      foot={
        <div className="text-xs">
          {reservation.durationDays} Tage{' '}
          {reservation.isCompleted ? `bis ${reservation.endDate}` : `ab ${reservation.startDate}`}
        </div>
      }
    >
      <h5>
        {reservation.quantity}x {model.name}
      </h5>
      <div>{pool.name}</div>
    </ListItem>
  )
}
function Document({ name, url }) {
  return (
    <div>
      <a href={url} className="w21-link">
        <FontAwesomeIcon icon={faDownload} /> {name}
      </a>
    </div>
  )
}
