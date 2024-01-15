// factory that creates a gameboard
// should have methods to add to it
const gameboard = (function (){
    const rows = 3;
    const columns = 3;
    const board = [];
    for(let i = 0; i < rows; i++){
        board[i] = [];
        for(let j = 0; j < columns; j++){
            board[i].push("")
        }
    }
    const getBoard = () => board;
    const add = (place, player) => {
        switch(place){
            case 1:
                n = 0;
                m = 0;
                break;
            case 2:
                n = 0; 
                m = 1;
                break;
            case 3:
                n = 0;
                m = 2;
                break;
            case 4: 
                n = 1;
                m = 0;
                break;
            case 5:
                n = 1;
                m = 1;
                break;
            case 6: 
                n = 1;
                m = 2;
                break;
            case 7: 
                n = 2;
                m = 0;
                break;
            case 8: 
                n = 2;
                m = 1;
                break;
            case 9: 
                n = 2;
                m = 2;
                break;
        }
        if(player === 2){
            if(board[n][m] === ""){
                board[n][m] = "O";

        }  
    }
        else if(player === 1){
            if(board[n][m] === ""){
                board[n][m] = "X";

        }
}
    }
    return {getBoard, add};
})();
// next factory should be responsible for the following: 
// Checking for a winner, and checking who's turn it is
function gameController(){
    let turn = 1;
    const playTurn = () => {
        if (turn % 2 !== 0){
            gameboard.add(Number(prompt("Player 1 pick a place:")), 1);
            turn++;
        }
        else{
            gameboard.add(Number(prompt("Player 2 pick a place")), 2);
            turn ++;
        }
    }
    const checkWinner = () => {
        
    }
    return {playTurn};
}
