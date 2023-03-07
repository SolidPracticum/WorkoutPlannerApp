import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "SliceTest",
  initialState: {
    data: [],
    gender: []
  },
  reducers: {
    genderDate(state, action) {
      state.gender.push(action.payload);
    }
  }
});

export const { genderDate } = Slice.actions;
export const SliceTestReducer = Slice.reducer;
