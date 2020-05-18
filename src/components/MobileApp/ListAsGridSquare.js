import React from 'react'

const ListAsGridSquare = ({ baseClass, list = [] }) => {
  return (
    <div className={`${baseClass} d-flex flex-wrap`}>
      {list.map(({ id, href, imgSrc, caption, subCaption, isDimmed }) => (
        <div key={id} className="w-50 min-h-16" style={{ opacity: isDimmed ? 0.35 : 1 }}>
          <div
            className={`${baseClass}-item max-w-sm rounded-lg overflow-hidden bg-white px-2 mb-3`}
            style={{ opacity: 1 }}
          >
            <div className="square-container position-relative rounded-lg overflow-hidden border border-gray-200">
              <a href={href}>
                {imgSrc ? (
                  <img
                    src={imgSrc}
                    alt=""
                    className="bg-content position-absolute object-contain object-center img-fluid p-2 h-100 w-100"
                  />
                ) : (
                  <ImgPlaceholder />
                )}
              </a>
            </div>
            <div className="mx-0 mt-1 text-base leading-snug">
              <a className="text-color-content" href="/app/borrow/categories/78920f6d-57c1-5231-b0c4-f58dcddc64cf">
                <span className="d-block text-truncate font-bold">{caption}</span>
                <span className="d-block text-truncate">{subCaption}</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListAsGridSquare

const ImgPlaceholder = () => (
  <div className="ui-img-placeholder d-block position-absolute h-100 w-100 bg-content-muted" />
)
