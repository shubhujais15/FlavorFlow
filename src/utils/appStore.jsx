import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const appStore = configureStore({
    reducer: {            //it is a reducer function which consist the reducers that consist the actions
        // for each slice it has their own reducer to add all reducers inside it
        cart: cartReducer
    }
});

export default appStore;