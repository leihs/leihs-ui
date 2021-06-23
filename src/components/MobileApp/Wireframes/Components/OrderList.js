import React from 'react'
import Section from './Section'
import OrderStateInfo from './OrderStateInfo'
import ListItem from './ListItem'

export default function OrderList({ ordersByBasicState, onItemClick }) {
  return (
    <div>
      {ordersByBasicState.map(group => {
        const orders = group.orders
        const title = group.basicState.label
        const key = group.basicState.key
        return (
          <Section key={key} title={title} collapsible={true} withDivider={true} className="pt-5">
            <div>CON</div>
            {orders.map((order, i) => {
              return (
                <div key={order.id}>
                  <OrderListItem order={order} onClick={onItemClick} />
                </div>
              )
            })}
          </Section>
        )
      })}
    </div>
  )
}

function OrderListItem({ order, onClick }) {
  return (
    <ListItem onClick={() => onClick(order)} foot={<OrderStateInfo order={order} />}>
      <h5>{order.title}</h5>
      <div className="text-xs">
        {order.durationDays} Tage {order.isCompleted ? `bis ${order.endDate}` : `ab ${order.startDate}`},{' '}
        {order.modelCount} {order.modelCount === 1 ? 'Gegenstand' : 'Gegenstände'}
      </div>
    </ListItem>
  )
}
