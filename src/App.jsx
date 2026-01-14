import { useState, useEffect, useRef } from "react";
import Header from "./component/Header";
import Form from "./component/Form";
import TodoList from "./component/TodoList";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const isInitialMount = useRef(true);

  useEffect(() => {
    getLocalTodos();
  }, []);
  // UseEffect to filter todos based on status
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    filterHandler();
    saveToLocalTodos();
  }, [todos, status]);

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  function filterHandler() {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  function saveToLocalTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function getLocalTodos() {
    const storedTodo = localStorage.getItem("todos");

    if (storedTodo) {
      setTodos(JSON.parse(storedTodo));
    } else {
      localStorage.setItem("todos", JSON.stringify([]));
    }
  }

  return (
    <main className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 px-3 py-14 sm:p-12 md:p-16 min-h-screen flex flex-col grow">
      <Header />
      <Form
        handleInputChange={handleInputChange}
        inputText={inputText}
        setTodos={setTodos}
        todos={todos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
      <footer className="flex justify-center text-gray-300 text-sm sm:text-lg">Made With ❤ by BuzzAlvin</footer>
    </main>
  );
}
