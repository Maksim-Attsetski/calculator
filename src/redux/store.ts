import {combineReducers, configureStore} from "@reduxjs/toolkit";
import calculatorReducer from './slice/calculatorSlice';

export const rootReducer = combineReducers({
    calculator: calculatorReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})

export type storeType = typeof store
export type dispatchType = storeType['dispatch']
export type rootReducerType = ReturnType<typeof rootReducer>