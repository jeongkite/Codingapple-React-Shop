import { createSlice } from "@reduxjs/toolkit";
import cartData from './../cartData'

let carts = createSlice({
    name: 'carts',
    initialState: cartData,
    reducers: {
        addStock(state, action) {
            state.find(item => item.id === action.payload).count++;
        },
        subStock(state, action) {
            state.find(item => item.id === action.payload).count--;
        },
        addItem(state, action) {
            state.push(action.payload)
        }
    }
});

export default carts;