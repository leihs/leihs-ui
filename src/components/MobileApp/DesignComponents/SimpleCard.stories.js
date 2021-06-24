import React from 'react'
import PageLayout from './PageLayout'
import SimpleCard from './SimpleCard'

export default {
  title: 'MobileApp/DesignComponents/Simple Card',
  component: SimpleCard
}

const lorem =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'

export const simpleCard = () => {
  return (
    <PageLayout.DividedStack>
      <SimpleCard>Plain card</SimpleCard>
      <SimpleCard>Plain card multiline - {lorem}</SimpleCard>
      <SimpleCard onClick={() => alert('click')}>Clickable Card</SimpleCard>
      <SimpleCard onClick={() => alert('click')}>
        Clickable Card multiline
        <br />
        {lorem}
      </SimpleCard>
      <SimpleCard foot="With foot">Plain card</SimpleCard>
      <SimpleCard foot="With foot" onClick={() => alert('click')}>
        Clickable Card
      </SimpleCard>
      <SimpleCard foot="With foot" onClick={() => alert('click')}>
        Clickable Card multiline - {lorem}
      </SimpleCard>
    </PageLayout.DividedStack>
  )
}
