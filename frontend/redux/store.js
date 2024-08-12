import { configureStore } from '@reduxjs/toolkit'
import userState from './userSlice.js'

export const store = configureStore({
    reducer: {
      user: userState
  },
})