import * as React from 'react';
import { Paper } from '@mui/material';
import './index.css';

import { motion } from "framer-motion";

function Minesweeper() {


  let isGameOver = false
let size = "easy"
let width = 10
let flag = 0

function changeGameOver(bool: boolean) {
  isGameOver = bool
}

function addFlag() {
  flag++
}

function removeFlag() {
  flag--
}

function getFlag() {
  return flag
}

function editWidth(newWidth: number) {
  width = newWidth
}

  return (
    <div>
      <header>
        <nav className="nav">
          <h1 className="title">f</h1>
          <div className="nav__links">
            <button className="button_light">New game</button>
            <button className="button_light">New game</button>
          </div>

        </nav>
      </header>
    </div>
  )
}
export default Minesweeper;

// const body = document.querySelector('body');
// body.classList.add('container')
// const row = document.createElement('div');
// row.classList.add('row');
// row.appendChild(panel);
// row.appendChild(board);
// body.append(header, row)