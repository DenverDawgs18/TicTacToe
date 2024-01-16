// factory that creates a gameboard
// should have methods to add to it
const gameboard = (function (){
    const rows = 3;
    const columns = 3;
    const board = [];
    let notBlank = true;
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
                notBlank = true;

        }
        else{
            notBlank = false;
        }
       
    }
        else if(player === 1){
            if(board[n][m] === ""){
                board[n][m] = "X";
                notBlank = true;
            }
            else{
                notBlank = false;
            }
        
}
    }
    const clear = () => {
        for (let i = 0; i < rows; i++){
            for(let j = 0; j < columns; j++){
                board[i][j] = "";
            }
        }
    }
    const notBlanks = () => notBlank;
    return {getBoard, add, notBlanks, clear};
})();
// next factory should be responsible for the following: 
// Checking for a winner, and checking who's turn it is
const gameController = (function (){
    let turn = 1;
    const playTurn = (place) => {
        if (turn % 2 !== 0){
            gameboard.add(place, 1);
           
                turn++;
                checkWinner() 
        }
        else{
            gameboard.add(place, 2);
            turn++;
            checkWinner()
            
        }
    }
    const checkTurn = () => turn;
    const checkWinner = () => {
        board = gameboard.getBoard();
        let space1 = board[0][0];
        let space2 = board[0][1];
        let space3 = board[0][2];
        let space4 = board[1][0];
        let space5 = board[1][1];
        let space6 = board[1][2];
        let space7 = board[2][0];
        let space8 = board[2][1];
        let space9 = board[2][2];
        // check for rows
        if(space1 === space2 && space2 === space3 && space2 !== ""){
            alert(space1 + "'s have won!");
        }
        else if(space4 === space5 && space5 === space6 && space5 !== ""){
            alert(space4 + "'s have won!");
        }
        else if(space7 === space8 && space8 === space9 && space8 !== ""){
            alert(space7 + "'s have won!");
        }
        // check for columns
        else if(space1 === space4 && space4 === space7 && space4 !== ""){
            alert(space1 + "'s have won!");
        }
        else if(space2 === space5 && space5 === space8 && space5 !== ""){
            alert(space2 + "'s have won!");
        }
        else if(space3 === space6 && space6 === space9 && space6 !== ""){
            alert(space3 + "'s have won!");
        }
        // check diagonal
        else if(space1 === space5 && space5 === space9 && space5 !== ""){
            alert(space1 + "'s have won!") ;
        }
        else if(space3 === space5 && space5 === space7 && space5 !== ""){
            alert(space3 + "'s have won!");
        }
        else if(space1 && space2 && space3 && space4 && space5 && space6 && space7 && space8 && space9){
            alert("Tie");
        }
    }
    const restart = () => {
        document.querySelector(".restart").addEventListener("click", () => {
            turn = 1;
            gameboard.clear();
            displayManager.clear();
        })
    }
    return {playTurn, checkWinner, checkTurn, restart};
})();


// next factory will control the display and getting input
const displayManager = (function (){
    const display = () => {
        let board = gameboard.getBoard();
        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                if (board[i][j]){
                    if (i === 0 && j === 0){
                    
                        document.querySelector(".uno").textContent = board[i][j];
                    }
                    else if (i === 0 && j === 1){
                        document.querySelector(".dos").textContent = board[i][j];
                    }
                    else if (i === 0 && j === 2){
                        document.querySelector(".tres").textContent = board[i][j];
                    }
                    else if (i === 1 && j === 0){
                        document.querySelector(".cuatro").textContent = board[i][j];
                    }
                    else if (i === 1 && j === 1){
                        document.querySelector(".cinco").textContent = board[i][j];
                    }
                    else if (i === 1 && j === 2){
                        document.querySelector(".seis").textContent = board[i][j];
                    }
                    else if (i === 2 && j === 0){
                        document.querySelector(".siete").textContent = board[i][j];
                    }
                    else if (i === 2 && j === 1){
                        document.querySelector(".ocho").textContent = board[i][j];
                    }
                    else if (i === 2 && j === 2){
                        document.querySelector(".nueve").textContent = board[i][j];
                    }
                }
            }
        }
    }
    const clear = () => {
        const uno  = document.querySelector(".uno");
        const dos  = document.querySelector(".dos");
        const tres = document.querySelector(".tres");
        const cuatro  = document.querySelector(".cuatro");
        const cinco  = document.querySelector(".cinco");
        const seis  = document.querySelector(".seis");
        const siete  = document.querySelector(".siete");
        const ocho = document.querySelector(".ocho");
        const nueve  = document.querySelector(".nueve");
        let buttons = [uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve];
        for (let i = 1; i <= buttons.length; i++){
            buttons[i-1].textContent = "";
        }
    }
    const onClick = () =>{
        const uno  = document.querySelector(".uno");
        const dos  = document.querySelector(".dos");
        const tres = document.querySelector(".tres");
        const cuatro  = document.querySelector(".cuatro");
        const cinco  = document.querySelector(".cinco");
        const seis  = document.querySelector(".seis");
        const siete  = document.querySelector(".siete");
        const ocho = document.querySelector(".ocho");
        const nueve  = document.querySelector(".nueve");
        let buttons = [uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve];
        for (let i = 1; i <= buttons.length; i++){
            buttons[i-1].addEventListener("click", () => {
                gameController.playTurn(i);
                displayManager.display();
            })
        }
        
    }
    const getNames = () =>{
        let nameOne = prompt("What is the first player's name?");
        let nameTwo = prompt("What is the second player's name?")
        let pOne = document.querySelector(".nameOne");
        let pTwo = document.querySelector(".nameTwo");
        pOne.textContent = nameOne + " (X's)";
        pTwo.textContent = nameTwo + " (O's)";
    }

    return {display, onClick, getNames, clear};
})();
displayManager.onClick();
gameController.restart();
displayManager.getNames();