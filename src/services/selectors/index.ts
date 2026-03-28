import { RootState } from '../store';

export const selectIngredients = (state: RootState) => state.ingredients.items;
export const selectIngredientsLoading = (state: RootState) =>
  state.ingredients.isLoading;
export const selectIngredientsError = (state: RootState) =>
  state.ingredients.error;

export const selectBurgerConstructor = (state: RootState) =>
  state.burgerConstructor;

export const selectOrderRequest = (state: RootState) =>
  state.order.orderRequest;
export const selectOrder = (state: RootState) => state.order.order;

export const selectUser = (state: RootState) => state.user.user;
export const selectUserName = (state: RootState) => state.user.user?.name;
export const selectUserError = (state: RootState) => state.user.error;
export const selectIsAuthChecked = (state: RootState) =>
  state.user.isAuthChecked;

export const selectFeedOrders = (state: RootState) => state.feed.orders;
export const selectFeedTotal = (state: RootState) => state.feed.total;
export const selectFeedTotalToday = (state: RootState) => state.feed.totalToday;

export const selectUserOrders = (state: RootState) => state.userOrders.orders;
