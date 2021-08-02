import React from 'react'
import PageLayout from './PageLayout'
import Stack from './Stack'

export default {
  title: 'MobileApp/Design Components/Layout/PageLayoutMetadata',
  component: PageLayout.Metadata
}

export const pageLayoutMetadata = () => {
  return (
    <div>
      <h1>PageLayout.Metadata</h1>
      <p className="text-muted">A unobtrusive element to show metadata in the bottom of a page where needed.</p>
      <Stack space="5">
        <div>
          Page content - Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus debitis voluptatum quod
          pariatur dolorum adipisci itaque tempora consequuntur assumenda odit quas sequi, eos provident sit earum
          molestias quibusdam voluptates numquam.
        </div>
      </Stack>
      <PageLayout.Metadata>ID: 12345</PageLayout.Metadata>
    </div>
  )
}
pageLayoutMetadata.storyName = 'PageLayout.Metadata'

export const restProps = () => {
  return (
    <div>
      <h1>PageLayout.Metadata</h1>
      <p className="text-muted">RestProps</p>
      <PageLayout.Metadata className="border border-primary">Metadata content</PageLayout.Metadata>
    </div>
  )
}
