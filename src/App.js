import React from "react";

import BeerList from "./components/BeerList";
import Logo from "./imgs/logo.png";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <img src={Logo} className="logo" />
      <BeerList />
    </div>
  );
}
