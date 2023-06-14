import React from 'react'
import { ReactComponent as IconMenuSvg } from '../../../static/borrow-app-icons/Menu Icon.svg'
import { ReactComponent as IconMenuCloseSvg } from '../../../static/borrow-app-icons/Menu Close Icon.svg'
import { ReactComponent as IconBagSvg } from '../../../static/borrow-app-icons/Bag Icon.svg'
import { ReactComponent as IconUser } from '../../../static/borrow-app-icons/user.svg'
import { ReactComponent as IconFilterSvg } from '../../../static/borrow-app-icons/Sliders Icon.svg'

import { ReactComponent as IconArrowSvg } from '../../../static/borrow-app-icons/Arrow Icon.svg'
import { ReactComponent as IconArrowLeftSvg } from '../../../static/borrow-app-icons/Arrow Left.svg'
import { ReactComponent as IconArrowRightSvg } from '../../../static/borrow-app-icons/Arrow Right.svg'
import { ReactComponent as IconItemArrowSvg } from '../../../static/borrow-app-icons/Item Arrow.svg'
import { ReactComponent as IconSectionArrowSvg } from '../../../static/borrow-app-icons/Section Arrow.svg'

import { ReactComponent as IconCalendarSvg } from '../../../static/borrow-app-icons/Calendar Icon.svg'
import { ReactComponent as IconCalendarCrossSvg } from '../../../static/borrow-app-icons/Calendar Cross.svg'

import { ReactComponent as IconCrossSvg } from '../../../static/borrow-app-icons/Cross Icon.svg'
import { ReactComponent as IconCircleCross } from '../../../static/borrow-app-icons/circle-cross.svg'
import { ReactComponent as IconCircleMinus } from '../../../static/borrow-app-icons/circle-minus.svg'
import { ReactComponent as IconCirclePlus } from '../../../static/borrow-app-icons/circle-plus.svg'

import { ReactComponent as IconDownloadSvg } from '../../../static/borrow-app-icons/Download Icon.svg'
import { ReactComponent as IconStarSvg } from '../../../static/borrow-app-icons/Star Icon.svg'
import { ReactComponent as IconTemplateSvg } from '../../../static/borrow-app-icons/Template.svg'

export default function Icon({ icon, style, ...restProps }) {
  const styleInner = { display: 'inline', ...style }
  const Svg = icon
  return <Svg style={styleInner} {...restProps} />
}

export const iconMenu = props => <IconMenuSvg {...props} />
export const iconMenuClose = props => <IconMenuCloseSvg {...props} />
export const iconBag = props => <IconBagSvg {...props} />
export const iconUser = props => <IconUser {...props} />
export const iconFilter = props => <IconFilterSvg height="24px" width="24px" {...props} />

export const iconArrow = props => <IconArrowSvg {...props} />
export const iconArrowLeft = props => <IconArrowLeftSvg {...props} />
export const iconArrowRight = props => <IconArrowRightSvg {...props} />
export const iconItemArrow = props => <IconItemArrowSvg {...props} />
export const iconSectionArrow = props => <IconSectionArrowSvg {...props} />

export const iconCalendar = props => <IconCalendarSvg {...props} />
export const iconCalendarCross = props => <IconCalendarCrossSvg {...props} />

export const iconCross = props => <IconCrossSvg {...props} />
export const iconCircleCross = props => <IconCircleCross {...props} />
export const iconCircleMinus = props => <IconCircleMinus {...props} />
export const iconCirclePlus = props => <IconCirclePlus {...props} />

export const iconDownload = props => <IconDownloadSvg {...props} />
export const iconStar = props => <IconStarSvg {...props} />
export const iconTemplate = props => <IconTemplateSvg {...props} />

export const allIcons = [
  iconMenu,
  iconMenuClose,
  iconBag,
  iconUser,
  iconFilter,
  iconArrow,
  iconArrowLeft,
  iconArrowRight,
  iconItemArrow,
  iconSectionArrow,
  iconCalendar,
  iconCalendarCross,
  iconCross,
  iconCircleCross,
  iconCircleMinus,
  iconCirclePlus,
  iconDownload,
  iconStar,
  iconTemplate
]
