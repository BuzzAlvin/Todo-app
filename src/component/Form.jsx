/* import {HiPlus, HiTrash, HiCheck} from 'react-icons/hi'; */
import { FaPlus, FaCaretDown } from "react-icons/fa";

export default function Form({
  handleInputChange,
  inputText,
  setTodos,
  todos,
  setInputText,
  setStatus,
}) {
  function handleFormSubmit(e) {
    e.preventDefault();
    if (inputText.trim() === "") return;
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  }

  function handleFilterChange(e) {
    setStatus(e.target.value);
  }

  return (
    <div className="flex items-center justify-center gap-2 mx-auto mt-20 sm:gap-4 sm:mt-24">
      <form  className="flex h-7 sm:h-8 md:h-11">
        <input
          type="text"
          onChange={handleInputChange}
          value={inputText}
          placeholder="Add your plans..."
          className="bg-white border border-gray-300 p-2 focus:outline-none w-36 sm:w-75 md:w-96"
        />
        <button
        onClick={handleFormSubmit}
          type="submit"
          className="bg-white p-2 border-black border cursor-pointer group hover:bg-pink-700 hover:border-pink-700 flex items-center"
        >
          <FaPlus className="bg-pink-700 text-white text-lg group-hover:bg-white group-hover:text-pink-700 " />
        </button>
      </form>

      <div className="relative">
        <select
        onChange={handleFilterChange}
          name="option"
          className="w-16 appearance-none border bg-white text-indigo-700 border-gray-300 focus:outline-none cursor-pointer px-1 h-7  sm:h-8 sm:w-full md:h-11"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>

        <FaCaretDown className="bg-pink-700 text-white text-lg pointer-events-none absolute -right-7 top-1/2 -translate-y-1/2 w-7 h-7 p-1 sm:h-8 md:h-11" />
      </div>
    </div>
  );
}
