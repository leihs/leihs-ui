import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Spinner from './Spinner'

export default function ProfileMenuButton({ profile, isSelected, isLoading, onClick }) {
  return (
    <button
      className={cx(
        'btn btn-secondary rounded-pill d-flex justify-content-center align-items-top',
        isSelected ? 'ui-menu-item-selected leihs-menu-item--selected' : ''
      )}
      onClick={onClick}
    >
      <div style={{ flex: '2.4rem 0 0' }}>
        <div className="d-inline-block text-center fw-normal position-relative">
          {profile.shortName}
          {isLoading && (
            <Spinner
              className="position-absolute text-muted"
              style={{ left: '-0.2rem', top: '-0.1rem', opacity: '1', width: '1.6rem', height: '1.6rem' }}
            />
          )}
        </div>
      </div>
      <div>{profile.profileName}</div>
    </button>
  )
}

const profileShape = {
  id: PropTypes.string.isRequired,
  profileName: PropTypes.string.isRequired,
  shortName: PropTypes.string
}

ProfileMenuButton.propTypes = {
  profile: PropTypes.shape(profileShape).isRequired,
  isSelected: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func
}
