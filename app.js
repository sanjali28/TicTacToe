let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset_btn");
let newBtn = document.querySelector("#new_btn");
let message = document.querySelector("#message");
let messageContainer = document.querySelector(".winner");

let turnO = true; // playerX, playerO

let winningPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("Box was clicked");
        if(turnO){
            // player O
            box.innerHTML = "O";
            turnO = false;
        }
        else{
            // player X
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;

        // check winner

        checkWinner();
        checkTie();
    });
});


const showWinner = (player) => {
    message.innerHTML = `Congratulations ! Winner is  Player ${player}`;
    messageContainer.classList.remove("hide");
    diableBtns();
};

const checkWinner = () => {
    for (let pattern of winningPattern){

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        // console.log(pos1Val);
        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner");
                showWinner(pos1Val);
            }
        }
    }
    return false;
};

const checkTie = () => {
    let moves = 0;
    for (box of boxes){
        if(box.disabled){
            moves++;
        }
    }

    if(moves === 9){
        message.innerHTML = `It's a tie, Try Again !`;
        messageContainer.classList.remove("hide");
    }
};

const diableBtns = () => {
    for (box of boxes){
        box.disabled = true;
    }
};

const enableBtns = () => {
    for (box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

resetBtn.addEventListener("click", () => {
    turnO = true;
    messageContainer.classList.add("hide");
    enableBtns();
});

newBtn.addEventListener("click", () => {
    turnO = true;
    messageContainer.classList.add("hide");
    enableBtns();
});