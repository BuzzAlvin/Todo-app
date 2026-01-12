import { FaTrash, FaCheck } from "react-icons/fa";

export default function Todo({ text, todo, todos, setTodos }) {
  function handleDelete() {
    // Function to handle delete todo item
    setTodos(todos.filter((el) => el.id !== todo.id));
  }

  function handleComplete() {
    // Function to handle complete todo item
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  }

  return (
    <div className="flex flex-row items-center justify-center grow mb-1.5 ">
      <li className={`flex items-center bg-white h-8 font-semibold wrap-break-words px-1 sm:h-10 sm:px-3 sm:text-xl md:h-14 md:px-4 md:text-2xl ${todo.completed ? "line-through text-gray-400" : ""}`}>
        {text}
      </li>
      <button className="bg-green-800 sm:h-10 sm:px-2 md:h-14 md:px-3 cursor-pointer" onClick={handleComplete}>
        <FaCheck className="text-white w-8 h-8 p-1" />
      </button>
      <button className="bg-pink-700 sm:h-10 sm:px-2 md:h-14 md:px-3" onClick={handleDelete}>
        <FaTrash className="text-white w-8 h-8 p-1 " />
      </button>
    </div>
  );
}
