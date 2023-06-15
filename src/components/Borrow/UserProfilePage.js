import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import PageLayout from './DesignComponents/PageLayout'
import Stack from './DesignComponents/Stack'
import Section from './DesignComponents/Section'
import PropertyTable from './DesignComponents/PropertyTable'
import ListCard from './DesignComponents/ListCard'
import DownloadLink from './DesignComponents/DownloadLink'
import ActionButtonGroup from './DesignComponents/ActionButtonGroup'

const BASE_CLASS = 'ui-user-profile'

function UserProfilePage({ txt, user, delegations, contracts, onLogoutClick, ...restProps }) {
  const { pageTitle, sectionUserData, sectionContracts, sectionDelegations, logout, noContracts } = txt

  const isLocalUser = user.organization === 'local'

  const userDataTable = [
    ['Email', user.email],
    user.secondaryEmail && ['Zweit-Email', user.secondaryEmail],
    ['Telefon', user.phone],

    ...(isLocalUser
      ? []
      : [
          ['Organisation', user.organization],
          ['ID', user.orgId]
        ]),

    user.badgeId && ['Badge-ID', user.badgeId]
  ]
    .filter(Boolean)
    .map(([key, value]) => ({ key, value }))

  return (
    <div {...restProps} className={cx(restProps.className, BASE_CLASS)}>
      <PageLayout.Header title={pageTitle} subTitle={user.name}>
        {!!onLogoutClick && (
          <ActionButtonGroup>
            <button type="button" className="btn btn-secondary" onClick={onLogoutClick}>
              {logout}
            </button>
          </ActionButtonGroup>
        )}
      </PageLayout.Header>
      <Stack space="5">
        <Section title={sectionUserData} collapsible>
          <PropertyTable properties={userDataTable} />
        </Section>
        {!!delegations.length && (
          <Section title={sectionDelegations} collapsible>
            <ListCard.Stack>
              {delegations.map(({ id, name, responsibleName, responsibleEmail, href }) => (
                <ListCard key={id} href={href}>
                  <ListCard.Title>
                    {href ? (
                      <a href={href} className="stretched-link">
                        {name}
                      </a>
                    ) : (
                      name
                    )}
                  </ListCard.Title>
                  <ListCard.Body>
                    <div>{responsibleName}</div>
                    {responsibleEmail && (
                      <div className="pt-1">
                        <a href={'mailto:' + responsibleEmail}>{responsibleEmail}</a>
                      </div>
                    )}
                  </ListCard.Body>
                </ListCard>
              ))}
            </ListCard.Stack>
          </Section>
        )}
        <Section title={sectionContracts} collapsible>
          {!contracts.length ? (
            <p>{noContracts}</p>
          ) : (
            <Stack space="3">
              {contracts.map(({ id, downloadUrl, displayName }) => {
                return (
                  <DownloadLink key={id} href={downloadUrl} target="_blank">
                    {displayName}
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
  user: PropTypes.object.isRequired,
  delegations: PropTypes.array.isRequired,
  contracts: PropTypes.array.isRequired,
  onLogoutClick: PropTypes.func
}

export default UserProfilePage
