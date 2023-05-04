import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useAppDispatch } from "@/redux/hooks";
import { addUser } from "@/redux/user/userSlice";
import { nanoid } from "@reduxjs/toolkit";

function AddName() {
  const [name, setName] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const dispatch = useAppDispatch();

  return (
    <Box>
      <h1>Add Name</h1>
      <Box>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={name}
          onChange={handleChange}
        />
        <Button
          onClick={() => {
            dispatch(addUser({ id: nanoid(), name }));
            setName("");
          }}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
}

export default AddName;
