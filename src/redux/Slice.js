import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "SliceTest",
  initialState: {
    data: [],
    authData: [],
    gender: [],
    option: []
  },
  reducers: {
    genderData(state, action) {
      state.gender.push(action.payload);
    },
    optionData(state, action) {
      state.option.push(action.payload);
    },
    authData(state, action) {
      state.authData.push(action.payload);
    }
  }
});

export const { authData, genderData, optionData } = Slice.actions;
export const SliceTestReducer = Slice.reducer;
