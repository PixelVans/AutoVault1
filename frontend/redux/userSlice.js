import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData: null,
    isAuthenticated: false,
    newCar: null,
}
  
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loggedIn: (state, action) => {
            state.isAuthenticated = true;
            state.userData = action.payload;
        },
        loggedOut: (state,) => {
            state.isAuthenticated = false;
            state.userData = null;  
        },
        sellcar: (state,action) => {
            state.isAuthenticated = true;
            state.newCar = action.payload;  
        },
    }
})








export const {loggedIn ,loggedOut,sellcar } = userSlice.actions

export default userSlice.reducer