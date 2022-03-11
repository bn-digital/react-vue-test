import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import First from "./pages/main";
import SecondPage from "./pages/second";
import ThirdPageReact from "./pages/third";
import './index.css';
function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/main" element={<First />}></Route>
        <Route path="/second" element={<SecondPage />}></Route>
        <Route path="/third" element={<ThirdPageReact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
