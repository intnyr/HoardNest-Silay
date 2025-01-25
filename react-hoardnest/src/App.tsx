import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchAndCategories from "./components/SearchAndCategories";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <SearchAndCategories />
    </div>
  );
};

export default App;
