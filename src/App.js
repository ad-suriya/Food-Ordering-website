import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Rescard from "./components/Rescard";
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<AppLayout />);