import React from 'react'
import cx from 'classnames'
import DebugProps from '../DebugProps'

// import CategoryList from './CategoryList'

const BASE_CLASS = 'ui-category-page'

const CategoryShowPage = allProps => {
  const { ancestorCats, childCats, className, children, tmpBreadcrumbs, getPathForCategory, ...restProps } = allProps

  const breadcrumbs = ancestorCats.map((cat, index, all) => {
    // NOTE: path to cat needs to include all parents of the parent itself (`/categories/myparent/myself`)
    const breadcrumbIds = all.slice(0, index + 1).map(c => c.id)
    return { ...cat, url: getPathForCategory(breadcrumbIds.join('/')) }
  })

  return (
    <div {...restProps} className={cx(className, BASE_CLASS)}>
      <h3 className="code">ancestor categories / breadcrumbs:</h3>
      <ul className="ui-category-breadcrumbs">
        {breadcrumbs.map(({ id, name, url }, index, all) => (
          <li key={id}>
            <a href={url}>{name}</a>
          </li>
        ))}
      </ul>

      <hr />

      <h3 className="code">children categories:</h3>
      {!childCats.length ? (
        '(none)'
      ) : (
        <ul className="ui-category-children">
          {childCats.map(({ id, name, url }) => (
            <li key={id}>
              <a href={url}>{name}</a>
            </li>
          ))}
        </ul>
      )}

      <hr />

      {/* TMP: search panel and model list as children */}
      <h3>tmp search panel and model</h3>
      {children}

      <hr />
      <hr />
      <hr />
      <DebugProps {...{ ...allProps }} />
    </div>
  )
}

export default CategoryShowPage
