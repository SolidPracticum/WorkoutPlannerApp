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
