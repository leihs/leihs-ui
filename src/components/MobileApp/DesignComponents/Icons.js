import React from 'react'
import { ReactComponent as IconArrowSvg } from '../../../static/borrow-app-icons/Arrow Icon.svg'
import { ReactComponent as IconArrowLeftSvg } from '../../../static/borrow-app-icons/Arrow Left.svg'
import { ReactComponent as IconArrowRightSvg } from '../../../static/borrow-app-icons/Arrow Right.svg'
import { ReactComponent as IconBagSvg } from '../../../static/borrow-app-icons/Bag Icon.svg'
import { ReactComponent as IconCalendarCrossSvg } from '../../../static/borrow-app-icons/Calendar Cross.svg'
import { ReactComponent as IconCalendarSvg } from '../../../static/borrow-app-icons/Calendar Icon.svg'
import { ReactComponent as IconCrossSvg } from '../../../static/borrow-app-icons/Cross Icon.svg'
import { ReactComponent as IconDownloadSvg } from '../../../static/borrow-app-icons/Download Icon.svg'
import { ReactComponent as IconItemArrowSvg } from '../../../static/borrow-app-icons/Item Arrow.svg'
import { ReactComponent as IconMenuCloseSvg } from '../../../static/borrow-app-icons/Menu Close Icon.svg'
import { ReactComponent as IconMenuSvg } from '../../../static/borrow-app-icons/Menu Icon.svg'
import { ReactComponent as IconSectionArrowSvg } from '../../../static/borrow-app-icons/Section Arrow.svg'
import { ReactComponent as IconStarSvg } from '../../../static/borrow-app-icons/Star Icon.svg'
import { ReactComponent as IconFilterSvg } from '../../../static/borrow-app-icons/Sliders Icon.svg'

export default function Icon({ icon, style, ...restProps }) {
  const styleInner = { display: 'inline', ...style }
  const Svg = icon
  return <Svg style={styleInner} {...restProps} />
}

export const iconArrow = props => <IconArrowSvg {...props} />
export const iconArrowLeft = props => <IconArrowLeftSvg {...props} />
export const iconArrowRight = props => <IconArrowRightSvg {...props} />
export const iconBag = props => <IconBagSvg {...props} />
export const iconCalendarCross = props => <IconCalendarCrossSvg {...props} />
export const iconCalendar = props => <IconCalendarSvg {...props} />
export const iconCross = props => <IconCrossSvg {...props} />
export const iconDownload = props => <IconDownloadSvg {...props} />
export const iconItemArrow = props => <IconItemArrowSvg {...props} />
export const iconMenuClose = props => <IconMenuCloseSvg {...props} />
export const iconMenu = props => <IconMenuSvg {...props} />
export const iconSectionArrow = props => <IconSectionArrowSvg {...props} />
export const iconStar = props => <IconStarSvg {...props} />
export const iconFilter = props => <IconFilterSvg height="24px" width="24px" {...props} />

export const allIcons = [
  iconArrow,
  iconArrowLeft,
  iconArrowRight,
  iconBag,
  iconCalendarCross,
  iconCalendar,
  iconCross,
  iconDownload,
  iconItemArrow,
  iconMenuClose,
  iconMenu,
  iconSectionArrow,
  iconStar,
  iconFilter
]
