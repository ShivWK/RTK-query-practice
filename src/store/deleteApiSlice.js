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
              
                onQueryStarted : async function (id, { dispatch, queryFulfilled}) {

                        const action = dispatch(
                            apiSlice.util.updateQueryData("getAllTodos", undefined, (draft) => {
                                //sraft is a copy of main cached dtat of getAllTodos endepoint it is mutative
                                return draft.filter(todo => todo.id !== id);
                            })
                        );

                    queryFulfilled.catch(()=> {
                        action.undo();    
                    })   
                },

                invalidatesTags : ["GetAllTodos"],
            }),

        };
    }
})

// console.log(deleteApi)
    
export const { useDeleteTodosMutation } = deleteApi
