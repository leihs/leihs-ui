import Collapse from 'react-bootstrap/Collapse'

import * as AppLayout from './components/MobileApp/AppLayout'
import Bold from './components/Bold'
import DebugProps from './components/DebugProps'
import Navbar from './components/Navbar'

import HomePage from './pages/HomePage'
import SignInPage from './pages/SignInPage'

import PasswordForgotPage from './pages/PasswordForgotPage'
import PasswordForgotSuccessPage from './pages/PasswordForgotSuccessPage'
import PasswordResetPage from './pages/PasswordResetPage'
import PasswordResetSuccessPage from './pages/PasswordResetSuccessPage'

const Components = {
  Bold,
  DebugProps,
  Navbar,
  DatePicker: require('./components/DatePicker').default,

  AppLayout,
  // "fach komponenten"
  BookingCalendar: require('./components/MobileApp/BookingCalendar').BookingCalendar,
  CategoryBreadcrumbs: require('./components/MobileApp/CategoryBreadcrumbs').default,
  FilterBubblePanelSwitcher: require('./components/MobileApp/TmpFilterBubblePanelSwitcher').default,
  ModelFilterForm: require('./components/MobileApp/ModelFilterForm').default,
  ModelList: require('./components/MobileApp/ModelList').default,
  ModelShow: require('./components/MobileApp/ModelShow').default,

  // "design komponenten"
  Design: {
    ActionButtonGroup: require('./components/MobileApp/DesignComponents/ActionButtonGroup').default,
    Badge: require('./components/MobileApp/DesignComponents/Badge').default,
    Collapse,
    DownloadLink: require('./components/MobileApp/DesignComponents/DownloadLink').default,
    FilterButton: require('./components/MobileApp/DesignComponents/FilterButton').default,
    ListCard: require('./components/MobileApp/DesignComponents/ListCard').default,
    Menu: require('./components/MobileApp/DesignComponents/Menu').default,
    ModalDialog: require('./components/MobileApp/DesignComponents/ModalDialog').default,
    Navbar: require('./components/MobileApp/DesignComponents/Navbar').default,
    PageLayout: require('./components/MobileApp/DesignComponents/PageLayout').default,
    ProgressInfo: require('./components/MobileApp/DesignComponents/ProgressInfo').default,
    PropertyTable: require('./components/MobileApp/DesignComponents/PropertyTable').default,
    Section: require('./components/MobileApp/DesignComponents/Section').default,
    SquareImageGrid: require('./components/MobileApp/DesignComponents/SquareImageGrid').default,
    Stack: require('./components/MobileApp/DesignComponents/Stack').default
  },

  // "app pages"
  UserProfilePage: require('./components/MobileApp/UserProfilePage').default,

  // pages:
  HomePage,
  SignInPage,

  PasswordForgotPage,
  PasswordForgotSuccessPage,
  PasswordResetPage,
  PasswordResetSuccessPage
}

export default Components
