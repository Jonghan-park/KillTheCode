import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    //hook up authReducer
    auth: authReducer,
  },
});
