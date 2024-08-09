import { WINNER_COMBOS } from "../constants"

export const checkWinnerFrom = (board) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c, d] = combo;
    if (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c] &&
      board[a] === board[d]
    ) {
      return board[a];
    }
  }
  return null;
};

export const checkEndGame = (newBoard)=>{
//Revisar si hay empate
return newBoard.every((square)=>square !== null)
}