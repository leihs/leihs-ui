import React from 'react'
import PageLayout from '../../DesignComponents/PageLayout'
import Stack from '../../DesignComponents/Stack'
import Section from '../../DesignComponents/Section'
import SquareImageGrid from '../../DesignComponents/SquareImageGrid'
import ListCard from '../../DesignComponents/ListCard'
import PageLayoutMock from '../../StoryUtils/PageLayoutMock'
import ModelSearchFilter from '../../ModelSearchFilter'
import { modelSearchFilterProps } from '../../StoryUtils/sample-props'

export default {
  title: 'MobileApp/Prototypes/Page Typology/Index',
  parameters: { layout: 'fullscreen' },
  argTypes: {
    onOpenPanel: { action: 'open panel' },
    onSubmit: { action: 'submit' },
    onChangeSearchTerm: { action: 'change search term' },
    onItemClick: { action: 'item click' }
  }
}

const img1 = require('../../../../static/example-images/models/62f4cb3c-999d-53ec-9426-298ebacd208a.jpg')
const img2 = require('../../../../static/example-images/categories/286f85ba-e1a1-5c36-b03b-cf443f81d77d.jpg')

export const index = ({ onOpenPanel, onSubmit, onChangeSearchTerm, onItemClick }) => {
  return (
    <PageLayoutMock>
      <PageLayout.Header preTitle="Context" title="Title">
        <ModelSearchFilter
          currentFilters={[]}
          onOpenPanel={onOpenPanel}
          onSubmit={onSubmit}
          onChangeSearchTerm={onChangeSearchTerm}
          locale="de-CH"
          txt={modelSearchFilterProps.txt}
        />
      </PageLayout.Header>

      <Stack space="5">
        <Section title="Section with image results" collapsible>
          <SquareImageGrid
            list={[
              { id: 1, caption: 'Audio', imgSrc: img1, href: '#' },
              { id: 2, caption: 'Foto', imgSrc: img2, href: '#' }
            ]}
          />
        </Section>
        <Section title="Section with list results" collapsible>
          <ListCard.Stack>
            <ListCard onClick={onItemClick}>
              <ListCard.Title>Audio</ListCard.Title>
              <ListCard.Body>20 articles</ListCard.Body>
            </ListCard>
            <ListCard onClick={onItemClick}>
              <ListCard.Title>Foto</ListCard.Title>
              <ListCard.Body>16 articles</ListCard.Body>
            </ListCard>
          </ListCard.Stack>
        </Section>
      </Stack>
    </PageLayoutMock>
  )
}
