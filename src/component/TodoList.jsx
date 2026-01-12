import Todo from "./Todo.jsx";

export default function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <div>
      <ul className="flex flex-col mt-12">
        {filteredTodos.map((todo) => (
          <Todo key={todo.id} text={todo.text} setTodos={setTodos} todos={todos} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
