import React from 'react'

import PageLayout from '../../DesignComponents/PageLayout'
import Stack from '../../DesignComponents/Stack'
import PageLayoutMock from '../../StoryUtils/PageLayoutMock'

export default {
  title: 'Borrow/Prototypes/Warenkorb/Keine Gegenstände',
  parameters: { layout: 'fullscreen' }
}

export const keineGegenstaende = () => {
  return (
    <PageLayoutMock>
      <PageLayout.Header title="Warenkorb"></PageLayout.Header>
      <Stack space="4" className="text-center decorate-links">
        Noch keine Gegenstände hinzugefügt
        <a href="/borrow/">Hier geht&apos;s zum Katalog</a>
      </Stack>
    </PageLayoutMock>
  )
}

keineGegenstaende.storyName = 'Keine Gegenstände'
