import BookingList from "../components/bookingList";
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";

import { startBooking, successBooking, failBooking } from "../reducers/booking";
export default function BookingListContainer() {
  const users = useSelector((state) => state.booking.data);
  const dispatch = useDispatch();
  const start = useCallback(() => {
    dispatch(startBooking());
  }, [dispatch]);

  const success = useCallback(
    (data) => {
      dispatch(successBooking(data));
    },
    [dispatch]
  );

  const fail = useCallback(
    (error) => {
      dispatch(failBooking(error));
    },
    [dispatch]
  );
  return (
    <BookingList users={users} start={start} success={success} fail={fail} />
  );
}
