import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action) {
      return action.payload
    },
  },
});

export const { addUser } = UserSlice.actions;
export default UserSlice.reducer;
