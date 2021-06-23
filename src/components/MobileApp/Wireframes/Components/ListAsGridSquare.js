import React from 'react'

import { ImageThumbnail } from './ImageThumbnail'

const ListAsGridSquare = ({ list = [] }) => {
  return (
    <div className="ui-list-as-grid-square row no-gutters d-flex flex-wrap mx-n2">
      {list.map(({ id, href, imgSrc, caption, subCaption, isDimmed }) => (
        <div key={id} className="col-6 col-sm-3 min-h-16" style={{ opacity: isDimmed ? 0.35 : 1 }}>
          <div
            className="ui-list-as-grid-square-item max-w-sm rounded-lg overflow-hidden bg-white mx-2 mb-3"
            style={{ opacity: 1 }}
          >
            <ImageThumbnail href={href} imgSrc={imgSrc} />
            <div className="mx-0 mt-1 text-base leading-snug">
              <a className="text-color-content" href={href}>
                <span className="d-block font-bold">{caption}</span>
                <span className="d-block">{subCaption}</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListAsGridSquare
