import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
};

export const addCartSlice = createSlice({
    name: "addCart",
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            state.counter += action.payload;
        }
    }
});

export const {addProductToCart} = addCartSlice.actions;
export default addCartSlice.reducer;
