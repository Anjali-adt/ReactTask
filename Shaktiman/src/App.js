import React from "react";
import "./TrendyCart/main.scss";
import "./App.css";
import { Route, Routes } from "react-router";
import ShowData from "./ShowData";
import Home from "./Home";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/showdata" element={<ShowData />}></Route>
      </Routes>
    </>
  );
}

export default App;
