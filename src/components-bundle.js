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
  OrderPanel: require('./components/Borrow/OrderPanel').default,
  CategoryBreadcrumbs: require('./components/Borrow/CategoryBreadcrumbs').default,
  ModelSearchFilter: require('./components/Borrow/ModelSearchFilter').default,
  ModelList: require('./components/Borrow/ModelList').default,
  ModelShow: require('./components/Borrow/ModelShow').default,

  // Design components
  Design: {
    ActionButtonGroup: require('./components/Borrow/DesignComponents/ActionButtonGroup').default,
    Badge: require('./components/Borrow/DesignComponents/Badge').default,
    ConfirmDialog: require('./components/Borrow/DesignComponents/ConfirmDialog').default,
    DatePicker: require('./components/Borrow/DesignComponents/DatePicker').default,
    DateRangePicker: require('./components/Borrow/DesignComponents/DateRangePicker').default,
    DownloadLink: require('./components/Borrow/DesignComponents/DownloadLink').default,
    ErrorNotification: require('./components/Borrow/DesignComponents/ErrorNotification').default,
    ErrorView: require('./components/Borrow/DesignComponents/ErrorView').default,
    FilterButton: require('./components/Borrow/DesignComponents/FilterButton').default,
    InfoMessage: require('./components/Borrow/DesignComponents/InfoMessage').default,
    InputWithClearButton: require('./components/Borrow/DesignComponents/InputWithClearButton').default,
    ListCard: require('./components/Borrow/DesignComponents/ListCard').default,
    ListMenu: require('./components/Borrow/DesignComponents/ListMenu').default,
    Menu: require('./components/Borrow/DesignComponents/Menu').default,
    MinusPlusControl: require('./components/Borrow/DesignComponents/MinusPlusControl').default,
    ModalDialog: require('./components/Borrow/DesignComponents/ModalDialog').default,
    PageLayout: require('./components/Borrow/DesignComponents/PageLayout').default,
    ProfileMenuButton: require('./components/Borrow/DesignComponents/ProfileMenuButton').default,
    ProgressInfo: require('./components/Borrow/DesignComponents/ProgressInfo').default,
    PropertyTable: require('./components/Borrow/DesignComponents/PropertyTable').default,
    Section: require('./components/Borrow/DesignComponents/Section').default,
    Spinner: require('./components/Borrow/DesignComponents/Spinner').default,
    SquareImage: require('./components/Borrow/DesignComponents/SquareImage').default,
    SquareImageGrid: require('./components/Borrow/DesignComponents/SquareImageGrid').default,
    Stack: require('./components/Borrow/DesignComponents/Stack').default,
    TemplateIcon: require('./components/Borrow/DesignComponents/TemplateIcon').default,
    Textarea: require('./components/Borrow/DesignComponents/Textarea').default,
    Topnav: require('./components/Borrow/DesignComponents/Topnav').default,
    Warning: require('./components/Borrow/DesignComponents/Warning').default
  },

  // "app pages"
  UserProfilePage: require('./components/Borrow/UserProfilePage').default,

  // pages:
  HomePage,
  SignInPage,

  PasswordForgotPage,
  PasswordForgotSuccessPage,
  PasswordResetPage,
  PasswordResetSuccessPage
}

export default Components
