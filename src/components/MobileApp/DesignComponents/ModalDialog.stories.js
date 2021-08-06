import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'

import FilterButton from './FilterButton'
import PageLayoutMock from '../StoryUtils/PageLayoutMock'
import PageLayout from './PageLayout'
import ModalDialog from './ModalDialog'
import Button from 'react-bootstrap/Button'

export default {
  title: 'MobileApp/DesignComponents/ModalDialog',
  parameters: { layout: 'fullscreen', storyshots: { disable: true } }
}

export const demo = () => {
  const [modelOpen, setModalOpen] = useState(false)
  const handleClose = () => setModalOpen(false)
  return (
    <PageLayoutMock>
      <PageLayout.Header title="Modal Dialog Demo">
        <FilterButton onClick={() => setModalOpen(!modelOpen)}>Click to open Modal</FilterButton>
        <ModalDialog
          shown={modelOpen}
          onClose={handleClose}
          title="Modal Dialog Title"
          actions={{
            primary: { label: 'OK', onClick: handleClose },
            secondary: { label: 'Abort', onClick: handleClose }
          }}
        >
          {new Array(3).fill().map((_, i) => (
            <p key={i}>Modal body text goes here.</p>
          ))}
        </ModalDialog>
      </PageLayout.Header>
    </PageLayoutMock>
  )
}

export const using_action_menu_config = () => {
  return (
    <PageLayoutMock>
      <PageLayout.Header title="Katalog">
        <ModalDialog
          shown={true}
          title="Modal Dialog with Custom Action Menu"
          onClose={action('closing!')}
          actionMenu={
            <>
              <Button variant="success" onClick={action('click one!')}>
                One
              </Button>
              <Button variant="warning" onClick={action('click two!')}>
                Two
              </Button>
              <Button variant="danger" onClick={action('click three!')}>
                Three
              </Button>
            </>
          }
        >
          {new Array(3).fill().map((_, i) => (
            <p key={i}>Modal body text goes here.</p>
          ))}
        </ModalDialog>
      </PageLayout.Header>
    </PageLayoutMock>
  )
}

export const with_long_content = () => {
  return (
    <PageLayoutMock>
      <PageLayout.Header title="Katalog">
        <ModalDialog
          shown={true}
          title="This has lots of content in the body so that it will scroll, even the title is very long as to get at least a linebreak in there, man I could tell a whole story in this header wow much text"
          actions={{
            primary: { label: 'OK', onClick: action('primary click') },
            secondary: { label: 'Abbrechen', onClick: action('secondary click') }
          }}
        >
          {new Array(24).fill().map((_, i) => (
            <p key={i}>Modal body text goes here.</p>
          ))}
        </ModalDialog>
      </PageLayout.Header>
    </PageLayoutMock>
  )
}
