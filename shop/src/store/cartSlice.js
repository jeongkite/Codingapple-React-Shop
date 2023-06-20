import { createSlice } from "@reduxjs/toolkit";
import cartData from './../cartData'

let carts = createSlice({
    name: 'carts',
    initialState: cartData,
    reducers: {
        addStock(state, action) {
            state[action.payload].count += 1;
        },
        subStock(state, action) {
            state[action.payload].count -= 1;
        }
    }
});

export default carts;