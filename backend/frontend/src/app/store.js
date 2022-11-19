import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import updateReducer from "../features/update/updateSlice";
import adminReducer from "../features/admin/adminSlice";

export const store = configureStore({
  reducer: {
    //hook up authReducer
    auth: authReducer,
    updateMyInfo: updateReducer,
    listUser: adminReducer,
  },
});
