import { createSlice } from "@reduxjs/toolkit";

type initialState = {
  isAuthenticated: boolean;
  user: string | null;
};

const initialState: initialState = sessionStorage.getItem("authState")
  ? JSON.parse(sessionStorage.getItem("authState")!)
  : {
      isAuthenticated: false,
      user: null,
    };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
