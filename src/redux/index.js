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
>>>>>>> 8d7356e53a762cd89b194294d512d6d6a66f1571
