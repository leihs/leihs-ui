import React from 'react'
import OrderStateInfo from './OrderStateInfo'
import Section from '../../DesignComponents/Section'
import SimpleCard from '../../DesignComponents/SimpleCard'
import PageLayout from '../../DesignComponents/PageLayout'

export default function OrderList({ ordersByBasicState, onItemClick }) {
  return (
    <div>
      {ordersByBasicState.map(group => {
        const orders = group.orders
        const title = group.basicState.label
        const key = group.basicState.key
        return (
          <Section key={key} title={title} collapsible={true} className="pt-5">
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
    </div>
  )
}

function OrderListItem({ order, onClick }) {
  return (
    <SimpleCard onClick={() => onClick(order)} foot={<OrderStateInfo order={order} />}>
      <h5>{order.title}</h5>
      <div className="text-xs">
        {order.durationDays} Tage {order.isCompleted ? `bis ${order.endDate}` : `ab ${order.startDate}`},{' '}
        {order.modelCount} {order.modelCount === 1 ? 'Gegenstand' : 'Gegenstände'}
      </div>
    </SimpleCard>
  )
}
