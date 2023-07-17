import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return <Main item={item} />;
  });
  return (
    <>
      <Navbar />
      {cards}
    </>
  );
}

export default App;
