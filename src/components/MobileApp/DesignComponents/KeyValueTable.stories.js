import React from 'react'
import KeyValueTable from './KeyValueTable'

export default {
  title: 'MobileApp/DesignComponents/Key Value Table',
  component: KeyValueTable
}

export const keyValueTable = () => {
  return (
    <div>
      <KeyValueTable
        properties={[
          { key: 'Age', value: '45' },
          { key: 'Weight', value: '80 kg' }
        ]}
      />
    </div>
  )
}
