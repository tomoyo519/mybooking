// const READ_BOOKING = 'READ_BOOKING'
// const ADD_BOOKING = 'ADD_BOOKING'
// const DELETE_BOOKING = 'DELETE_BOOKING'

const START_BOOKING = "START_BOOKING";
const SUCCESS_BOOKING = "SUCCESS_BOOKING";
const FAIL_BOOKING = "FAIL_BOOKING";

export const startBooking = () => ({ type: START_BOOKING });
export const successBooking = (data) => ({ type: SUCCESS_BOOKING, data });
export const failBooking = (error) => ({ type: FAIL_BOOKING, error });

// export const addBooking = () => ({ type: ADD_BOOKING })
// export const deleteBooking = () =>  ({ type: DELETE_BOOKING })

const initialState = { loading: false, data: [], error: null };

export default function Booking(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case START_BOOKING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SUCCESS_BOOKING:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case FAIL_BOOKING:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
