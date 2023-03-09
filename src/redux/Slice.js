import { createSlice } from '@reduxjs/toolkit'

const Slice = createSlice({
	name: 'SliceTest',
	initialState: {
		data: [],
		modal: true,
	},
	reducers: {
		toggle(state) {
			state.modal = !state.modal
		},
		addData(state, action) {
			state.data.push(action.payload)
		},
	},
})

export const { addData, toggle } = Slice.actions
export const SliceTestReducer = Slice.reducer
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
