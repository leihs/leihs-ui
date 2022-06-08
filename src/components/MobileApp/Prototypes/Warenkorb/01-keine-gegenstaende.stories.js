import React from 'react'

import PageLayout from '../../DesignComponents/PageLayout'
import Stack from '../../DesignComponents/Stack'
import PageLayoutMock from '../../StoryUtils/PageLayoutMock'

export default {
  title: 'MobileApp/Prototypes/Warenkorb/Keine Gegenstände',
  parameters: { layout: 'fullscreen' }
}

export const keineGegenstaende = () => {
  return (
    <PageLayoutMock>
      <PageLayout.Header title="Warenkorb"></PageLayout.Header>
      <Stack space="4" className="text-center">
        Noch keine Gegenstände hinzugefügt
        <a href="/app/borrow/" className="text-decoration-underline">
          Hier geht&apos;s zum Katalog
        </a>
      </Stack>
    </PageLayoutMock>
  )
}

keineGegenstaende.storyName = 'Keine Gegenstände'
