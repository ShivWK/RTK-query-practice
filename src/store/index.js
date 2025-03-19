
import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./apiSlice";

const store = configureStore({
    reducer : {
        [apiSlice.reducerPath] : apiSlice.reducer,
    },

    middleware: (defaultMiddleWare) => [...defaultMiddleWare(), apiSlice.middleware],
})

export { store };