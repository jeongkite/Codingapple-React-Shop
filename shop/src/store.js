import { configureStore } from '@reduxjs/toolkit'

import user from './store/userSlice'
import carts from './store/cartSlice'

export let { changeName, changeAge } = user.actions
export let { addStock, subStock } = carts.actions

export default configureStore({
  reducer: { 
    user: user.reducer,
    carts: carts.reducer
  }
}) 