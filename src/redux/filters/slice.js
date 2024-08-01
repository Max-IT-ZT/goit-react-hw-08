import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    value: "",
  },
  reducers: {
    changeFilterByValue(state, action) {
      state.value = action.payload;
    },
  },
});

export const { changeFilterByValue } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
