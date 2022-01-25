import React from 'react'
import FilterButton from '../../../DesignComponents/FilterButton'
import PageLayoutMock from '../../../StoryUtils/PageLayoutMock'
import PageLayout from '../../../DesignComponents/PageLayout'
import Stack from '../../../DesignComponents/Stack'
import Section from '../../../DesignComponents/Section'
import ListCard from '../../../DesignComponents/ListCard'
import ProgressInfo from '../../../DesignComponents/ProgressInfo'

export default {
  title: 'MobileApp/Wireframes/Meine Bestellungen/Liste',
  parameters: { layout: 'fullscreen' }
}

export const liste = ({ ordersByBasicState }) => {
  return (
    <PageLayoutMock>
      <PageLayout.Header title="Meine Bestellungen">
        <FilterButton>Alle Bestellungen</FilterButton>
      </PageLayout.Header>

      <Stack space="5">
        {ordersByBasicState.map(({ orders, basicState }) => {
          const { label, key } = basicState
          return (
            <Section key={key} title={label} collapsible>
              <ListCard.Stack>
                {orders.map(order => {
                  const orderLink = `/rentals/${order.id}`
                  return (
                    <div key={order.id}>
                      <ListCard href={orderLink}>
                        <ListCard.Title>
                          <a href={orderLink}>{order.title}</a>
                        </ListCard.Title>
                        <ListCard.Body>
                          {order.durationDays} Tage{' '}
                          {order.isCompleted ? `bis ${order.endDate}` : `ab ${order.startDate}`}, {order.modelCount}{' '}
                          {order.modelCount === 1 ? 'Gegenstand' : 'Gegenstände'}
                        </ListCard.Body>
                        <ListCard.Foot>
                          <Stack space="2">
                            {order.stateGroups.map((stateGroup, i) => (
                              <ProgressInfo key={i} {...stateGroup} small={true} />
                            ))}
                          </Stack>
                        </ListCard.Foot>
                      </ListCard>
                    </div>
                  )
                })}
              </ListCard.Stack>
            </Section>
          )
        })}
      </Stack>
    </PageLayoutMock>
  )
}

const ordersByBasicState = [
  {
    basicState: { key: 'open', label: 'Offen' },
    orders: [
      {
        id: '98510838-a6ec-4752-823e-000000000001',
        title: 'Video Semesterprojekt',
        purpose: 'Material für das Video Semesterprojekt bei Prof. Zimmer',
        startDate: '6.5.2020',
        endDate: '30.6.2020',
        durationDays: 24,
        modelCount: 11,
        isCompleted: false,
        stateGroups: [
          {
            title: 'Genehmigung',
            info: '1 von 3 Inventarparks genehmigt',
            totalCount: 3,
            doneCount: 1
          }
        ]
      },
      {
        id: '98510838-a6ec-4752-823e-000000000002',
        title: 'Werkschau 2021',
        purpose: '',
        startDate: '15.3.2020',
        endDate: '23.3.2020',
        durationDays: 8,
        modelCount: 7,
        isCompleted: false,
        stateGroups: [
          {
            title: 'Abholung',
            info: '4 von 7 Gegenständen abgeholt',
            totalCount: 7,
            doneCount: 4
          }
        ]
      },
      {
        id: '98510838-a6ec-4752-823e-000000000003',
        title: 'Siebdruck Material',
        purpose: '',
        startDate: '18.2.2020',
        endDate: '10.4.2020',
        durationDays: 54,
        modelCount: 4,
        isCompleted: false,
        stateGroups: [
          {
            title: 'Abholung',
            info: '3 von 4 Gegenständen abgeholt',
            totalCount: 4,
            doneCount: 3
          },
          {
            title: 'Rückgabe',
            info: '2 von 4 Gegenständen abgeholt',
            totalCount: 4,
            doneCount: 2
          }
        ]
      },
      {
        id: '98510838-a6ec-4752-823e-000000000004',
        title: 'Freitags Experiment',
        purpose: '',
        startDate: '12.2.2020',
        endDate: '10.4.2020',
        durationDays: 2,
        modelCount: 3,
        isCompleted: false,
        stateGroups: [
          {
            title: 'Rückgabe',
            info: '2 von 3 Gegenständen zurückgebracht',
            totalCount: 3,
            doneCount: 2
          }
        ]
      }
    ]
  },
  {
    basicState: { key: 'closed', label: 'Abgeschlossen' },
    orders: [
      {
        id: '98510838-a6ec-4752-823e-000000000005',
        title: 'Diplomausstellung 2019',
        purpose: '',
        startDate: '1.4.2019',
        endDate: '12.6.2019',
        durationDays: 72,
        modelCount: 16,
        isCompleted: true,
        stateGroups: [
          {
            title: 'Alle Gegenstände zurückgebracht'
          }
        ]
      },
      {
        id: '98510838-a6ec-4752-823e-000000000006',
        title: 'Semesterfest',
        purpose: '',
        startDate: '23.2.2019',
        endDate: '24.2.2019',
        durationDays: 2,
        modelCount: 1,
        isCompleted: true,
        stateGroups: [
          {
            title: 'Bestellung wurde abgelehnt'
          }
        ]
      },
      {
        id: '98510838-a6ec-4752-823e-000000000007',
        title: 'Kurs Präsentation',
        purpose: '',
        startDate: '16.7.2018',
        endDate: '17.7.2018',
        durationDays: 2,
        modelCount: 1,
        isCompleted: true,
        stateGroups: [
          {
            title: 'An “Reto Brunner” übertragen'
          }
        ]
      }
    ]
  }
]

liste.args = {
  ordersByBasicState
}
