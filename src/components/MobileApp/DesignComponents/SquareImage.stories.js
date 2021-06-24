import React from 'react'
import SquareImage from './SquareImage'

export default {
  title: 'MobileApp/DesignComponents/Square Image',
  component: SquareImage
}

const imgSrc = require('../../../static/example-images/categories/2b4c8bd3-3d65-5e68-bf7a-3649ec67a1a2.jpg').default

export const plain = () => {
  return <SquareImage imgSrc={imgSrc} />
}

export const withBorderClass = () => {
  return <SquareImage imgSrc={imgSrc} className="border border-gray-200" />
}

export const withPlaceholder = () => {
  return <SquareImage className="border border-gray-200" />
}

export const withLink = () => {
  return <SquareImage imgSrc={imgSrc} className="border border-gray-200" href="" />
}
