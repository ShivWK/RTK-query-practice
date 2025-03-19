import axios from 'axios';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; 

const deleteApiSlice = createApi({
    reducerPath : "deleteApiSlice",
    baseQuery : fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),

    endpoints : function(builder) {
        return {
            deleteTodos : builder.mutation({
                query : () => ({
                    // syntax is same as of fetch request if we do GELETE, POST, ect requests
                    url : "/todos",
                    method : "DELETE",

                }),

                transformResponse : (data) => data?.todos || []
            }),

        };
    },
});

export default deleteApiSlice;
export const { useDeleteTodosMutation } = deleteApiSlice;
