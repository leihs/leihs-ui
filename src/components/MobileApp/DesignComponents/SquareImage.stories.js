import React from 'react'
import SquareImage from './SquareImage'

export default {
  title: 'MobileApp/Design Components/Content/SquareImage',
  component: SquareImage
}

const imgSrc = require('../../../static/example-images/categories/2b4c8bd3-3d65-5e68-bf7a-3649ec67a1a2.jpg').default

export const squareImage = () => {
  return (
    <div>
      <h1>SquareImage</h1>
      <p className="text-muted">Shows an image centered in a full width square box regardless of its size and ratio.</p>
      <SquareImage imgSrc={imgSrc} className="border border-gray-200 mb-3" />
      <p className="text-muted">(Note that the border is set via className for illustrative purposes)</p>
    </div>
  )
}
squareImage.storyName = 'SquareImage'

export const placeholder = () => {
  return (
    <div>
      <h1>SquareImage</h1>
      <p className="text-muted">When no imgSrc prop is provided, a placeholder is rendered</p>
      <SquareImage className="border border-gray-200" />
    </div>
  )
}

export const link = () => {
  return (
    <div>
      <h1>SquareImage</h1>
      <p className="text-muted">The href attribute can be used to link the image</p>
      <SquareImage imgSrc={imgSrc} className="border border-gray-200" href="" />
    </div>
  )
}

export const restProps = () => {
  return (
    <div>
      <h1>SquareImage</h1>
      <p className="text-muted">Set arbitrary attributes with restProps</p>
      <SquareImage imgSrc={imgSrc} className="border border-primary" />
    </div>
  )
}
