import { createSlice } from "@reduxjs/toolkit";

// Type for our state
export interface AuthState {
  isAuthenticated: boolean;
}

// Initial state
const initialState: AuthState = {
  isAuthenticated: false,
};

// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to set the authentication status
    setAuthState(state, action) {
      state.isAuthenticated = action.payload;
    },
  },
});

//export the action
export const authSliceActions = authSlice.actions;
export const authReducer = authSlice.reducer;
