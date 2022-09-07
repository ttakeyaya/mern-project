import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import cardService from './cardService';

const initialState = {
  cards: [],
  card: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const createCard = createAsyncThunk(
  'card/create',
  async (cardData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await cardService.createCard(cardData, token);
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

export const getCards = createAsyncThunk('card/getAll', async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await cardService.getCards(token);
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

export const deleteCard = createAsyncThunk(
  'card/delete',
  async (cardId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await cardService.deleteCard(cardId, token);
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

export const updateCard = createAsyncThunk(
  'card/update',
  async (cardData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await cardService.updateCard(cardData, token);
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

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    clear: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      // (async) createCard
      .addCase(createCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCard.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createCard.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // (async) getCards
      .addCase(getCards.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cards = action.payload;
      })
      .addCase(getCards.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clear } = cardSlice.actions;
export default cardSlice.reducer;
