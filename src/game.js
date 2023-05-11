var title = "Balloon game"

let developer = "Daniel Manu"

const BALLOON_TOTAL = 20

const balloons = []

let score = 0

// testBalloon.label = "Try it"
// testBalloon.x = 100
// testBalloon.y = 50
// testBalloon.isPoppoed = false

// testBalloon.move = function(){
//     this.x += 10;
// }

// function greeting() {
//     window.alert("Goodmorning and the other ones")
// }

function greeting(){
    // let gameTitle = title + " - " + "by " + developerloper
    let gameTitleText = `${title} - by ${developer}`

    let gameTitle = document.getElementById("game-title")
    gameTitle.innerHTML = gameTitleText
}



function setup() {
    //creates canvas object and attaches it to specified container
    let canvas = createCanvas(640, 480)
    canvas.parent("game-container")

    for(let i = 0; i < BALLOON_TOTAL; i++){
    balloons.push(new balloon(random(width), random(height), 33, color(random(255),random(255),random(255))))
    }
}

    
function draw() {
    //a nice sky blue background
    background(135, 206, 235)

    for(let b of balloons) {
        b.blowAway()
        b.checkToPop()
        fill(b.col)
        circle(b.x, b.y, b.r)
    }  

    if(score == BALLOON_TOTAL) youWin()
    
}    

function youWin(){
    noLoop()

    let para = document.createElement("p")
    para.id = "winMessage"
    para.style.fontSize = "64px"
    let textNode = document.createTextNode("You win")
    para.appendChild(textNode)

    document.getElementById("game-container").appendChild(para)

    let canvas = document.querySelector("#game-container canvas")
    canvas.remove()
}



function reset(){
    document.getElementById("score").innerHTML = 0
    score = 0
    balloons.length = 0
    
    let canvas = createCanvas(640, 480)
    canvas.parent("game-container")

    for(let i = 0; i < BALLOON_TOTAL; i++){
    balloons.push(new balloon(random(width), random(height), 33, color(random(255),random(255),random(255))))
    }

    StopWinning()
}

function StopWinning(){
    let winMessage = document.getElementById("winMessage")
    if (winMessage){
        winMessage.remove()
    }
}