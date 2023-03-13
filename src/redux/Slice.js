import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "SliceTest",
  initialState: {
    data: [],
    authData: [],
    gender: [],
    register: []
  },
  reducers: {
    authData(state, action) {
      state.authData.push(action.payload);
    },
    registerData(state, action) {
      state.register.push(action.payload);
      console.log(state.register[0]);
    },
    reducers: {
      genderData(state, action) {
        state.gender.push(action.payload);
      }
    }
  }
});

export const { authData, genderData, registerData } = Slice.actions;
export const SliceTestReducer = Slice.reducer;
