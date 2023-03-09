import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "SliceTest",
  initialState: {
    data: [],
    gender: []
  },
  name2: "SliceTest2",
  defaultState: {
    data: [],
    option: []
  },
  reducers: {
    genderDate(state, action) {
      state.gender.push(action.payload);
    },
    optionDate(state, action) {
      state.option.push(action.payload);
    }
  }
});

export const { genderDate } = Slice.actions;
export const SliceTestReducer = Slice.reducer;
export const { optionDate } = Slice.actions;
export const SliceTest2Reducer = Slice.reducer;
