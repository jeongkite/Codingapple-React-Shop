import { configureStore } from '@reduxjs/toolkit'

import user from './store/userSlice'
import carts from './store/cartSlice'
import items from './store/itemSlice'

export let { changeName, changeAge } = user.actions
export let { addStock, subStock, addItem } = carts.actions
export let { pushNewItem, testItemAction } = items.actions

export default configureStore({
  reducer: { 
    user: user.reducer,
    carts: carts.reducer,
    items: items.reducer,
  }
}) 