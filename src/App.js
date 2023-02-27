import React, { useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import "./App.css";
import { Home } from "./pages";
import mobile from "./recoil/mobile";

export default function App() {
  const setMobile = useSetRecoilState(mobile);
  const screenSize = useRef([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    if (screenSize.current[0] < screenSize.current[1]) {
      setMobile(true);
    }
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
