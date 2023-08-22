import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './mainPage';
import ResponsiveAppBar from './navigation';
import PotionGame from './potionGame/potionGame';

function App() {
  return (
    <>
    <ResponsiveAppBar/>

    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/potion' element={<PotionGame/>}/>
    </Routes>

    </>
  );
}

export default App;
