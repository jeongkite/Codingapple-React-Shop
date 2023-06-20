import { createSlice } from "@reduxjs/toolkit";
import cartData from './../cartData'

let carts = createSlice({
    name: 'carts',
    initialState: cartData,
    reducers: {
        addStock(state, action) {
            state.find(item => item.id === action.payload).count += 1;
        },
        subStock(state, action) {
            state.find(item => item.id === action.payload).count -= 1;
        },
        addItem(state, action) {
            console.log(action.payload)
            console.log(state[0])
            state.concat(action.payload)
        }
    }
});

export default carts;