import { useState } from "react";
import confetti from "canvas-confetti";

import { Square } from "./components/Square";
import { WinnerModal } from "./components/WinnerModal";
import { TURNS } from "./constants";
import { saveGameStorage, resetGameStorage } from "./logic";
import { checkEndGame, checkWinnerFrom } from "./logic/board";

function App() {
  //Revisar si hay un board guardado en el localStorage, sino se inicializa
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    if (boardFromStorage) return JSON.parse(boardFromStorage);
    return Array(42).fill();
  });

  //Revisar si hay turnos guardados en el localStorage, sino se inicializa
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURNS.PLAYER1;
  });

  const [winner, setWinner] = useState(null);
  //Null=> no hay ganador
  //False => Empate
  //True => Hay un ganador

  const resetGame = () => {
    setBoard(Array(42).fill(null));
    setTurn(TURNS.PLAYER1);
    setWinner(null);

    resetGameStorage();
  };
  const updateBoard = (index) => {
    //Impedir que una casilla usada se sobreescriba
    if (board[index] || winner) return;

    //Actualizar el tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    //Cambiar turno entre jugadores
    const newTurn = turn === TURNS.PLAYER1 ? TURNS.PLAYER2 : TURNS.PLAYER1;
    setTurn(newTurn);

    saveGameStorage({
      board: newBoard,
      turn: newTurn,
    });

    //Revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <main className="board">
      <h1>Conecta 4</h1>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.PLAYER1}>{TURNS.PLAYER1}</Square>
        <Square isSelected={turn === TURNS.PLAYER2}>{TURNS.PLAYER2}</Square>
        <button className="btn-reset" onClick={resetGame}>
          Resetear juego
        </button>
      </section>
      <section>
        <WinnerModal resetGame={resetGame} winner={winner} />
      </section>
    </main>
  );
}
export default App;
