let numbers = [];
let rndNumberIn;

let grid = document.querySelector(".grid");

let j = 1;
while (numbers.length < 100) {

    rndNumberIn = j;

    numbers.push(rndNumberIn);
    
    j++
}

// CLICK PLAY

let play = document.getElementById("play");


play.addEventListener("click", function() {
    grid.classList.add("d-flex");
    grid.innerHTML = "";
    

    for (let i = 0; i < numbers.length; i++) {
            
        let square = document.createElement("div");
        square.classList.add("square");

        square.innerHTML = numbers[i];

        grid.append(square);
    
        square.addEventListener("click", function() {
            this.classList.add("blue");
            this.classList.add("color_white");
    
            console.log(this.textContent);
            
        })
        
    }

    let arrayBombs = [];
    while (arrayBombs.length < 16) {
        let numberBomb = getRndInteger(1, 100);
        if (!arrayBombs.includes(numberBomb)) {
            arrayBombs.push(numberBomb);
        }
    }
    console.log(arrayBombs);
        
        
})


// FUNCTION

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function squareBlue() {
    square.classList.add("blue");
    square.classList.add("color_white");

    console.log(square.textContent);
    if (square.classList.contains("blue")) {
        square.classList.remove("blue");
        square.classList.remove("color_white");
    } else if (square.classList.contains("red")) {
        square.classList.remove("red");
    }
}