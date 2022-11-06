import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  isAdmin: false,
  message: "",
};

//Register
export const registerUser = createAsyncThunk(
  "auth/register",
  //user data from the form
  async (user, thunkAPI) => {
    console.log(user);
  }
);

//Login
export const loginUser = createAsyncThunk(
  "auth/login",
  //user data from the form
  async (user, thunkAPI) => {
    console.log(user);
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export default authSlice.reducer;
