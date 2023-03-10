import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "SliceTest",
  initialState: {
    data: [],
    authData: [],
    gender: []
  },
  reducers: {
    authData(state, action) {
      state.authData.push(action.payload);
    },
    genderDate(state, action) {
      state.gender.push(action.payload);
    },
    registerData(state, action) {
      state.registerData.push(action.payload);
    }
  }
});

export const { authData, genderDate, registerData } = Slice.actions;
export const SliceTestReducer = Slice.reducer;
