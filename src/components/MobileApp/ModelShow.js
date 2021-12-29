import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import SwipeableViews from 'react-swipeable-views'
import PageLayout from './DesignComponents/PageLayout'
import Stack from './DesignComponents/Stack'
import Section from './DesignComponents/Section'
import SquareImageGrid from './DesignComponents/SquareImageGrid'
import DownloadLink from './DesignComponents/DownloadLink'
import ActionButtonGroup from './DesignComponents/ActionButtonGroup'
import SquareImage from './DesignComponents/SquareImage'
import PropertyTable from './DesignComponents/PropertyTable'

const noop = () => {}

export default function ModelShow({ model, onOrderClick = noop, onClickFavorite = noop, t }) {
  const [imageIndex, setImageIndex] = useState(0)

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
      <PageLayout.Header title={model.name} className="mb-5" />

      {model.images.length > 1 && (
        <div className="mb-4">
          <SwipeableViews
            enableMouseEvents={true}
            resistance={true}
            onChangeIndex={handleImageSwipe}
            index={imageIndex}
          >
            {model.images.map((image, i) => {
              return <SquareImage key={i} imgSrc={image.imageUrl} className="mb-3" />
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
        </div>
      )}
      {model.images.length === 1 && (
        <div className="mb-4">
          <SquareImage imgSrc={model.images[0].imageUrl} />
        </div>
      )}

      <Stack space="5">
        <ActionButtonGroup>
          <button type="button" className="btn btn-primary" onClick={onOrderClick}>
            {t.addItemToCart}
          </button>
          {model.isFavorited ? (
            <button type="button" className="btn btn-secondary" onClick={removeFromFavoritesClick}>
              {t.removeFromFavorites}
            </button>
          ) : (
            <button type="button" className="btn btn-secondary" onClick={addToFavoritesClick}>
              {t.addToFavorites}
            </button>
          )}
        </ActionButtonGroup>

        {model.description && (
          <Section title="Beschreibung" collapsible>
            <div>{model.description}</div>
          </Section>
        )}

        {model.properties.length > 0 && (
          <Section title="Eigenschaften" collapsible>
            <PropertyTable properties={model.properties} />
          </Section>
        )}

        {model.attachments.length > 0 && (
          <Section title="Dokumente" collapsible>
            <Stack space="3">
              {model.attachments.map((attachment, i) => (
                <div key={attachment.id}>
                  <DownloadLink href={attachment.attachmentUrl}>{attachment.filename}</DownloadLink>
                </div>
              ))}
            </Stack>
          </Section>
        )}

        {model.recommends && model.recommends.edges && model.recommends.edges.length > 0 && (
          <Section title="Ergänzende Gegenstände" collapsible>
            {getRecommendsGrid(model.recommends)}
          </Section>
        )}
      </Stack>
    </>
  )
}

function getRecommendsGrid(recommends) {
  const list = recommends.edges.map(({ node }) => ({
    id: node.id,
    href: node.href,
    imgSrc: (node.images.find(() => true) || {}).imageUrl,
    caption: node.name,
    isFavorited: node.isFavorited
  }))
  return <SquareImageGrid list={list} />
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
  orderPanelTmp: PropTypes.node,
  /** Translations */
  t: PropTypes.shape({
    addItemToCart: PropTypes.string.isRequired,
    removeFromFavorites: PropTypes.string.isRequired,
    addToFavorites: PropTypes.string.isRequired
  }).isRequired
}
