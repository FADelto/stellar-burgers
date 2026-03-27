import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { orderBurgerApi, getOrderByNumberApi } from '@api';
import { TOrder } from '@utils-types';

export const createOrder = createAsyncThunk('order/create', orderBurgerApi);

export const getOrderByNumber = createAsyncThunk(
  'order/getByNumber',
  getOrderByNumberApi
);

type TOrderState = {
  order: TOrder | null;
  orderRequest: boolean;
  error: string | null;
};

const initialState: TOrderState = {
  order: null,
  orderRequest: false,
  error: null
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    resetOrder: (state) => {
      state.order = null;
      state.orderRequest = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.orderRequest = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.orderRequest = false;
        state.order = {
          ...action.payload.order,
          ingredients: []
        };
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.orderRequest = false;
        state.error = action.error.message || 'Ошибка создания заказа';
      })
      .addCase(getOrderByNumber.fulfilled, (state, action) => {
        state.order = action.payload.orders[0];
      });
  }
});

export const { resetOrder } = orderSlice.actions;

export default orderSlice.reducer;
