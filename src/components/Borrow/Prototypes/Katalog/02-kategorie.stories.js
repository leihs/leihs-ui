import React from 'react'
import SquareImageGrid from '../../DesignComponents/SquareImageGrid'
import Section from '../../DesignComponents/Section'
import PageLayoutMock from '../../StoryUtils/PageLayoutMock'
import PageLayout from '../../DesignComponents/PageLayout'
import Stack from '../../DesignComponents/Stack'
import ListCard from '../../DesignComponents/ListCard'
import { modelListProps, modelSearchFilterProps, subCategoryListProps } from '../../StoryUtils/sample-props'
import ModelSearchFilter from '../../ModelSearchFilter'

export default {
  title: 'Borrow/Prototypes/Katalog/Kategorie',
  parameters: { layout: 'fullscreen' }
}

export const kategorie = () => {
  return (
    <PageLayoutMock>
      <PageLayout.Header title="Audio">
        <ModelSearchFilter {...modelSearchFilterProps} />
      </PageLayout.Header>
      <Stack space="4">
        <Section title="Unterkategorien" collapsible initialCollapsed>
          <div className="mb-5">
            <ListCard.Stack>
              {subCategoryListProps.list.map(({ id, href, caption }) => (
                <ListCard key={id} href={href} oneLine>
                  <ListCard.Title>{caption}</ListCard.Title>
                </ListCard>
              ))}
            </ListCard.Stack>
          </div>
        </Section>
        <Section title="Gegenstände" collapsible>
          <SquareImageGrid {...modelListProps} />
        </Section>
      </Stack>
    </PageLayoutMock>
  )
}
