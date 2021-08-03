import React from 'react'
import cx from 'classnames'

export default function CategoryBreadcrumbs({ ancestorCats, getPathForCategory, className, ...restProps }) {
  const breadcrumbs = ancestorCats.map((cat, index, all) => {
    // NOTE: path to cat needs to include all parents of the parent itself (`/categories/myparent/myself`)
    const breadcrumbIds = all.slice(0, index + 1).map(c => c.id)
    return { ...cat, url: getPathForCategory(breadcrumbIds.join('/')) }
  })

  return (
    <ul className={cx(className, 'ui-category-breadcrumbs list-inline fw-normal')} {...restProps}>
      {breadcrumbs.map(({ id, name, url }, index, all) => (
        <li key={id}>
          <a href={url}>{name}</a>
        </li>
      ))}
    </ul>
  )
}
