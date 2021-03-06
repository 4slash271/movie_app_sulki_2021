import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
      <Route path="/" exact={true} element={<Home />} />
      <Route path="/about" element={<About />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;