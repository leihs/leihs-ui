import React from 'react'
import PropertyTable from './PropertyTable'

export default {
  title: 'MobileApp/Design Components/Content/PropertyTable',
  component: PropertyTable
}

export const keyValueTable = () => {
  return (
    <div>
      <h1>PropertyTable</h1>
      <p className="text-muted">E.g. for user details or specifications of a model</p>
      <PropertyTable
        properties={[
          { key: 'Age', value: '45' },
          { key: 'Weight', value: '80 kg' }
        ]}
      />
    </div>
  )
}
keyValueTable.storyName = 'PropertyTable'

export const restProps = () => {
  return (
    <div>
      <h1>PropertyTable</h1>
      <p className="text-muted">Set arbitrary attributes with restProps</p>
      <PropertyTable
        className="border border-primary"
        properties={[
          { key: 'Age', value: '45' },
          { key: 'Weight', value: '80 kg' }
        ]}
      />
    </div>
  )
}
