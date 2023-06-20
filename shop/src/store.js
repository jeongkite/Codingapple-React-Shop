import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'jeongkite',
    initialState: 'jeong6kite@gmail.com'
})

export default configureStore({
  reducer: { 
    user: user.reducer
  }
}) 