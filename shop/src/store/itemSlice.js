import { createSlice } from "@reduxjs/toolkit";
import data from './../data.js'

let items = createSlice({
    name: 'items',
    initialState: data,
    reducers: {
        pushNewItem(state, action) {
            return [...state, ...(action.payload)]
        },
    }
});

export default items;