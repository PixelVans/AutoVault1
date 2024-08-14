import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData: null,
    isAuthenticated: false,
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
        }
    }
})








export const {loggedIn ,loggedOut } = userSlice.actions

export default userSlice.reducer