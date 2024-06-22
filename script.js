let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset-btn")
let newBtn = document.querySelector("#new-btn")
let msg = document.querySelector("#msg")
let msgContainer = document.querySelector(".msg-container");
let turnO = true
let count =0
let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],   
]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O"
            turnO=false
        }else{
            box.innerText="X"
            turnO=true
        }
        box.disabled = true
        let end = checkWinner()
        count++
        console.log(end)
        // if(count===9 && !end){
        //     gameDraw()
        // }
    })
})

function checkWinner(){
    for(pattern of winPattern){

        let f = boxes[pattern[0]].innerText
        let s = boxes[pattern[1]].innerText
        let t = boxes[pattern[2]].innerText
        if(f!=""&&s!=""&&t!=""){
            if(f===s&&s===t){
                showWinner(f)
                return true
            }
        }
    }

    return false;
}
function showWinner(winner){
    msg.innerText="Winner is "+winner
    msgContainer.classList.remove("hide")
    disableBoxes()
}
function gameDraw(){
    msg.innerText="Game is Drawn"
    msgContainer.classList.remove("hide")
}
const disableBoxes = ()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
resetbtn.addEventListener("click",()=>{
    resetGame()
})
newBtn.addEventListener("click",()=>{
    resetGame()
})
const enableBoxes = ()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText=""
    }
}
const resetGame = ()=>{
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}