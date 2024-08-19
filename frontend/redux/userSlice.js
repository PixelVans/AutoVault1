import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData: null,
    isAuthenticated: false,
    newCar: null,
    myListings: null,
    listing: null,
    wishlist: [],
  
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
          
            state.newCar = action.payload;  
        },
        userListings: (state,action) => {
            state.isAuthenticated = true;
            state.myListings = action.payload;  
        },
        removeListing: (state, action) => {
            state.myListings = state.myListings.filter(
              listing => listing._id !== action.payload
            );
            
        },
        viewListing: (state, action) => { 
                state.listing = action.payload;  
        },
        addToWishlist: (state, action) => {
            // Check if the item is already in the wishlist
            const exists = state.wishlist.find(item => item._id === action.payload._id);
            if (!exists) {
              state.wishlist.push(action.payload);
            }
        },
        removeFromWishlist: (state, action) => {
            // Filter out the item with the matching ID
            state.wishlist = state.wishlist.filter(item => item._id !== action.payload);
        },
       
        
    }
})








export const {loggedIn ,loggedOut,sellcar,userListings,removeListing,viewListing,addToWishlist,removeFromWishlist,homestorage } = userSlice.actions

export default userSlice.reducer