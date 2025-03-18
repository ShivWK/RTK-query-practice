// reducers represents a module
// Slice also represent a module
// apiSlice reprents the API ends point of a module
import axios from 'axios';


import { createApi } from "@reduxjs/toolkit/query/react"; //important to import from react beacuse this will give the react hooks which we may use

const apiSlice = createApi({
    baseQuery : async (url)=> {
        let response = await axios.get(url);
        let todos = response?.data?.todos;
        return {data : todos};
    },

    endpoints : function(builder) {
        return {
            getAllTodos : builder.query({
                query : () => 'https://dummyjson.com/todos',
            }),

            getOneTodos : builder.query({
                query : () => 'https://dummyjson.com/todos/1',
            }),
        };
    },
});

console.log(apiSlice)
export default apiSlice;
export const {useGetAllTodosQuery} = apiSlice;

// Hook : useQuery : here = use + FunctionName + Query ; Will give data, isLoading, error states.
// Hook : useMutation : here use + functionName + Mutation ; Will give us the fucntion we given on query key in the mutation object