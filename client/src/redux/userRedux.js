import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { registerCall } from "./apiCalls";

const user = JSON.parse(localStorage.getItem("user"));
// export const register = createAsyncThunk(
//   "auth/register",
//   async (user, thunkAPI) => {
//     try {
//       return await registerCall(user);
//     } catch (error) {
//       const message =
//         (error.response && error.data && error.respons.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: user ? user : null,
    isFetching: false,
    error: false,
    message: "",
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.message = action.payload;
    },
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    registerFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      // state.message = action.payload;
    },
    logoutSuccess: (state) => {
      state.currentUser = null;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(register.pending, (state) => {
  //       state.isFetching = true;
  //     })
  //     .addCase(register.fulfilled, (state, action) => {
  //       state.isFetching = false;
  //       state.currentUser = action.payload;
  //     })
  //     .addCase(register.rejected, (state, action) => {
  //       state.isFetching = false;
  //       state.error = true;
  //       state.message = action.payload;
  //       state.currentUser = null;
  //     });
  // },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logoutSuccess,
} = userSlice.actions;
export default userSlice.reducer;
