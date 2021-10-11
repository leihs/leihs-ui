import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames/dedupe'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

// TODO: support close button in header? its recommended.

export default function ModalDialog({
  id,
  className,
  title,
  children,
  onClose,
  shown = false,
  closeOnBackgroundClick = false,
  headerClassname,
  contentClassName,
  ...restProps
}) {
  const baseId = id ? id : `Modal-${String(Math.random()).slice(2)}`
  // NOTE: we could use `aria-label` instead but it does not work yet <https://github.com/react-bootstrap/react-bootstrap/issues/5953>
  const labelId = baseId + '-Label'

  return (
    <Modal
      show={shown}
      onHide={onClose}
      fullscreen={'md-down'}
      backdrop={closeOnBackgroundClick ? true : 'static'}
      dialogClassName={className}
      contentClassName={contentClassName}
      centered
      scrollable
      aria-labelledby={labelId}
      {...restProps}
    >
      <Modal.Header closeButton={false} className={cx('bg-light-shade border-bottom page-inset-x', headerClassname)}>
        <Modal.Title id={labelId} as="div" className="m-auto fs-2 fw-bold">
          {title}
        </Modal.Title>
      </Modal.Header>

      {children}
    </Modal>
  )
}

ModalDialog.Body = function ModalDialogBody({ children, className, ...restProps }) {
  return (
    <Modal.Body className={cx('page-inset-x py-4', className)} {...restProps}>
      {children}
    </Modal.Body>
  )
}

ModalDialog.Footer = function ModalDialogFooter({ children, actions, className, ...restProps }) {
  if (children && actions) {
    throw new Error('props `actions` and `actionMenu` can not be given at the same time!')
  } else if (actions) {
    children = makeActionMenuFrom(actions)
  }
  return (
    <Modal.Footer
      className={cx(
        'bg-light-shade border-top-0',
        'd-flex justify-content-between flex-row-reverse',
        'page-inset-x py-3',
        className
      )}
      {...restProps}
    >
      {children}
    </Modal.Footer>
  )
}

ModalDialog.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  /* is called when the dialog is closed */
  onClose: PropTypes.func,
  shown: PropTypes.bool,
  closeOnBackgroundClick: PropTypes.bool
}

ModalDialog.Body.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

ModalDialog.Footer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  actionMenu: PropTypes.node,
  actions: PropTypes.object
}

function makeActionMenuFrom(actions) {
  const { primary, secondary } = actions
  return (
    <>
      {!!primary && (
        <Button variant="primary" {...primary}>
          {primary.label}
        </Button>
      )}

      {!!secondary && (
        <Button variant="secondary" {...secondary}>
          {secondary.label}
        </Button>
      )}
    </>
  )
}
