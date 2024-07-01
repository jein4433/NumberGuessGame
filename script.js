let computerNum = 0;
let gameButton = document.getElementById("game-button")
console.log(gameButton)
let userInput = document.getElementById("user-input")
let gameResult = document.getElementById("game-result")
let resetButton = document.getElementById("reset-button")
let chances = 3;
let gameOver = false;
let gameChance = document.getElementById("game-chance")
let history = []

gameButton.addEventListener("click" , play)
resetButton.addEventListener("click" , reset)
userInput.addEventListener("focus" , function (){
     userInput.value = ''
});

function randomNum() {
    computerNum = Math.floor(Math.random() * 100)+ 1;
    console.log("정답" , computerNum);
}

function play() {
    let userValue = userInput.value

    if (userValue < 1 || userValue > 100){
        gameResult.textContent="1~100 사이 숫자를 입력해 주세요."
        return;
    }

    if (history.includes(userValue)){
        gameResult.textContent = "벌써 입력한 숫자입니다. 다른 숫자를 입력해 주세요."
        return;
    }

    chances -- ;
    gameChance.textContent = `남은 기회: ${chances}번`;
    console.log("chance",chances)

    if (computerNum > userValue){
        gameResult.textContent = "UP!!!"
        gameOver = false
    } else if (computerNum < userValue){
        gameResult.textContent = "DOWN!!!"
        gameOver = false
    } else {
        gameResult.textContent = "CORRECT!!!"
        gameOver = true
    }

    history.push(userValue)
    console.log(history);

    if(chances == 0){
        gameOver = true;
        if (userValue != computerNum){
        gameResult.textContent = `정답은 ${computerNum}이었습니다!`}
    }
    if (gameOver == true){
        return gameButton.disabled = true;
    }

}

function reset(){
    userInput.value = "";
    randomNum();
    history = [];
    chances = 3;
    gameChance.textContent = `남은 기회: ${chances}번`;
    gameButton.disabled = false;
    
    gameResult.textContent = "숫자 맞추기 게임!"
}

randomNum();
