import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import adminService from "./adminService";

// const users = JSON.parse(localStorage.getItem("user"));

const initialState = {
  users: [],
  isError: false,
  isLoading: false,
  message: "",
};

//get all users data
export const listUser = createAsyncThunk("admin/listUser", async (thunkAPI) => {
  try {
    // const token = thunkAPI.getState().auth.user.token;

    return await adminService.listUser();
  } catch (err) {
    const message =
      (err.response.data.message && err.response.data && err.response) ||
      err.message ||
      err.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(listUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(listUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(listUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const { reset } = adminSlice.actions;
export default adminSlice.reducer;
