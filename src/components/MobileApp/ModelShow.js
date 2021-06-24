import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import SwipeableViews from 'react-swipeable-views'
import PageLayout from './DesignComponents/PageLayout'
import Section from './DesignComponents/Section'
import SquareImageGrid from './DesignComponents/SquareImageGrid'
import DownloadLink from './DesignComponents/DownloadLink'
import ActionButton from './DesignComponents/ActionButton'
import SquareImage from './DesignComponents/SquareImage'

export default function ModelShow({ model, onOrderClick, onClickFavorite, orderPanelTmp }) {
  const [imageIndex, setImageIndex] = useState(0)

  function addToOrderClick() {
    onOrderClick && onOrderClick()
  }

  function addToFavoritesClick() {
    onClickFavorite(true)
  }

  function removeFromFavoritesClick() {
    onClickFavorite(false)
  }

  function handleImageSwipe(index) {
    setImageIndex(index)
  }

  function handleImageBulletClick(index) {
    setImageIndex(index)
  }
  return (
    <>
      <PageLayout.Header title={model.name} />

      {model.images.length > 1 && (
        <Section>
          <SwipeableViews
            enableMouseEvents={true}
            resistance={true}
            onChangeIndex={handleImageSwipe}
            index={imageIndex}
          >
            {model.images.map((image, i) => {
              return <SquareImage key={i} imgSrc={image.imageUrl} />
            })}
          </SwipeableViews>

          <div className="text-center">
            {model.images.map((image, i) => (
              <button
                type="button"
                key={i}
                className={cx('gallery-button', { 'gallery-button--selected': i === imageIndex })}
                onClick={() => handleImageBulletClick(i)}
              ></button>
            ))}
          </div>
        </Section>
      )}

      <Section>
        <ActionButton onClick={addToOrderClick}>Gegenstand hinzufügen</ActionButton>
        {model.isFavorited ? (
          <ActionButton onClick={removeFromFavoritesClick}>Von Favoriten entfernen</ActionButton>
        ) : (
          <ActionButton onClick={addToFavoritesClick}>Zu Favoriten hinzufügen</ActionButton>
        )}
      </Section>

      {model.description && (
        <Section title="Beschreibung" collapsible={true} className="pt-5">
          <div className="pt-2">{model.description}</div>
        </Section>
      )}

      {model.properties.length > 0 && (
        <Section title="Eigenschaften" collapsible={true} className="pt-5">
          <table className="">
            <tbody>
              {model.properties.map(({ id, key, value }) => (
                <tr key={id}>
                  <td className="font-weight-light pr-3 pt-2">{key}</td>
                  <td className="pt-2">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>
      )}
      {model.attachments.length > 0 && (
        <Section title="Dokumente" collapsible={true} className="pt-5">
          {model.attachments.map((attachment, i) => (
            <div key={attachment.id} className="pt-2">
              <DownloadLink href={attachment.attachmentUrl}>{attachment.filename}</DownloadLink>
            </div>
          ))}
        </Section>
      )}

      {model.recommends && model.recommends.edges && (
        <Section title="Ergänzende Gegenstände" collapsible={true} className="pt-5">
          {getRecommendsGrid(model.recommends)}
        </Section>
      )}

      {orderPanelTmp && <div>{orderPanelTmp}</div>}
    </>
  )
}

function getRecommendsGrid(recommends) {
  const list = recommends.edges.map(({ node }) => ({
    id: node.id,
    href: undefined,
    imgSrc: (node.images.find(() => true) || {}).imageUrl,
    caption: node.name,
    isFavorited: node.isFavorited
  }))
  return <SquareImageGrid list={list} className="pt-2" />
}

const modelPropTypes = {
  /** id */
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  manufacturer: PropTypes.string,
  description: PropTypes.string,
  isFavorited: PropTypes.bool.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired
    })
  ),
  attachments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      filename: PropTypes.string.isRequired,
      attachmentUrl: PropTypes.string.isRequired,
      size: PropTypes.number
    })
  ),
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      value: PropTypes.string
    })
  ),
  recommends: PropTypes.shape({
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          manufacturer: PropTypes.string,
          images: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.string.isRequired,
              imageUrl: PropTypes.string.isRequired
            })
          )
        })
      })
    )
  }),
  totalBorrowableQuantities: PropTypes.arrayOf(
    PropTypes.shape({
      inventoryPool: PropTypes.shape({
        id: PropTypes.string.isRequired
      }),
      quantity: PropTypes.number.isRequired
    })
  ),
  availability: PropTypes.arrayOf(
    PropTypes.shape({
      inventoryPool: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      }),
      dates: PropTypes.arrayOf(
        PropTypes.shape({
          date: PropTypes.string.isRequired,
          quantity: PropTypes.number.isRequired,
          startDateRestriction: PropTypes.string,
          endDateRestriction: PropTypes.any
        })
      )
    })
  ),
  fetchedUntilDate: PropTypes.string
}

ModelShow.propTypes = {
  /** detail data of the model (including availability information) */
  model: PropTypes.shape(modelPropTypes),
  /** callback when the favorite button is clicked, arguments: the requested new state (true = is favorite, false = is not a favorite) */
  onClickFavorite: PropTypes.func.isRequired,
  /** callback when the order button is clicked, arguments: none */
  onOrderClick: PropTypes.func.isRequired,
  /** order panel */
  orderPanelTmp: PropTypes.node
}
