import { configureStore, createSlice } from '@reduxjs/toolkit'

import cartData from './cartData'

let user = createSlice({
    name: 'jeongkite',
    initialState: 'jeong6kite@gmail.com'
})
let carts = createSlice({
    name: 'carts',
    initialState: cartData
});

export default configureStore({
  reducer: { 
    user: user.reducer,
    cartData: carts.reducer
  }
}) 