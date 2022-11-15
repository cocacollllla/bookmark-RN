import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: [],
  reducers: {
    replaceData: (state, action) => (state = [...action.payload]),
    addBook: (state, action) => (state = [action.payload, ...state]),
    updateBook: (state, action) => {
      const updateBookIndex = state.findIndex(
        (book) => book.docId === action.payload.docId
      );
      const updateBook = state[updateBookIndex]; //수정할 객체
      const updateItem = { ...updateBook, ...action.payload.data };
      state[updateBookIndex] = updateItem;
    },
    deleteBook: (state, action) => {
      const list = state.filter((book) => book.docId !== action.payload);
      state = list;
    },
  },
});

export const bookActions = bookSlice.actions;
export default bookSlice;
