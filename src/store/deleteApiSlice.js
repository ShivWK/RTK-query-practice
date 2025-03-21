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

                    let patchResult; // Store the patchResult to use undo() if needed
                    try {
                        patchResult = dispatch(
                            apiSlice.util.updateQueryData("getAllTodos", undefined, (draft) => {
                                return draft.filter(todo => todo.id !== id);
                            })
                        );
                
                        await new Promise((_, reject) => setTimeout(() => reject(new Error("Forced failure")), 1000));
                     
                        await queryFulfilled; 
                    } catch {      
                            patchResult.undo();       
                    }
                },

                invalidatesTags : ["GetAllTodos"],
            }),

        };
    }
})

// console.log(deleteApi)
    
export const { useDeleteTodosMutation } = deleteApi
