import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import userReducer from '../Redux/userSlice'

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        users: userReducer
    },
})