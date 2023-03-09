import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "SliceTest",
  initialState: {
    data: [],
    authData: []
  },
  reducers: {
    authData(state, action) {
      state.authData.push(action.payload);
    }
  }
});

export const { authData } = Slice.actions;
export const SliceTestReducer = Slice.reducer;
