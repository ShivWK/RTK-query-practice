// reducers represents a module
// Slice also represent a module
// apiSlice reprents the API ends point of a module
import axios from 'axios';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; 

const apiSlice = createApi({

    // baseQuery : async (url)=> {
    //     let response = await axios.get(url);
    //     let todos = response?.data?.todos;
    //     return {data : todos};
    // },

    baseQuery : fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),

    endpoints : function(builder) {
        return {
            getAllTodos : builder.query({
                query : () => '/todos',
                transformResponse : (data) => data?.todos || []
            }),

            getOneTodo : builder.query({
                query : (id) => `/todos/${id}`,
            }),
        };
    },
});

export default apiSlice;
export const { useGetAllTodosQuery, useLazyGetOneTodoQuery } = apiSlice;
