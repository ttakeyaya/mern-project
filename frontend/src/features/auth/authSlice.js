import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: user ? user : null,
};

// TODO:　register関数とlogin関数に重複があるのでリファクタリングする
export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      // ユーザーを登録する
      return await authService.register(user);
    } catch (error) {
      /**
       * エラーが発生したらエラーメッセージを生成する
       */
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      // この関数によってregister.rejectへのaction payloadが渡される。
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    /**
     * エラーが発生したらエラーメッセージを生成する
     */
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    // この関数によってregister.rejectへのaction payloadが渡される。
    return thunkAPI.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk(
  'auth/logout',
  async (user, thunkAPI) => {
    await authService.logout();
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clear: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      // register
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
        state.user = null;
        state.isError = true;
        state.message = action.payload;
      })
      // login
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
        state.user = null;
        state.isError = true;
        state.message = action.payload;
      })
      // logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { clear } = authSlice.actions;
export default authSlice.reducer;
