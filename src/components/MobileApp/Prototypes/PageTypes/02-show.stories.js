import React from 'react'
import PageLayout from '../../DesignComponents/PageLayout'
import Stack from '../../DesignComponents/Stack'
import Section from '../../DesignComponents/Section'
import ActionButtonGroup from '../../DesignComponents/ActionButtonGroup'
import PropertyTable from '../../DesignComponents/PropertyTable'
import ListCard from '../../DesignComponents/ListCard'
import PageLayoutMock from '../../StoryUtils/PageLayoutMock'
import Badge from '../../DesignComponents/Badge'

export default {
  title: 'MobileApp/Prototypes/Page Typology/Show',
  parameters: { layout: 'fullscreen' },

  argTypes: {
    onItemClick: { action: 'item click' }
  }
}

const lorem =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore'

export const show = ({ onItemClick }) => {
  return (
    <PageLayoutMock>
      <PageLayout.Header title="Show something"></PageLayout.Header>

      <Stack space="5">
        <Section title="Some info" collapsible>
          <Stack space="3">
            {lorem}
            <ActionButtonGroup>
              <button type="button" className="btn btn-secondary">
                Some action
              </button>
            </ActionButtonGroup>
          </Stack>
        </Section>

        <Section title="Some properties" collapsible>
          <PropertyTable
            properties={[
              { key: 'Property 1', value: 'Value 1' },
              { key: 'Property 2', value: 'Value 1' }
            ]}
          />
        </Section>

        <Section title="Nested list" collapsible>
          <ListCard.Stack>
            <ListCard onClick={onItemClick}>
              <ListCard.Title>Item 1</ListCard.Title>
              <ListCard.Body>Where when and what</ListCard.Body>
              <ListCard.Foot>
                <Badge colorClassName="bg-danger">Status bad</Badge>
              </ListCard.Foot>
            </ListCard>
            <ListCard onClick={onItemClick}>
              <ListCard.Title>Item 2</ListCard.Title>
              <ListCard.Body>Where when and what</ListCard.Body>
              <ListCard.Foot>
                <Badge>Status normal</Badge>
              </ListCard.Foot>
            </ListCard>
          </ListCard.Stack>
        </Section>

        <ActionButtonGroup>
          <button type="button" className="btn btn-secondary">
            An action
          </button>
          <button type="button" className="btn btn-secondary" disabled>
            Another action
          </button>
        </ActionButtonGroup>
      </Stack>

      <PageLayout.Metadata>ID: 12345</PageLayout.Metadata>
    </PageLayoutMock>
  )
}
