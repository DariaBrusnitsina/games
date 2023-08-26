import * as React from 'react';
import { Paper } from '@mui/material';
import './index.css';
import { potions } from './potionsData';
import MyTimer from './timer.jsx';

import { Link } from 'react-router-dom';

function getRandom(min: number, max: number): number {
  return Math.round(Math.random() * (max-min) + min)
}

interface IPotion {
  id: string;
  url: string;
}

interface ILevel {
  name: string;
  time: number;
}

const gameLevels = [{name: 'easy', time: 30}, {name: 'medium', time: 20}, {name: 'hard', time: 10} ]

function PotionGame() {

  const [phase, setPhase] = React.useState('startGame');
  const [potionsBoard, setPotionsBoard] = React.useState(potions);
  const [score, setScore] = React.useState(0);
  const [selectedLevel, setSelectedLevel] = React.useState<ILevel | undefined>(undefined);
  const [potionAim, setPotionAim] = React.useState(potionsBoard[getRandom(0, potions.length-1)]);

  function handlePotionClick(potion: IPotion): void {
    if (potion.id === potionAim.id) {
      setPotionsBoard([...potions.sort(() => Math.random() - 0.5)])
      setPotionAim(potionsBoard[getRandom(0, potions.length-1)])
      setScore((prevState) => prevState +=1)
    }
  }
  const time = new Date();
  if (selectedLevel !== undefined) {
    time.setSeconds(time.getSeconds() + selectedLevel.time);
  }


  function startGame(level: ILevel) {
    setPhase('inGame')
    setSelectedLevel(level)
    setScore(0)
  }

  function gameOver() {
    setPhase('gameOver')
  }



  return (
    <section>
    <Link to='/'>Go back</Link><div id='potion_container'>

      <div id="potion_body">

        {phase === 'startGame' &&
          <div className="screen start">
            <h1>Зельеварение</h1>

            <div className="start-content">
              <div className="plot">
                <p>Пуф! Злая ведьма похитила тебя и держит в своем волшебном замке, из которого не так просто выбраться.
                  На дверях и окнах лежат сложные заклинания, разрушить которые может волшебное зелье. Пока ведьма отвлеклась,
                  у тебя есть немного времени, чтобы приготовить нужное зелье из <span className="span-score">15</span>-ти компонентов.
                  Поторопись!</p>
              </div>

              <div className="choice">
                <p>Выберите уровень сложности игры</p>
                <ul className="time-list" id="time-list">
                  {gameLevels.map((l) => <li key={l.name}>
                    <button onClick={() => startGame(l)} className="btn time-btn" data-time="30">{l.name}</button>
                    <p className="prompt" id="prompt-30">{l.time} секунд</p>
                  </li>
                  )}
                </ul>
              </div>
            </div>
          </div>}

        {phase === 'inGame' &&
          <div className="screen game">
            <MyTimer expiryTimestamp={time} onGameOver={gameOver} />
            <div className="conditions" id="conditions">
              <div className="condition"><img className='potion' src={potionAim.url} alt={potionAim.id} /></div>
              <div className="score-table">Счёт: <span className="score">{score}</span></div>
            </div>

            <div className="board" id="board">
              {potionsBoard.map((p) => <img key={p.id} onClick={() => handlePotionClick(p)} className='potion' src={p.url} alt={p.id} />)}
            </div>

            <div className="magic-pot" id="board">
              <img className="magic-pot__img" src="./assets/magic-pot.png" alt="" />
            </div>
          </div>}

        {phase === 'gameOver' &&

          <div className="screen result">
            <h1>Cчет: <span className="result-score">{score}</span></h1>
            <p className="result-text"></p>
            <img className="magic-item__img" />

            <button className="btn try-again" onClick={() => setPhase('startGame')}>Try again</button>
          </div>}
      </div>

    </div></section>
  )
}
export default PotionGame;