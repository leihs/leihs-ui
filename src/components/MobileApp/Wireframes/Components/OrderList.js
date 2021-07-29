import React from 'react'
import OrderStateInfo from './OrderStateInfo'
import Section from '../../DesignComponents/Section'
import SimpleCard from '../../DesignComponents/SimpleCard'
import PageLayout from '../../DesignComponents/PageLayout'

export default function OrderList({ ordersByBasicState, onItemClick }) {
  return (
    <PageLayout.Stack1>
      {ordersByBasicState.map(group => {
        const orders = group.orders
        const title = group.basicState.label
        const key = group.basicState.key
        return (
          <Section key={key} title={title} collapsible={true}>
            <PageLayout.DividedStack>
              {orders.map((order, i) => {
                return (
                  <div key={order.id}>
                    <OrderListItem order={order} onClick={onItemClick} />
                  </div>
                )
              })}
            </PageLayout.DividedStack>
          </Section>
        )
      })}
    </PageLayout.Stack1>
  )
}

function OrderListItem({ order, onClick }) {
  return (
    <SimpleCard onClick={() => onClick(order)} foot={<OrderStateInfo order={order} />}>
      <h2>{order.title}</h2>
      <div>
        {order.durationDays} Tage {order.isCompleted ? `bis ${order.endDate}` : `ab ${order.startDate}`},{' '}
        {order.modelCount} {order.modelCount === 1 ? 'Gegenstand' : 'Gegenstände'}
      </div>
    </SimpleCard>
  )
}
