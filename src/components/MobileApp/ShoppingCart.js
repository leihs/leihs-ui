import React from 'react'
import PropTypes from 'prop-types'
import f from 'lodash'

import { Let } from '../Util'
import Icon from '../Icons'
// import { ImgPlaceholder } from './ImageThumbnail'

export const ReservationLines = ({ lines }) => (
  <ul className="list-unstyled">
    {f.map(lines, (line, i) => (
      <ReservationLine key={i} {...line} />
    ))}
  </ul>
)

export const ReservationLine = ({ reservation, quantity, isEditing, isInvalid }) => {
  const { model } = reservation

  return (
    <li className="media border-bottom pb-2 mb-2 align-items-center">
      <div className="d-flex">
        <Let src={f.get(model, 'coverImage.image-url')}>
          {({ src }) => (
            <img
              alt={model.name}
              style={{ maxWidth: '4rem', maxHeight: '4rem' }}
              className="img-fluid img-thumbnail mr-3"
              href={'#modelShow'}
              onClick={() => alert('would go to model page')}
              src={src}
            />
          )}
        </Let>
      </div>
      <div className="media-body">
        <div className="container-fluid">
          <div className="row flex-nowrap align-items-end">
            <div className="col">
              <p className="font-semibold mb-0">
                {model.name}
                {/* <small>{model.manufacturer}</small> */}
              </p>
              <p className="small mb-0">{quantity} item(s)</p>
              <p className="small mb-0">{quantity} item(s)</p>
              {/* <pre className="mb-1">{JSON.stringify(reservation, 0, 2)}</pre> */}
            </div>
            <div className="col-2 align-self-center flex-grow-1">
              <div className="btn-group-vertical">
                <button className="btn btn-sm btn-link text-muted text-center" onClick={() => alert('edit!')}>
                  <Icon.Edit fixedWidth />
                </button>
                <button className="btn btn-sm btn-link text-muted text-center" onClick={() => alert('delete!')}>
                  <Icon.Trash fixedWidth />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

const ReservationLinePropType = PropTypes.shape({
  quantity: PropTypes.number.isRequired,
  isEditing: PropTypes.bool,
  isInvalid: PropTypes.bool,
  reservation: PropTypes.shape({
    id: PropTypes.string.isRequired,
    'start-date': PropTypes.string.isRequired,
    'end-date': PropTypes.string.isRequired,
    'inventory-pool': PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired,
    model: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      manufacturer: PropTypes.string,
      coverImage: PropTypes.shape({
        id: PropTypes.string.isRequired,
        'image-url': PropTypes.string.isRequired
      })
    }).isRequired,
    user: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  })
})

ReservationLine.propTypes = ReservationLinePropType.isRequired

ReservationLines.propTypes = {
  lines: PropTypes.arrayOf(ReservationLinePropType).isRequired
}
