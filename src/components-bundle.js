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
  ModelList: require('./components/MobileApp/ModelList').default,
  ModelShow: require('./components/MobileApp/ModelShow').default,
  ModelFilterForm: require('./components/MobileApp/ModelFilterForm').default,
  BookingCalendar: require('./components/MobileApp/BookingCalendar').BookingCalendar,
  FilterBubblePanelSwitcher: require('./components/MobileApp/TmpFilterBubblePanelSwitcher').default,

  Design: {
    PageLayout: require('./components/MobileApp/DesignComponents/PageLayout').default,
    Section: require('./components/MobileApp/DesignComponents/Section').default,
    FilterButton: require('./components/MobileApp/DesignComponents/FilterButton').default,
    SquareImageGrid: require('./components/MobileApp/DesignComponents/SquareImageGrid').default
  },

  // mobile pages
  CategoryShowPage: require('./components/MobileApp/CategoryShowPage').default,
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
