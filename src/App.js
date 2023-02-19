import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Home} from './pages'
import React from 'react';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>  
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}