import React, { useState } from "react";
import todosData from "../beersData";
import BeerItem from "../components/BeerItem";

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
      item.title.toLowerCase().includes(searchTextLower)
    );
    setFilteredTodos(filtered);
  }

  const todoItems = filteredTodos.map((item) => (
    <BeerItem key={item.id} item={item} />
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
      {todoItems}
    </div>
  );
};

export default TodoList;
