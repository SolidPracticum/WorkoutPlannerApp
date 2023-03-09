import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "SliceTest",
  initialState: {
    data: [],
    modal: true,
    registerData: []
  },
  reducers: {
    toggle(state) {
      state.modal = !state.modal;
    },
    addData(state, action) {
      state.data.push(action.payload);
    },
    registerData(state, action) {
      state.registerData.push(action.payload);
    }
  }
  // reducers: {
  //   registerData(state, action){
  //     state.registerData.push(action.payload);
  //   }
  // }
});

export const { authData, genderDate, toggle, registerData } = Slice.actions;
export const SliceTestReducer = Slice.reducer;
