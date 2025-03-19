import apiSlice from "./apiSlice";

const deleteApi = apiSlice.injectEndpoints({
    endpoints : function(builder) {
        return {
            deleteTodos : builder.mutation({
                query : (id) => ({
                    // syntax is same as of fetch request if we do GELETE, POST, ect requests
                    url : `/todos/${id}`,
                    method : "DELETE",
                }),
            }),

        };
    }
})

// console.log(deleteApi)
    
export const { useDeleteTodosMutation } = deleteApi
