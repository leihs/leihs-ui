import React, { useState } from 'react'

import FilterButton from './DesignComponents/FilterButton'

export default function FilterBubblePanelSwitcher({ labelText, children, ...restProps }) {
  const [panelIsOpen, setPanelIsOpen] = useState(false)
  return (
    <div {...restProps}>
      {!panelIsOpen ? <FilterButton onClick={() => setPanelIsOpen(true)}>{labelText}</FilterButton> : children}
    </div>
  )
}
