import React, { useState } from "react";
import Heart from "react-heart"
import todosData from "../fullBeersList";
import BeerItem from "../components/BeerItem";

const BeerList = () => {
  const [filteredTodos, setFilteredTodos] = useState(todosData);
  const [listingFavorites, setListingFavorites] = useState(false);
  const [searchText, setSearchText] = useState("")

  const searchTextChanged = (event) => {
    setSearchText(event.target.value)
    updateFilteredTodos(event.target.value)
  };

  const handleFavoriteChange = () => {
    setListingFavorites(!listingFavorites);
    const onlyFavorites = !listingFavorites;
    if (onlyFavorites) {
      setFilteredTodos(todosData.filter((item) => item.favoriteStatus == !listingFavorites));
    } else {
      setFilteredTodos(todosData);
    }
  }

  const updateFilteredTodos = newSearchText => {
    let searchTextLower = newSearchText.toLowerCase();
    const filtered = todosData.filter((item) => {
      return (
        (item.title.toLowerCase().includes(searchTextLower) ||
        item.desc.toLowerCase().includes(searchTextLower) ||
        item.brewery.toLowerCase().includes(searchTextLower)) &&
        item.favoriteStatus == listingFavorites
      );
    });
    setFilteredTodos(filtered);
  }

  const todoItems = filteredTodos.map((item) => (
    <BeerItem key={item.id} item={item} />
  ));

  return (
    <div className="todo-list">
      <div className='top-menu'>
        <input
          className="todo-search"
          type="text"
          value={searchText}
          placeholder="Search"
          onChange={searchTextChanged}
        />
        <Heart isActive={listingFavorites} onClick={handleFavoriteChange} className="heart-filter" />
      </div>
      {todoItems}
    </div>
  );
};

export default BeerList;
