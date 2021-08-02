import React from 'react'
import { action } from '@storybook/addon-actions'
import ListCard from './ListCard'

export default {
  title: 'MobileApp/Design Components/Content/ListCard',
  component: ListCard,
  args: {
    onItemClick: action('on item click')
  }
}

export const listCard = ({ onItemClick }) => {
  return (
    <div>
      <h1>ListCard</h1>
      <p className="text-muted">Presents a list entry, often with a link.</p>
      <p className="text-muted">
        A <code>ListCard.Stack</code> can be used to wrap multiple cards with dividers and space.
      </p>
      <p className="text-muted">The card can be assembled with three sub-components:</p>
      <ul className="text-muted">
        <li>
          <code>ListCard.Title</code>
          <br />A one liner, default font, with a tiny gap to the next element
        </li>
        <li>
          <code>ListCard.Body</code>
          <br />
          Arbitrary content, small font
        </li>
        <li>
          <code>ListCard.Foot</code>
          <br />
          Arbitrary content, with a gap to the previous element
        </li>
      </ul>
      <ListCard.Stack>
        <ListCard onClick={onItemClick}>
          <ListCard.Title>Ibex</ListCard.Title>
          <ListCard.Body>
            The Alpine ibex (Capra ibex), also known as the steinbock, bouquetin, or simply ibex, is a species of wild
            goat that lives in the mountains of the European Alps.
          </ListCard.Body>
          <ListCard.Foot className="very-small">{getFoot('Bovidae')}</ListCard.Foot>
        </ListCard>
        <ListCard onClick={onItemClick} foot={getFoot('Sciuridae')}>
          <ListCard.Title>Marmot</ListCard.Title>
          <ListCard.Body>
            Marmots are relatively large ground squirrels in the genus Marmota, with 15 species living in Asia, Europe,
            and North America.
          </ListCard.Body>
          <ListCard.Foot className="very-small">{getFoot('Sciuridae')}</ListCard.Foot>
        </ListCard>
        <ListCard onClick={onItemClick}>
          <ListCard.Title>Ptarmigan</ListCard.Title>
          <ListCard.Body>
            The rock ptarmigan (Lagopus muta) is a medium-sized game bird in the grouse family
          </ListCard.Body>
          <ListCard.Foot className="very-small">{getFoot('Phasianidae')}</ListCard.Foot>
        </ListCard>
      </ListCard.Stack>
    </div>
  )
}
listCard.storyName = 'ListCard'

export const minimalExample = () => {
  return (
    <div>
      <h1>ListCard</h1>
      <p className="text-muted">Minimal example with unstructured content</p>
      <ListCard.Stack>
        <ListCard>Ibex</ListCard>
        <ListCard>Marmot</ListCard>
        <ListCard>Ptarmigan</ListCard>
      </ListCard.Stack>
    </div>
  )
}

export const edgeCases = () => {
  return (
    <div>
      <h1>ListCard</h1>
      <p className="text-muted">Example with long title (truncated with an ellipsis):</p>
      <ListCard.Stack>
        <ListCard>
          <ListCard.Title>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero minus debitis labore
          </ListCard.Title>
        </ListCard>
      </ListCard.Stack>
      <p className="text-muted">
        Example with a link, but only one line of content. Note that the angle icon position is not affected by the
        content size:
      </p>
      <ListCard.Stack>
        <ListCard onClick={() => {}}>Lorem ipsum</ListCard>
      </ListCard.Stack>
    </div>
  )
}

export const restProps = ({ onItemClick }) => {
  return (
    <div>
      <h1>ListCard</h1>
      <p className="text-muted">Set arbitrary attributes with restProps</p>
      <ListCard className="border border-primary text-primary p-2" onClick={onItemClick}>
        <ListCard.Title>Ibex</ListCard.Title>
        <ListCard.Body>
          The Alpine ibex (Capra ibex), also known as the steinbock, bouquetin, or simply ibex, is a species of wild
          goat that lives in the mountains of the European Alps.
        </ListCard.Body>
        <ListCard.Foot className="very-small">{getFoot('Bovidae')}</ListCard.Foot>
      </ListCard>
    </div>
  )
}

function getFoot(family) {
  return (
    <span>
      <span className="fw-light">Family:</span> {family}
    </span>
  )
}
