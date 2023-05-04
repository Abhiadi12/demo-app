import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  keyword: string;
}

const initialState: SearchState = {
  keyword: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeKeyWord: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload;
    },
    resetToInitial: (state) => {
      state = initialState;
    },
  },
});

export const { changeKeyWord, resetToInitial } = searchSlice.actions;
export default searchSlice.reducer;
