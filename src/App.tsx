import React from 'react';
import './reset.css'
import './main.css'
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PotionGame from './pages/potionGame';
import Minesweeper from './pages/minesweeper';
import AllPages from './pages/menu';

function App() {
  const location = useLocation()

  const pages =[
    {color: "#E7E4BB", path: "/potion", name: 'Potion game'},
    {color: "#FFCE9C", path: "/minesweeper", name: 'Minesweeper game'},
  ]

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<AllPages pages={pages}/>}/>
        <Route path='/potion' element={<PotionGame/>}/>
        <Route path='/minesweeper' element={<Minesweeper/>}/>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
