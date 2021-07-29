import React from 'react'
import OrderStateInfo from './OrderStateInfo'
import Section from '../../DesignComponents/Section'
import SimpleCard from '../../DesignComponents/SimpleCard'
import PageLayout from '../../DesignComponents/PageLayout'
import DownloadLink from '../../DesignComponents/DownloadLink'
import ActionButtonGroup from '../../DesignComponents/ActionButtonGroup'

export default function OrderDetail({ order, onOrderCancelClick = () => {} }) {
  return (
    <div>
      <PageLayout.Header title={order.title}>
        <h2 className="fw-light">24 Tage ab 6.5.2020, 11 Gegenstände</h2>
      </PageLayout.Header>

      <PageLayout.Stack1>
        <Section title="Status" collapsible={true}>
          <div>
            <OrderStateInfo order={order} />
            {order.isCancellable && (
              <ActionButtonGroup>
                <button type="button" className="btn btn-secondary" onClick={() => onOrderCancelClick()}>
                  Ausleihe stornieren
                </button>
              </ActionButtonGroup>
            )}
          </div>
        </Section>

        <Section title="Zweck" collapsible={true}>
          <div>{order.purpose}</div>
        </Section>

        <Section title="Geräteparks" collapsible={true}>
          <PageLayout.DividedStack>
            {order.pools.map((pool, i) => (
              <PoolListItem {...pool} key={i} />
            ))}
          </PageLayout.DividedStack>
        </Section>

        <Section title="Gegenstände" collapsible={true}>
          <PageLayout.DividedStack>
            {order.models.map((model, i) => (
              <ModelListItem {...model} key={i} onClick={() => alert('TODO')} />
            ))}
          </PageLayout.DividedStack>
        </Section>

        <Section title="Delegation" collapsible={true}>
          <div>
            {order.delegation.name}
            {order.delegation.isUser && ' (persönlich)'}
          </div>
        </Section>

        <Section title="Dokumente" collapsible={true}>
          <div>
            {order.documents.map(document => (
              <div key={document.id}>
                <DownloadLink href={document.url}>{document.name}</DownloadLink>
              </div>
            ))}
          </div>
        </Section>

        <div className="text-center text-muted text-center">ID {order.id}</div>
      </PageLayout.Stack1>
    </div>
  )
}

function PoolListItem({ name, modelCount, orderStateLabel }) {
  return (
    <SimpleCard>
      <h2>{name}</h2>
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
        <div>
          {reservation.durationDays} Tage{' '}
          {reservation.isCompleted ? `bis ${reservation.endDate}` : `ab ${reservation.startDate}`}
        </div>
      }
    >
      <h2>
        {reservation.quantity}x {model.name}
      </h2>
      <div>{pool.name}</div>
    </SimpleCard>
  )
}
