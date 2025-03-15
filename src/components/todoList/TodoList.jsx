import TodoItem from "../todoItem/TodoItem";

export default function TodoList({ todos }) {
  return (
    <div>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
}
