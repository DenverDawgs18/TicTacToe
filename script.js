// factory that creates a gameboard
// should have methods to add to it
function gameboard(){
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
    const add = (place) => {
        if (place === 1){
            if (board[0][0] === ""){
                board[0][0] = "X";
            }
        }
    }
    return {getBoard, add};
}
board = gameboard();
console.log(board.getBoard());
board.add(1)
console.log(board.getBoard());