import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

// TODO: support close button in header? its recommended.

export default function ModalDialog({
  id,
  className,
  title,
  children,
  onClose,
  actionMenu,
  actions,
  shown = false,
  closeOnBackgroundClick = false,
  ...restProps
}) {
  if (actionMenu && actions) {
    throw new Error('props `action` and `actionMenu` can not be given at the same time!')
  } else if (actions) {
    actionMenu = makeActionMenuFrom(actions)
  }

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
      centered
      scrollable
      aria-labelledby={labelId}
      {...restProps}
    >
      <Modal.Header closeButton={false} className="bg-light-shade border-bottom">
        <Modal.Title id={labelId} as="div" className="m-auto fs-2 fw-bold">
          {title}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>{children}</Modal.Body>

      <Modal.Footer className={cx('bg-light-shade border-top-0', 'd-flex justify-content-between')}>
        {actionMenu}
      </Modal.Footer>
    </Modal>
  )
}

ModalDialog.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  /* is called when the dialog is closed */
  onClose: PropTypes.func,
  actionMenu: PropTypes.node,
  actions: PropTypes.object,
  shown: PropTypes.bool,
  closeOnBackgroundClick: PropTypes.bool
}

function makeActionMenuFrom(actions) {
  const { primary, secondary } = actions
  return (
    <>
      <Button variant="secondary" {...secondary}>
        {secondary.label}
      </Button>

      <Button variant="primary" {...primary}>
        {primary.label}
      </Button>
    </>
  )
}
