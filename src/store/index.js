import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./book-slice";

import usersSlice from "./users/users-slice";

const store = configureStore({
  // reducer: {cart: cartSlice.reducer, board: boardSlice.reducer, users: usersSlice.reducer, products: productsSlice.reducer}
  reducer: { users: usersSlice.reducer, book: bookSlice.reducer },
});

export default store;
