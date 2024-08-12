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
            state.userInfo = action.payload;
        },
    }
})








export const {loggedIn  } = userSlice.actions

export default userSlice.reducer