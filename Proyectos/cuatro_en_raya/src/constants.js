// Turnos
export const TURNS={
    PLAYER1:'🔴',
    PLAYER2:'🔵'
  }
  
const generateWinnerCombos = ()=>{
  const numRows = 6;
  const numCols = 7;
  const combos = [];

  //Horizontales
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col <= numCols -4; col++) {
      const start = row*numCols + col;
      combos.push([start,start+1,start+2,start+3]);
    }
  }

  //Verticales 
  for (let col = 0; col < numCols; col++) {
    for (let row = 0; row <= numRows -4; row++) {
      const start = row*numCols + col;
      combos.push([start,start+numCols,start + 2*numCols,start + 3*numCols ]);
    }
  }

  //Diagonales de izquierda a derecha
  for (let row = 0; row <= numRows -4; row++) {
    for (let col = 0; col <= numCols -4; col++) {
      const start = row*numCols + col;
      combos.push([start, start+numCols+1, start+ 2*(numCols+1), start+3*(numCols+1)])
    }
  }

  //Diagonales de derecha a izquierda
  for (let row = 0; row <= numRows -4; row++) {
    for (let col = 0; col < numCols; col++) {
      const start = row*numCols+col;
      combos.push([start,start+numRows,start+2*numRows,start+3*numRows])
    }
  }
  return combos
}

export const WINNER_COMBOS = generateWinnerCombos();