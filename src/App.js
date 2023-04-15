import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Cart, Main } from "./pages";
import { Header,Footer } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
