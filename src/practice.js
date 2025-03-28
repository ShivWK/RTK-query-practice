import TodoItem from "../todoItem/TodoItem";
import { useState } from "react";
import { useAddTodoMutation, useGetAllTodosQuery } from "../../store/apiSlice";

export default function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const result1 = useGetAllTodosQuery();
  const {data, isLoading, error} =result1;
  const result2 = useAddTodoMutation();
  const [ addTodo ] = result2;
  console.log("Fetched");
  const {refetch} = useGetAllTodosQuery()

  function handleAddTodo() {
    setInputValue("");
    addTodo({
      todo: inputValue,
      completed: false,
      userId: 5255,
    })
  }

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <div>
      <div>
        <input value={inputValue} type="text" onChange={handleInputChange} placeholder="Enter Todo" />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      {
      isLoading 
      ? <h1>Loading...</h1> 
      : error 
      ? <h1>some error occured</h1>
      : data.length > 0 
      ? (data.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
        }))
      : <h1>No todo available</h1>
    }
    </div>
  );
}
