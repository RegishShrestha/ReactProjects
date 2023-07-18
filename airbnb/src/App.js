import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import datas from "./data";

import "./App.css";

function App() {
  const card = datas.map((data) => <Card data={data} />);
  return (
    <>
      <Navbar />
      <Hero />
      <section className="card_section">{card}</section>
    </>
  );
}

export default App;
