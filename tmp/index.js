let cube = document.querySelector('.cube');
let bodyElement = document.querySelector("body");
bodyElement.addEventListener("keydown", enableMouseMove, false);
bodyElement.addEventListener("keyup", disableMouseMove, false);
bodyElement.addEventListener("mousemove", getMouseDirection, false);

let mouseMoveEnable = false;
let mouseMoving = false;

let xDirection = "";
let yDirection = "";
 
let oldX = window.innerWidth / 2;
let oldY = window.innerHeight / 2;

let setMouseStart = [oldX,oldY];

let currentRotationX = 0;
let currentRotationY = 0;


let mat = {
    a1:0, b1:0, c1:0, d1:0, 
    a2:0, b2:0, c2:0, d2:0, 
    a3:0, b3:0, c3:0, d3:0,
    a4:0, b4:0, c4:0, d4:0}

function enableMouseMove(e){
    if ( e.key === "Control" ) mouseMoveEnable = true;
}

function disableMouseMove(e){
    mouseMoving = false;
    if ( e.key === "Control" ) mouseMoveEnable = false;
}

function getMouseDirection(e) {
    if ( !mouseMoveEnable ) return;

    if ( !mouseMoving ) {
        oldX = e.pageX;
        oldY = e.pageY;
        mouseMoving = true;
    }
    //deal with the horizontal case
    if (oldX < e.pageX) {
        xDirection = "right";
    } else {
        xDirection = "left";
    }
 
    //deal with the vertical case
    if (oldY < e.pageY) {
        yDirection = "down";
    } else {
        yDirection = "up";
    }
 
    xDiff = e.pageX - oldX;
    yDiff = oldY - e.pageY;

    currentRotationX += yDiff / 2
    currentRotationY += xDiff / 2

    oldX = e.pageX;
    oldY = e.pageY;



    cube.setAttribute("style", `transform: translateZ(calc(-0.5 * var(--d) )) rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg);`);
}