import { useLazyGetOneTodoQuery } from "../../store/apiSlice";

export default function TodoItem({ todo = {} }) {
  const [trigger, {data, isError, isLoading, error}] = useLazyGetOneTodoQuery()
  const { id, todo:name } = todo;
  
  // console.log(isError ? error.data.message : null)
  // console.log(data)

  function handleGetStatus() {
      trigger(id);
  }

  return (
    <div className="todo-row">
      <span>{name}</span>
      <button onClick={handleGetStatus}>Get Status</button>
    </div>
  );
}
