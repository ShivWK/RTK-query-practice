
import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./apiSlice";
import deleteApiSlice from "./deleteApiSlice";

const store = configureStore({
    reducer : {
        [apiSlice.reducerPath] : apiSlice.reducer,
        [deleteApiSlice.reducerPath] : deleteApiSlice.reducer,
    },

    middleware: (defaultMiddleWare) => [...defaultMiddleWare(), apiSlice.middleware, deleteApiSlice.middleware],
})

export { store };