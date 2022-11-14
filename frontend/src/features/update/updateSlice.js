import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import updateService from "./updateService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//get user detail
//need id for params
export const getUser = createAsyncThunk(
  "updateMyinfo/getUser",
  async (user, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;

      return await updateService.getUser(user, token);
    } catch (err) {
      const message =
        (err.response.data.message && err.response.data && err.response) ||
        err.message ||
        err.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//update my profile

export const updateSlice = createSlice({
  name: "updateMyinfo",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
    //   .addCase(updateMyInfo.pending, (state, action) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(updateMyInfo.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.isSuccess = true;
    //     state.user = action.payload;
    //   })
    //   .addCase(updateMyInfo.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.isError = true;
    //   });
  },
});

export const { reset } = updateSlice.actions;
export default updateSlice.reducer;
