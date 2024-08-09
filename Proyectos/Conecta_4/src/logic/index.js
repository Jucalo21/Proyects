export const saveGameStorage =({board,turn})=>{
    //Guardar la partida
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}

export const resetGameStorage = ()=>{
    //Resetear la partida
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}