import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

//get user from local storage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,

  message: "",
};

//Register
export const register = createAsyncThunk(
  "auth/register",

  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const message =
        (error.response.data.message &&
          error.response.data &&
          error.response) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Login
export const login = createAsyncThunk(
  "auth/login",
  //user data from the form
  async (user, thunkAPI) => {
    try {
      return await authService.login(user);
    } catch (error) {
      const message =
        (error.response.data.message &&
          error.response.data &&
          error.response) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Logout
export const logout = createAsyncThunk(
  "auth/logout",
  async (user, thunkAPI) => {
    await authService.logout();
  }
);

// update my info
// export const updateMyInfo = createAsyncThunk(
//   "auth/updateMyInfo",
//   async (user, getState, thunkAPI) => {
//     try {
//       const token = getState().auth.user.token;
//       const config = {
//         headers: {
//           authorization: `Bearer ${token}`,
//         },
//       };
//       return await authService.updateMyInfo(user, config);
//     } catch (err) {
//       const message =
//         (err.response.data.message && err.response.data && err.response) ||
//         err.message ||
//         err.toString();

//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })
      //login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
    // user profile update
    // .addCase(updateMyInfo.pending, (state, action) => {
    //   state.isLoading = true;
    // })
    // .addCase(updateMyInfo.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.isSuccess = true;
    //   state.user = action.payload;
    // })
    // .addCase(updateMyInfo.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.isError = true;
    // });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
