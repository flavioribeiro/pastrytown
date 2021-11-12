import React, { useState } from "react";
import todosData from "../todosData";
import TodoItem from "../components/TodoItem";
import shortid from "shortid";

const TodoList = () => {
  const [filteredTodos, setFilteredTodos] = useState(todosData);
  const [todo, setTodo] = useState("");
  const [searchText, setSearchText] = useState("")

  const searchTextChanged = (event) => {
    setSearchText(event.target.value)
    updateFilteredTodos(event.target.value)
  };

  const updateFilteredTodos = newSearchText => {
    let searchTextLower = newSearchText.toLowerCase();
    const filtered = todosData.filter((item) =>
      item.description.toLowerCase().startsWith(searchTextLower)
    );
    setFilteredTodos(filtered);
  }

  const todoChanged = (event) => {
    setTodo(event.target.value);
  };

  const addTodo = () => {
    todosData.unshift({
      id: shortid.generate(),
      description: todo,
      completeStatus: false
    })
    updateFilteredTodos(searchText)
    setTodo("");
  };

  const todoItems = filteredTodos.map((item) => (
    <TodoItem key={item.id} item={item} />
  ));

  return (
    <div className="todo-list">
      <input
        className="todo-search"
        type="text"
        value={searchText}
        placeholder="Search"
        onChange={searchTextChanged}
      />
      <div className="todo-add-container">
        <input
          className="todo-search"
          type="text"
          value={todo}
          placeholder="Add todo"
          onChange={todoChanged}
        />
        <button className="todo-add-button" onClick={addTodo}>
          Add
        </button>
      </div>
      {todoItems}
    </div>
  );
};

export default TodoList;
