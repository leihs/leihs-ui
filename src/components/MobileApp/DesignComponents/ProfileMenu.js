import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Spinner from './Spinner'

const defaultTxt = {
  title: 'Profil wechseln'
}

export default function ProfileMenu({
  user,
  delegations,
  currentProfile,
  onSelectProfile,
  changingToProfileId,
  onDismiss,
  txt = defaultTxt,
  className,
  ...restProps
}) {
  const selectProfileClick = d => {
    if (d.id === currentProfile.id) {
      onDismiss()
    } else {
      onSelectProfile(d)
    }
  }

  const { title } = txt
  return (
    <div className={cx('ui-profile-menu h-100 overflow-scroll bg-light-shade', className)} {...restProps}>
      <div className="page-inset-x py-4 container-fluid" style={{ maxWidth: '720px' }}>
        <h1 className="text-center mb-4">{title}</h1>
        <div className="d-flex flex-column gap-3">
          {getProfileButton({
            profile: user,
            currentProfile,
            changingToProfileId,
            onClick: () => selectProfileClick(user)
          })}

          {delegations.map((d, i) => (
            <React.Fragment key={i}>
              {getProfileButton({
                profile: d,
                currentProfile,
                changingToProfileId,
                onClick: () => selectProfileClick(d)
              })}
            </React.Fragment>
          ))}

          <div className="py-3"></div>
        </div>
      </div>
    </div>
  )
}

function getProfileButton({ profile, currentProfile, changingToProfileId, onClick }) {
  return (
    <button
      className={cx('btn d-flex align-items-top', profile.id === currentProfile.id ? 'btn-dark' : 'btn-outline-dark')}
      onClick={onClick}
    >
      <div className="text-start" style={{ flex: '2.4rem 0 0' }}>
        <div className="d-inline-block text-center fw-normal position-relative">
          {profile.shortName}
          {profile.id === changingToProfileId && (
            <Spinner
              className="position-absolute"
              style={{ left: '-0.2rem', top: '-0.1rem', opacity: '1', width: '1.6rem', height: '1.6rem' }}
            />
          )}
        </div>
      </div>
      <div className="text-start">{profile.name}</div>
    </button>
  )
}

const profileShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  shortName: PropTypes.string
}

ProfileMenu.propTypes = {
  /** The authenticated user */
  user: PropTypes.shape(profileShape).isRequired,
  /** The delegations the user is a member of */
  delegations: PropTypes.arrayOf(PropTypes.shape(profileShape)).isRequired,
  /** The currently selected profile (user or one of his delegations) */
  currentProfile: PropTypes.shape(profileShape).isRequired,
  /** Callback when a different profile was selected (the profile is passed as argument) */
  onSelectProfile: PropTypes.func.isRequired,
  /** the component shows a spinner on the profile with this id to indicate waiting during applying the profile switch */
  changingToProfileId: PropTypes.string,
  /** Request to close the dialog without doing anything */
  onDismiss: PropTypes.func.isRequired,
  /** Text dict */
  txt: PropTypes.shape({ title: PropTypes.string.isRequired })
}
