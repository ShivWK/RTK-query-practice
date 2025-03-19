import { useEffect } from "react";
import { useLazyGetOneTodoQuery } from "../../store/apiSlice";
import { useDeleteTodosMutation } from "../../store/deleteApiSlice";

export default function TodoItem({ todo = {} }) {
  const result2 = useLazyGetOneTodoQuery();
  const [trigger, {data, isError, isLoading, error}, lastPromiseInfo] = result2;
  console.log(lastPromiseInfo)
  const { id, todo:name } = todo;
  const [deleteTodo, result]  = useDeleteTodosMutation();

  // console.log(mutation);
  
  // useEffect(()=>{
  //   console.log(result)
  // }, [result.isSuccess])

  // console.log(result);

  // useEffect(()=> {
  //   console.log(result.isError, result.error)
  // }, [result.isError])

  function handleGetStatus() {
      trigger(id);
  }

  function handleDelete() {
    deleteTodo(id)
  }

  return (
    <div className="todo-row">
      <span>{name}</span>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleGetStatus}>Get Status</button>
    </div>
  );
}
