import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {                                    //reducer function which consist actions that will dispatch
        addItem: (state,action) => {              
            // mutating the state over here
            state.items.push(action.payload);     
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.card.info.id !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
})


export const{addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;