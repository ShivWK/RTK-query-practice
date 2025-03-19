import TodoItem from "../todoItem/TodoItem";
import { useState } from "react";
import { useAddTodoMutation, useGetAllTodosQuery } from "../../store/apiSlice";

export default function TodoList({ todos }) {
  const [inputValue, setInputValue] = useState("");
  const result = useAddTodoMutation();
  const [ addTodo ] = result;
  // console.log(result);
  const {refetch} = useGetAllTodosQuery()

  function handleAddTodo() {
    setInputValue("");
    addTodo({
      todo: inputValue,
      completed: false,
      userId: 5255,
    }).then(() => {
      refetch();
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
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
}
