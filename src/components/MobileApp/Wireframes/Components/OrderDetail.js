import React from 'react'
import OrderStateInfo from './OrderStateInfo'
import Section from '../../DesignComponents/Section'
import SimpleCard from '../../DesignComponents/SimpleCard'
import PageLayout from '../../DesignComponents/PageLayout'
import DownloadLink from '../../DesignComponents/DownloadLink'
import ActionButton from '../../DesignComponents/ActionButton'

export default function OrderDetail({ order, onOrderCancelClick = () => {} }) {
  return (
    <div>
      <div className="text-center">24 Tage ab 6.5.2020, 11 Gegenstände</div>

      <Section title="Status" collapsible={true} className="pt-5">
        <div className="pt-3">
          <OrderStateInfo order={order} />
          {order.isCancellable && <ActionButton onClick={() => onOrderCancelClick()}>Ausleihe stornieren</ActionButton>}
        </div>
      </Section>

      <Section title="Zweck" collapsible={true} className="pt-5">
        <div className="pt-3">{order.purpose}</div>
      </Section>

      <Section title="Geräteparks" collapsible={true} className="pt-5">
        <PageLayout.DividedStack>
          {order.pools.map((pool, i) => (
            <PoolListItem {...pool} key={i} />
          ))}
        </PageLayout.DividedStack>
      </Section>

      <Section title="Gegenstände" collapsible={true} className="pt-5">
        <PageLayout.DividedStack>
          {order.models.map((model, i) => (
            <ModelListItem {...model} key={i} onClick={() => alert('TODO')} />
          ))}
        </PageLayout.DividedStack>
      </Section>

      <Section title="Delegation" collapsible={true} className="pt-5">
        <div className="pt-3">
          {order.delegation.name}
          {order.delegation.isUser && ' (persönlich)'}
        </div>
      </Section>

      <Section title="Dokumente" collapsible={true} className="pt-5">
        <div className="pt-3">
          {order.documents.map(document => (
            <div key={document.id}>
              <DownloadLink href={document.url}>{document.name}</DownloadLink>
            </div>
          ))}
        </div>
      </Section>

      <div className="text-center text-muted text-center text-xs mt-5">ID {order.id}</div>
    </div>
  )
}

function PoolListItem({ name, modelCount, orderStateLabel }) {
  return (
    <SimpleCard>
      <h5>{name}</h5>
      <div>
        {modelCount} Gegenstände {orderStateLabel}
      </div>
    </SimpleCard>
  )
}

function ModelListItem({ reservation, model, pool, onClick }) {
  return (
    <SimpleCard
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
    </SimpleCard>
  )
}
