import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useMobile } from "./hooks";
import { Home , Landing, Weekmenu, Kalender, Huisregels, Sponsors, Lezingen, Opdracht, Expo, Randactiviteiten } from "./pages";

export default function App() {
  useMobile();

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/weekmenu" element={<Weekmenu />} />
        <Route exact path="/kalender" element={<Kalender />} />
        <Route exact path="/huisregels" element={<Huisregels />} />
        <Route exact path="/sponsors" element={<Sponsors />} />
        <Route exact path="/lezingen" element={<Lezingen />} />
        <Route exact path="/opdracht" element={<Opdracht />} />
        <Route exact path="/randactiviteiten" element={<Randactiviteiten />} />
        <Route exact path="/expo" element={<Expo />} />
      </Routes>
    </BrowserRouter>
  );
}
