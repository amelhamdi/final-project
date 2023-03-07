import { configureStore } from '@reduxjs/toolkit'
import inscriptionSlice from './inscriptionSlice'
import serviceSlice from './serviceSlice'

import userSlice from './userSlice/userSlice'

export const store = configureStore({
  reducer: {
    user:userSlice,
    service:serviceSlice,
   inscription:inscriptionSlice
  },
})