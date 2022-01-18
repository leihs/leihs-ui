import PropTypes from 'prop-types'

const dateInfoPropType = PropTypes.shape({
  date: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  endDateRestriction: PropTypes.any,
  startDateRestriction: PropTypes.any
})

const modelDataPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  availability: PropTypes.arrayOf(
    PropTypes.shape({
      inventoryPool: PropTypes.shape({
        id: PropTypes.string.isRequired,
        reservationAdvanceDays: PropTypes.number,
        maximumReservationTime: PropTypes.number
      }).isRequired,
      dates: PropTypes.arrayOf(dateInfoPropType).isRequired
    })
  ).isRequired
})

export default {
  /** availabilty and visits info from API */
  modelData: modelDataPropType.isRequired,

  /** earliest date that can be selected or navigated to, defaults to today */
  minDateTotal: PropTypes.instanceOf(Date),
  /** latest date that can be selected or navigated to, defaults to `minDateTotal` + 20 years */
  maxDateTotal: PropTypes.instanceOf(Date),
  /** Latest date for which data has be loaded. Navigating further will trigger "onShownDateChange" callback */
  maxDateLoaded: PropTypes.instanceOf(Date).isRequired,
  /** callback, when more data needs to be loaded. arguments: `{date}`, defaults to noop */
  onShownDateChange: PropTypes.func,

  /** start date that is initially selected (defaults to today) */
  initialStartDate: PropTypes.instanceOf(Date),
  /** end date that is initially selected (defaults to today) */
  initialEndDate: PropTypes.instanceOf(Date),
  /** callback when the selected date range is changed (defaults to noop) */
  onDatesChange: PropTypes.func,

  /** wanted quantity that is initially selected (defaults to 1) */
  initialQuantity: PropTypes.number,
  /** callback when the wanted quantity is changed */
  onQuantityChange: PropTypes.func,

  /** list of inventory pools for selecting */
  inventoryPools: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      totalBorrowableQuantity: PropTypes.number,
      userHasNoAccess: PropTypes.bool,
      userIsSuspended: PropTypes.bool
    }).isRequired
  ).isRequired,
  /** initially selected pool */
  initialInventoryPoolId: PropTypes.string,
  /** callback, when selected pool changes */
  onInventoryPoolChange: PropTypes.func,

  /** list of user delegations for selecting */

  userDelegations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ),
  /** initially selected user delegation */
  initialUserDelegationId: PropTypes.string,
  /** set if user delegation can be changed or not */
  userDelegationCanBeChanged: PropTypes.bool,
  /** callback, when selected user delegation changes */
  onUserDelegationChange: PropTypes.func,

  /** callback, submits user selection. arguments: `{startDate, endDate, quantity, poolId}` */
  onSubmit: PropTypes.func.isRequired,
  /** function which is called initially and on each form value change with true (valid) or false (invalid)  */
  onValidate: PropTypes.func,

  locale: PropTypes.string.isRequired,
  txt: PropTypes.object.isRequired
}
