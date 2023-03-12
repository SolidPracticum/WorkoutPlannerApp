import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "SliceTest",
  initialState: {
    data: [],
    authData: [],
    gender: [],
    option: [],
    register: []
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
    },
    registerData(state, action) {
      state.register.push(action.payload);
      console.log(state.register[0]);
    },
    reducers: {
      genderDate(state, action) {
        state.gender.push(action.payload);
      }
    }
  }
});

export const { authData, genderData, registerData, optionData } = Slice.actions;
export const SliceTestReducer = Slice.reducer;
