let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msgPara = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#Computer-score")

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];

}
const drawGame =() =>{
    msgPara.innerText = `Match is draw,Play again`
    msgPara.style.backgroundColor = "#9CA3DB"
};

let showWinner = (userWin,userChoice,computerChoice) => {
    if(userWin){
        msgPara.innerText = `you win, your ${userChoice} beats ${computerChoice}`;
        msgPara.style.backgroundColor = "green"
        userScore++;
        userScorePara.innerText = userScore;
    }else{
        computerScore++;
        compScorePara.innerText = computerScore;
        msgPara.innerText = `you lose, ${computerChoice} beats your ${userChoice}`;
        msgPara.style.backgroundColor = "red"
    }
   
}

const playGames = (userChoice) => {
    console.log("user choice = ",userChoice);
    const computerChoice = genCompChoice();
    console.log("computer choice = ",computerChoice);

    if(userChoice === computerChoice){
        drawGame();
    }else {
        let userWin = true ;
        if(userChoice ==="rock"){
            userWin = computerChoice === "paper" ? false: true;
        }else if(userChoice ==="paper"){
            userWin = computerChoice ==="scissors"? false:true;

        }else{
            userWin = computerChoice === "rock"?false:true;

        }
        showWinner(userWin, userChoice, computerChoice);

    }
};

choices.forEach((choice) => {
     choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGames(userChoice);
        
    });
});