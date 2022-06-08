import React from 'react'
import { linkTo } from '@storybook/addon-links'
import ModelSearchFilter from './ModelSearchFilter'

export default {
  title: 'MobileApp/Feature Components/ModelSearchFilter',
  component: ModelSearchFilter
}

export const modelSearchFilter = () => (
  <div>
    <p className="text-muted">Siehe</p>
    <button className="btn btn-light btn-sm" onClick={linkTo('MobileApp/Prototypes/Katalog/Suchresultate')}>
      Prototypes &gt; Katalog &gt; Suchresultate
    </button>
  </div>
)

modelSearchFilter.storyName = 'ModelSearchFilter'
