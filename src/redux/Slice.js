import { createSlice } from '@reduxjs/toolkit'

const Slice = createSlice({
<<<<<<< HEAD
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
=======
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
      genderDate(state, action) {
        state.gender.push(action.payload);
      }
    }
  }
});

export const { authData, genderDate, registerData } = Slice.actions;
export const SliceTestReducer = Slice.reducer;
>>>>>>> a40f76e2b8057304f07b0db0f7516de5d1ff4507
