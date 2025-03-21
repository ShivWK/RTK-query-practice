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

    reducerPath : "apiSlice",
    refetchOnFocus : true,
    refetchOnReconnect : true,
    keepUnusedDataFor : 4,
    tagTypes : ["GetAllTodos", "AddTodo"],
    baseQuery : fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),

    endpoints : function(builder) {
        return {
            getAllTodos : builder.query({
                query : () => '/todos',
                providesTags : ["AddTodo"],
                // keepUnusedDataFor : 2,
                transformResponse : (data) => data?.todos || []
            }),

            getOneTodo : builder.query({
                query : (id) => `/todos/${id}`,
            }),

            addTodo:  builder.mutation({
                query: (param) => ({
                    url: "/todos/add",
                    method: 'POST',
                    body: JSON.stringify(param)
                }),
                providesTags : ["AddTodo"],
                
            }),         
        };
    },
});

export default apiSlice;
export const { useGetAllTodosQuery, useLazyGetOneTodoQuery, useAddTodoMutation} = apiSlice;
