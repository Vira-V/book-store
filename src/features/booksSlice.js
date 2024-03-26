import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

export const booksFetch = createAsyncThunk("books/booksFetch", async () => {
  const response = await axios.get("http://localhost:5000/books");
  return response?.data;
});

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(booksFetch.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(booksFetch.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload;
      })
      .addCase(booksFetch.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export default booksSlice.reducer;
