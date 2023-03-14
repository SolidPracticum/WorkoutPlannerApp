<<<<<<< HEAD
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { SliceTestReducer } from './Slice'

const reducers = combineReducers({
	slice: SliceTestReducer,
})

export const store = configureStore({
	reducer: reducers,
})
=======
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { SliceTestReducer } from "./Slice";

const reducers = combineReducers({
  slice: SliceTestReducer
});

export const store = configureStore({
  reducer: reducers
});
>>>>>>> a40f76e2b8057304f07b0db0f7516de5d1ff4507
