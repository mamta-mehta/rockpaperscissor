let userScore=0;
let compScore=0;
const msg=document.querySelector("#msg")
let userfinal=document.querySelector("#user-score");
let compfinal=document.querySelector("#computer-score");
const choices= document.querySelectorAll(".choice");

function genCompChoice(){
    const options=["rock","paper","scissor"]
    const index=Math.floor(Math.random()*3);
    return options[index];

}

function drawGame(){
    console.log("its a draw")
    msg.innerText="It was a draw play again";
}

function playGame(userChoice){
    console.log("userChoice =",userChoice)
    const compChoice=genCompChoice();
    console.log("computerChoice =",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userwin=true;
        if(userChoice==="rock"){
            userwin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userwin=compChoice==="scissor"?false:true;
        }
        else{
            userwin=compChoice==="rock"?false:true;
        }
    showWinner(userwin); 
    }   
}

function showWinner(userwin){
    if (userwin===true){
        console.log("user is winner");
        msg.innerText="User Wins";
        userScore++;
        userfinal.innerText=userScore;
    }
    else{
        console.log("computer wins");
        msg.innerText="Computer Wins";
        compScore++;
        compfinal.innerText=compScore;
    }
}
choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        console.log(userChoice,"was clicked")
        playGame(userChoice);
    })
})

