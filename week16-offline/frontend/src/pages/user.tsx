import axios from "axios";
import { useEffect, useState } from "react";

type UserRes = {
  userId: number;
};

export const User = () => {
  const [userData, setUserData] = useState<UserRes | null>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/user`, {
        withCredentials: true,
      })
      .then((res) => {
        setUserData(res.data);
      });
  }, []);

  return (
    <div>
      You're id is {userData?.userId}
      <br />
      <br />
      <button
        onClick={async () => {
            await axios.post(
            "http://localhost:3000/logout",
            {},
            { withCredentials: true }
            );

            setUserData(null);
            alert("you are logged out");
        }}
        >
        Logout
        </button>

    </div>
  );
};

export default User;
