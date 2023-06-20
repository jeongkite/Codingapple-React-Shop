import { createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user',
    initialState: {name: 'kite', age: 10},
    reducers: {
        changeName(state) {
            state.name = 'jeongkite'
        },
        changeAge(state, action) {
            state.age += action.payload
        }
    }
})

export default user;