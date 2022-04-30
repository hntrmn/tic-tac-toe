// alert('Welcome to Tic_Tac_Toe');
// let music =new Audio("music.mp3");
// let audioTurn=new Audio('ting.music');
// let gameOver = new Audio("gameOver.mp3");
let turn = "X";
 let isGameOver =false
//Function to change the turn
const changeTurn =()=>{
    return turn === "X" ? "0" : "X"
}

//Function to check for a win
const checkWin =()=>{
    let boxtext =document.getElementsByClassName("boxtext");
    let wins  =[
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]
    wins.forEach(e =>{
        if ((boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[2]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[0]].innerHTML !== "")){
            document.querySelector(".info").innerHTML = boxtext[e[0]].innerHTML + " Won";
            isGameOver =true;
            //Game over so this code is run
            document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width="9rem";
        }
    });
}
 


//Game Logic
let boxes =document.getElementsByClassName("box")
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click',()=>{
        if (boxtext.innerHTML === "") {
            boxtext.innerHTML= turn;
           turn= changeTurn(); // this line change to turn. when click x is completed its auto change to zero
            // audioTurn.play();
            checkWin();
            if(!isGameOver){
            document.getElementsByClassName("info")[0].innerHTML = "Turn For "+ turn ;
            }
    }
    })
})

//i add one on click click listener here
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerHTML = ""
    });
})