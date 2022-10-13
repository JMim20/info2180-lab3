
let squares;
let player="X";
let playerArray =[[,,,,],[,,,,]];

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
        console.log(sq);
        sq.addEventListener("click", clicksquare);
       //squares[sq].onclick=function(){squares[sq].classList.add("X")};
        
    }
    

}

function clicksquare(event){
    index = Array.from(squares).indexOf(event.target);
    console.log(index+ "i");
    
    if(player==="X"){
        squares[index].classList.add("X");
        squares[index].innerHTML="X";
        player="O";
    }else{
        squares[index].classList.add("O");
        squares[index].innerHTML="O";
        player="X";
    }
}