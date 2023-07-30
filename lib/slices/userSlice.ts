import { createSlice } from "@reduxjs/toolkit";
import { UserViewModel } from "../models/User";

export interface UserState {
  userInfo?: UserViewModel;
}

const initialState: UserState = {
  userInfo: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.userInfo = action.payload;
    },
    logout(state) {
      state.userInfo = undefined;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;
