import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { parseISO as parseISODate, format as formatDate } from 'date-fns'
import { de } from 'date-fns/locale'

import PageLayout from './DesignComponents/PageLayout'
import Stack from './DesignComponents/Stack'
import Section from './DesignComponents/Section'
import PropertyTable from './DesignComponents/PropertyTable'
import ListCard from './DesignComponents/ListCard'
import DownloadLink from './DesignComponents/DownloadLink'
import ActionButtonGroup from './DesignComponents/ActionButtonGroup'

const formatDateShort = date => formatDate(parseISODate(date), 'P', { locale: de })

const BASE_CLASS = 'ui-user-profile'

function UserProfilePage({ currentUser, onLogoutClick, ...restProps }) {
  const { user } = currentUser
  const { delegations } = user
  const contracts = user.contracts.edges.map(e => e.node)

  const isLocalUser = user.organization === 'local'

  const userDataTable = [
    ['Email', user.email],
    user.secondaryEmail && ['Zweit-Email', user.secondaryEmail],
    ['Telefon', user.phone],

    ...(isLocalUser
      ? []
      : [
          ['Organisation', user.organization],
          ['Organisations-ID', user.orgId]
        ]),

    user.badgeId && ['Badge-ID', user.badgeId]
  ]
    .filter(Boolean)
    .map(([key, value]) => ({ key, value }))

  return (
    <div {...restProps} className={cx(restProps.className, BASE_CLASS)}>
      <PageLayout.Header title="Benutzerkonto" subTitle={user.name}>
        <ActionButtonGroup>
          <button type="button" className="btn btn-secondary" onClick={onLogoutClick}>
            Abmelden
          </button>
        </ActionButtonGroup>
      </PageLayout.Header>
      <Stack space="5">
        <Section title="Nutzerdaten" collapsible>
          <PropertyTable properties={userDataTable} />
        </Section>

        {!!delegations.length && (
          <Section title="Delegationen" collapsible>
            <ListCard.Stack>
              {delegations.map(({ id, name, responsible }) => (
                <ListCard key={id}>
                  <ListCard.Title>{name}</ListCard.Title>
                  <ListCard.Body>{responsible.name}</ListCard.Body>
                </ListCard>
              ))}
            </ListCard.Stack>
          </Section>
        )}

        <Section title="Verträge" collapsible>
          {!contracts.length ? (
            <p>(noch keine)</p>
          ) : (
            <Stack space="3">
              {contracts.map(({ id, createdAt, inventoryPool }) => {
                return (
                  <DownloadLink href={'#todo'} key={id}>
                    {inventoryPool.name} vom {formatDateShort(createdAt)}
                  </DownloadLink>
                )
              })}
            </Stack>
          )}
        </Section>
      </Stack>
    </div>
  )
}
UserProfilePage.propTypes = {
  currentUser: PropTypes.object,
  onLogoutClick: PropTypes.func.isRequired,
  restProps: PropTypes.object
}

export default UserProfilePage
