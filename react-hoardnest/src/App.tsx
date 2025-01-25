import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <MainContainer />
    </div>
  );
};

export default App;
