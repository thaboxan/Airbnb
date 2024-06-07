import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <Hero />
    <Card />
  </React.StrictMode>
);
