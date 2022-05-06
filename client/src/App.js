import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

function App() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <Header></Header>
      <Content></Content>
    </div>
  );
}

export default App;
