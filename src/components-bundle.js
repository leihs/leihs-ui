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

  // Feature components
  OrderPanel: require('./components/MobileApp/OrderPanel').default,
  CategoryBreadcrumbs: require('./components/MobileApp/CategoryBreadcrumbs').default,
  ModelSearchFilter: require('./components/MobileApp/ModelSearchFilter').default,
  ModelList: require('./components/MobileApp/ModelList').default,
  ModelShow: require('./components/MobileApp/ModelShow').default,

  // Design components
  Design: {
    ActionButtonGroup: require('./components/MobileApp/DesignComponents/ActionButtonGroup').default,
    Badge: require('./components/MobileApp/DesignComponents/Badge').default,
    ConfirmDialog: require('./components/MobileApp/DesignComponents/ConfirmDialog').default,
    DatePicker: require('./components/MobileApp/DesignComponents/DatePicker').default,
    DateRangePicker: require('./components/MobileApp/DesignComponents/DateRangePicker').default,
    DownloadLink: require('./components/MobileApp/DesignComponents/DownloadLink').default,
    ErrorNotification: require('./components/MobileApp/DesignComponents/ErrorNotification').default,
    ErrorView: require('./components/MobileApp/DesignComponents/ErrorView').default,
    FilterButton: require('./components/MobileApp/DesignComponents/FilterButton').default,
    InfoMessage: require('./components/MobileApp/DesignComponents/InfoMessage').default,
    InputWithClearButton: require('./components/MobileApp/DesignComponents/InputWithClearButton').default,
    ListCard: require('./components/MobileApp/DesignComponents/ListCard').default,
    Menu: require('./components/MobileApp/DesignComponents/Menu').default,
    MinusPlusControl: require('./components/MobileApp/DesignComponents/MinusPlusControl').default,
    ModalDialog: require('./components/MobileApp/DesignComponents/ModalDialog').default,
    PageLayout: require('./components/MobileApp/DesignComponents/PageLayout').default,
    ProfileMenuButton: require('./components/MobileApp/DesignComponents/ProfileMenuButton').default,
    ProgressInfo: require('./components/MobileApp/DesignComponents/ProgressInfo').default,
    PropertyTable: require('./components/MobileApp/DesignComponents/PropertyTable').default,
    Section: require('./components/MobileApp/DesignComponents/Section').default,
    Spinner: require('./components/MobileApp/DesignComponents/Spinner').default,
    SquareImage: require('./components/MobileApp/DesignComponents/SquareImage').default,
    SquareImageGrid: require('./components/MobileApp/DesignComponents/SquareImageGrid').default,
    Stack: require('./components/MobileApp/DesignComponents/Stack').default,
    TemplateIcon: require('./components/MobileApp/DesignComponents/TemplateIcon').default,
    Textarea: require('./components/MobileApp/DesignComponents/Textarea').default,
    Topnav: require('./components/MobileApp/DesignComponents/Topnav').default,
    Warning: require('./components/MobileApp/DesignComponents/Warning').default
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
