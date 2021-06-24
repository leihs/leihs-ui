import React, { useState } from 'react'
import MinusPlusControl from './MinusPlusControl'

export default {
  title: 'MobileApp/DesignComponents/Minus Plus Control',
  component: MinusPlusControl
}

export const minusPlusControl = () => {
  const [quantity, setQuantity] = useState()

  return (
    <div>
      <MinusPlusControl name="quantity" number={quantity} onChange={setQuantity} />
      <div className="p-2">Quantity = {quantity}</div>
    </div>
  )
}
