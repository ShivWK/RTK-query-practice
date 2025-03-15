export default function TodoItem({ todo = {} }) {
  const { todo:name } = todo;

  return (
    <div className="todo-row">
      <span>{name}</span>
    </div>
  );
}
