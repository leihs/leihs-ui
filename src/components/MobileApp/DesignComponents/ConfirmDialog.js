import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import ModalDialog from './ModalDialog'
import Spinner from './Spinner'
// import Button from 'react-bootstrap/Button'

export default function ConfirmDialog({
  className,
  children,
  title = '?',
  confirmLabel = 'OK',
  cancelLabel = 'Cancel',
  confirmIsLoading = false,
  onConfirm,
  onCancel,
  isError = false,
  ...restProps
}) {
  const menuActions = {
    primary: {
      variant: isError ? 'dark' : 'primary',
      label: (
        <>
          {!!confirmIsLoading && (
            <>
              <Spinner />{' '}
            </>
          )}
          {confirmLabel}
        </>
      ),
      onClick: !confirmIsLoading ? onConfirm || undefined : undefined
    }
  }
  if (onCancel) {
    menuActions.secondary = { label: cancelLabel, onClick: !confirmIsLoading ? onCancel || undefined : undefined }
  }

  return (
    <ModalDialog
      {...restProps}
      className={cx(className)}
      contentClassName={cx(!!isError && 'border-danger border-2')}
      title={title}
      headerClassname={!!isError && [{ 'bg-light-shade': false }, 'bg-danger text-color-content-inverse']}
    >
      <ModalDialog.Body>{children}</ModalDialog.Body>
      <ModalDialog.Footer actions={menuActions}></ModalDialog.Footer>
    </ModalDialog>
  )
}

ConfirmDialog.propTypes = {
  className: PropTypes.string,
  /** content of the dialog */
  children: PropTypes.node,
  /** title of the dialog */
  title: PropTypes.string.isRequired,
  /** called when "OK" button is clicked */
  onConfirm: PropTypes.func.isRequired,
  /** optional, called when "Cancel" button is clicked */
  onCancel: PropTypes.func
}
