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
    reducers: {
      genderDate(state, action) {
        state.gender.push(action.payload);
      }
    }
  }
});

export const { authData, genderDate } = Slice.actions;
export const SliceTestReducer = Slice.reducer;
