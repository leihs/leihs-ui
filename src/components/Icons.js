import React from 'react'
import f from 'lodash'
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// pick & choose what we use, name & describe it,
// then export all in one object of components

import {
  faCheck,
  faExchangeAlt,
  faCalendar,
  faCalendarCheck,
  faCalendarAlt,
  faCalendarPlus,
  faTrashAlt,
  faChartPie,
  faPaperclip,
  // faCircle,
  faCheckCircle,
  faCircleNotch,
  faTag,
  faQuestion,
  faShoppingCart,
  faUserCircle,
  faTimes,
  faCaretUp,
  faCaretDown,
  faCaretLeft,
  faCaretRight,
  faSyncAlt,
  faCog,
  faBars,
  faCode,
  faTasks,
  faEnvelope,
  faUsers,
  faSitemap,
  faOutdent,
  faDolly,
  faWrench,
  faCogs,
  faGlobe,
  faPlusCircle,
  faStream,
  faListUl,
  faCube,
  faSearch,
  faExclamationTriangle,
  faTable,
  faFileDownload,
  faDraftingCompass,
  faEdit
} from '@fortawesome/free-solid-svg-icons'
import { faCircle as faCircleEmpty } from '@fortawesome/free-regular-svg-icons'

const ICONS = {
  CaretUp: {
    src: faCaretUp,
    extraProps: { fixedWidth: true }
  },
  CaretDown: {
    src: faCaretDown,
    extraProps: { fixedWidth: true }
  },
  CaretLeft: {
    src: faCaretLeft,
    extraProps: { fixedWidth: true }
  },
  CaretRight: {
    src: faCaretRight,
    extraProps: { fixedWidth: true }
  },
  Checkmark: {
    src: faCheck,
    description: 'Save Buttons and other kinds of confirmations'
  },
  Cross: {
    src: faTimes
  },
  PlusCircle: {
    src: faPlusCircle
  },
  Edit: {
    src: faEdit
  },
  Exchange: {
    src: faExchangeAlt
  },
  RequestingPhase: {
    src: faCalendarPlus,
    extraProps: { transform: 'up-1' }
  },
  InspectionPhase: {
    src: faCalendarCheck,
    extraProps: { transform: 'up-1' }
  },
  BudgetPeriod: {
    src: faCalendar,
    extraProps: { transform: 'up-1' }
  },
  Calendar: {
    src: faCalendarAlt
  },
  Trash: {
    src: faTrashAlt,
    description: 'Deleting things'
  },
  LeihsAdmin: {
    src: faWrench
  },
  LeihsLogo: {
    src: faDolly
  },
  LeihsManage: {
    src: faCogs
  },
  LeihsBorrow: {
    src: faShoppingCart
  },
  LeihsProcurement: {
    src: faChartPie
  },
  LeihsStyleguide: {
    src: faDraftingCompass
  },
  Paperclip: {
    src: faPaperclip
  },
  RadioCheckedOn: {
    src: faCheckCircle
  },
  RadioCheckedOff: {
    src: faCircleEmpty
  },
  Spinner: {
    src: faCircleNotch,
    extraProps: { className: 'fa-spin' }
  },
  PriceTag: {
    src: faTag,
    extraProps: { flip: 'horizontal' }
  },
  QuestionMark: {
    src: faQuestion
  },
  ShoppingCart: {
    src: faShoppingCart
  },
  User: {
    src: faUserCircle
  },
  Reload: {
    src: faSyncAlt
  },
  FileDownload: {
    src: faFileDownload
  },
  Table: {
    src: faTable
  },
  Search: {
    src: faSearch
  },
  Settings: {
    src: faCog
  },
  HamburgerMenu: {
    src: faBars
  },
  Code: {
    src: faCode
  },
  Requests: {
    src: faTasks
  },
  Contact: {
    src: faEnvelope
  },
  Users: {
    src: faUsers
  },
  Categories: {
    src: faSitemap
  },
  Organizations: {
    src: faOutdent
  },
  Language: {
    src: faGlobe
  },
  TreeView: {
    src: faStream
  },
  ListView: {
    src: faListUl
  },
  Templates: {
    src: faCube
  },
  WarningSign: {
    src: faExclamationTriangle
  }
}

const Icons = f.fromPairs(
  f.map(ICONS, ({ src, extraProps = {} }, name) => {
    const iconComponent = ({ spaced, ...givenProps }) => {
      const iconProps = { ...extraProps, ...givenProps }
      if (iconProps.children) {
        throw new Error('Icons cant have `children`!')
      }
      const spacing = spaced === true ? 1 : spaced
      const iconClassName = cx(extraProps.cls, extraProps.className, givenProps.cls, givenProps.className, {
        [`text-${iconProps.color}`]: iconProps.color,
        [`mr-${spacing}`]: spacing
      })
      return (
        <React.Fragment>
          <FontAwesomeIcon {...iconProps} icon={src} className={iconClassName} />
        </React.Fragment>
      )
    }
    iconComponent.displayName = `Icon.${name}`
    return [name, iconComponent]
  })
)

export default Icons
