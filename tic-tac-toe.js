
let squares;
let player="X";
//let playerArray =[[],[]];
let gameMode=true;
let moves=["","","","","","","","",""];
const winningOptions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let restartBtn;
let someonePlayed=false;

window.onload=function()
    //console.log("....");
{
    //to get the squares this can be used or
        
        let board=document.getElementById("board");
       // let squares=board.children;
       squares=board.children; 
        //console.log(board);
        //line 11
    
   

    //squares=document.querySelectorAll("#board div"); 
    //let squares=document.querySelectorAll("#board div"); //find the board then find the div within the board.
    //finds and element with the hash symbol board and then it selects all the divs inside of the board.
    //console.log(squares);
    //for (let sq in squares){ OR
    for (let sq of squares){
        sq.classList.add("square");
        //sq.innerHTML="";
        console.log(sq);
        sq.addEventListener("click", clicksquare);
       //squares[sq].onclick=function(){squares[sq].classList.add("X")};
       sq.addEventListener("mouseover", hoverSquare);
       sq.addEventListener("mouseout", hoverSquare);
    }

    restartBtn=document.getElementsByClassName("btn")[0];
    restartBtn.addEventListener("click", restart);
}

function clicksquare(event){
    someonePlayed=true;
    index = Array.from(squares).indexOf(event.target);

    moves.splice(index,1,player);
    console.log(moves);
    if(player==="X"){
        if (squares[index].innerHTML==""&& gameMode){
            squares[index].classList.add("X");
            squares[index].innerHTML="X";
            player="O";
            //xMoves.push(index)
        }
       
    }else{
       if (squares[index].innerHTML=="" && gameMode){
            squares[index].classList.add("O");
            squares[index].innerHTML="O";
            player="X";
            //oMoves.push(index)
          
       }
    }
    whoWon();
}

function hoverSquare(event){
    index = Array.from(squares).indexOf(event.target);
    if(event.type=="mouseover"){
        squares[index].classList.add("hover");
    }else if(event.type=="mouseout"){
        squares[index].classList.remove("hover");
    }

}

function whoWon(){
    for (let i in winningOptions){
        let a = winningOptions[i][0];
        let b = winningOptions[i][1];
        let c = winningOptions[i][2];
        if (moves[a]&&moves[a]==moves[b]&&moves[a]==moves[c]){
            console.log(moves[a]);
            console.log(winningOptions[i], "Winning combination");
            annouceWinner(moves[a]);
            gameMode=false;
        }
        
    }
}

// function whoWon(){

//     for (let j in winningOptions){
//         for (let i in j){
//             // comparing winning options with player x moves
//             // for (p of playerArray){
//                 console.log(i , p);
//                 if (p===i[]){
//                     count++;
//                     if (count===3){
                        
//                     }

//                 }
//             }
//         }
// }
function annouceWinner(player){
    let winner=document.getElementById("status");
    winner.classList.add("you-won");
    winner.innerHTML="Congratulations!" + player + " is the winner";
}


//excercise 5

// function restart(){
//    // console.log("g")
//     if(someonePlayed){
        
//         location.reload();
//     }
    
// }

function restart(){
    //restartBtn=document.getElementById("btn");
   // restartBtn.onclick=function(){
   

     let winner=document.getElementById("status");
     winner.innerHTML="Move your mouse over a square and click to play an X or an O.";
    // playerArray=[[],[]];

    for (let r in squares){
        //squares[r].classList.remove("X");
        squares[r].innerHTML="";
        //squares[r].classList.remove("O");
        squares[r].className="square";
        
    }
    player="X";
    winner.classList.remove("you-won");
    moves=["","","","","","","","",""];
    gameMode=true;
   

}