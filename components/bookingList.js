import bookings from "../reducers/booking";
import { useEffect } from "react";
import axios from "axios";

export default function BookingList({ users, start, success, fail }) {
  useEffect(() => {
    async function getBooking() {
      try {
        start();
        const res = await axios.get("https://api.github.com/users");
        success(res.data);
      } catch (error) {
        fail(error);
      }
    }
    getBooking();
  }, [start, success, fail]);
  if (users.length === 0) {
    console.log("thisisusers", users);
    return <p> 현재 확인되는 예약이 없습니다. </p>;
  }
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.id}</li>
        ))}
      </ul>

      <input />
      <button>추가하기</button>
    </>
  );
}
