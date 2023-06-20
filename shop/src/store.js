import { configureStore, createSlice } from '@reduxjs/toolkit'

import cartData from './cartData'

let user = createSlice({
    name: 'jeongkite',
    initialState: 'jeong6kite@gmail.com',
    reducers: {
        changeName(state) {
            return 'yang ' + state
        }
    }
})
let carts = createSlice({
    name: 'carts',
    initialState: cartData,
    reducers: {
        addStock(state) {
            return state + 1
        },
        subStock(state) {
            return state - 1
        }
    }
});

export let { changeName } = user.actions
export let { addStock, subStock } = carts.actions

export default configureStore({
  reducer: { 
    user: user.reducer,
    carts: carts.reducer
  }
}) 