import React from 'react'
import cx from 'classnames'
import DebugProps from '../DebugProps'

import { parseISO as parseISODate, format as formatDate } from 'date-fns'
const formatDateShort = date => formatDate(parseISODate(date), 'P')

const BASE_CLASS = 'ui-user-profile'

const UserProfilePage = allProps => {
  const { currentUser, ...restProps } = allProps
  const { user, delegations } = currentUser
  const contracts = user.contracts.edges.map(e => e.node)

  const isLocalUser = user.organization === 'local'

  const userDataTable = [
    ['Email', user.email],
    user.secondaryEmail && ['Zweit-Email', user.secondaryEmail],
    ['Telefon', user.phone],

    ...(isLocalUser
      ? []
      : [
          ['Organization', user.organization],
          ['Organization ID', user.orgId]
        ]),

    user.badgeId && ['Badge ID', user.badgeId]
  ].filter(Boolean)

  return (
    <div {...restProps} className={cx(restProps.className, BASE_CLASS, 'text-monospace')}>
      <section>
        <h3>nutzerdaten</h3>
        <dl>
          {userDataTable.map(([key, val], i) => (
            <React.Fragment key={i}>
              <dt>{key}</dt>
              <dd>{val}</dd>
            </React.Fragment>
          ))}
        </dl>
      </section>

      {!!delegations.length && (
        <section>
          <h3>delegationen</h3>
          <ul>
            {delegations.map(({ id, name, responsible }) => (
              <li key={id}>
                <strong>{name}</strong> - {responsible.name}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section>
        <h3>verträge</h3>
        {!contracts.length ? (
          <p>(noch keine)</p>
        ) : (
          <ul>
            {contracts.map(({ id, createdAt, inventoryPool }) => {
              return (
                <li key={id}>
                  {/* FIXME: use <DownloadLink> */}
                  <a href={'#todo'}>
                    [⬇] {inventoryPool.name} vom {formatDateShort(createdAt)}
                  </a>
                </li>
              )
            })}
          </ul>
        )}
      </section>

      <hr />
      <hr />
      <hr />
      <DebugProps {...allProps} />
    </div>
  )
}

export default UserProfilePage
