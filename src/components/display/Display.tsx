import React from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { Button } from "@mui/material";
import { deleteUser } from "@/redux/user/userSlice";

function Display() {
  const users = useAppSelector((state) => state.user.users);
  const { keyword } = useAppSelector((state) => state.search);
  const regex = new RegExp(keyword, "i");

  const dispatch = useAppDispatch();

  return (
    <div>
      {users.length > 0 ? (
        <ul>
          {users
            .filter((item) => regex.test(item.name))
            .map((item: { id: string; name: string }) => (
              <div key={item.id}>
                <li>{item.name}</li>
                <Button
                  variant="contained"
                  onClick={() => dispatch(deleteUser(item))}
                >
                  delete
                </Button>
              </div>
            ))}
        </ul>
      ) : (
        <p>No Data Exist.</p>
      )}
    </div>
  );
}

export default Display;
