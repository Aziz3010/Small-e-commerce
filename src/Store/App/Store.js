import { configureStore } from "@reduxjs/toolkit";
import addCartSlice from "../Slices/addCartSlice";

export const store = configureStore({
    reducer: {
        addCart: addCartSlice
    },
});