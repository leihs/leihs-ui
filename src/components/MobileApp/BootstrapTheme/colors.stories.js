import React from 'react'
import Section from '../DesignComponents/Section'
import cx from 'classnames'

export default {
  title: 'MobileApp/BootstrapTheme/Colors'
}

export const designColors = () => {
  return (
    <div>
      <h1>Design colors</h1>
      <div className="mb-1 p-2 doc-design-color-blue text-light">$blue</div>
      <div className="mb-1 p-2 doc-design-color-red text-light">$red</div>
      <div className="mb-1 p-2 doc-design-color-light-shade">$light-shade</div>
      <div className="mb-1 p-2 doc-design-color-light-gray">$light-gray</div>
      <div className="mb-1 p-2 doc-design-color-gray">$gray</div>
    </div>
  )
}

export const grayScale = () => {
  return (
    <div>
      <h1>Gray scale</h1>
      <Section title="Design grays" className="mb-4">
        <div className="my-1 p-2 doc-design-color-light-shade">$light-shade</div>
        <div className="my-1 p-2 doc-design-color-light-gray">$light-gray</div>
        <div className="my-1 p-2 doc-design-color-gray">$gray</div>
      </Section>
      <Section title="Basic gray scale" className="mb-4">
        <div className="text-muted">
          We modify Bootstraps‘s slightly blueish grays to neutral ones. Not to be used directly!
        </div>
        {Array.from(Array(9).keys())
          .map(x => (x + 1) * 100)
          .map(x => {
            return (
              <div key={x} className={cx('my-1 p-2', 'doc-bg-gray-' + x, { 'text-light': x > 500 })}>
                $gray-{x}
              </div>
            )
          })}
      </Section>
    </div>
  )
}

export const bgClasses = () => {
  return (
    <div>
      <h1>.bg-*</h1>
      <Section title="Custom design colors" className="mb-4">
        <div className="my-1 p-2 bg-light-shade">.bg-light-shade</div>
        <div className="my-1 p-2 bg-light-gray">.bg-light-gray</div>
      </Section>
      <Section title="Bootstrap theme colors" className="mb-4">
        <div className="my-1 p-2 bg-primary text-light">.bg-primary</div>
        <div className="my-1 p-2 bg-secondary">.bg-secondary</div>
        <div className="my-1 p-2 bg-success text-light">.bg-success</div>
        <div className="my-1 p-2 bg-info">.bg-info</div>
        <div className="my-1 p-2 bg-warning text-light">.bg-warning</div>
        <div className="my-1 p-2 bg-danger">.bg-danger</div>
        <div className="my-1 p-2 bg-light">.bg-light</div>
        <div className="my-1 p-2 bg-dark text-light">.bg-dark</div>
      </Section>
      <Section title='Bootstrap bg "non-colors"' className="mb-4">
        <div className="my-1 p-2 bg-body border">.bg-body</div>
        <div className="my-1 p-2 bg-white border">.bg-white</div>
        <div className="my-1 p-2 bg-transparent border">.bg-transparent</div>
      </Section>
    </div>
  )
}
