import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface SingeUser {
  id: string;
  name: string;
}

interface UserState {
  users: SingeUser[];
}

const initialState: UserState = {
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<SingeUser>) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action: PayloadAction<SingeUser>) => {
      state.users = state.users.filter((user) => user.id != action.payload.id);
    },
    // // Use the PayloadAction type to declare the contents of `action.payload`
  },
});

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
