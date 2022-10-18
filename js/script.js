let grid = document.querySelector(".grid");
let numbers = [];

let j = 1;
while (numbers.length < 100) {

    numbers.push(j);
    
    j++
}

// CLICK PLAY
let play = document.getElementById("play");


play.addEventListener("click", function() {
    // Cancello i quadrati che c'erano nella grid
    grid.innerHTML = "";
    
    // GENERA I QUADRATI DELLA GRID
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

    // GENERA IL ARRAY CON LE BOMBE
    let arrayBombs = [];
    while (arrayBombs.length < 16) {
        let numberBomb = getRndInteger(1, 100);
        if (!arrayBombs.includes(numberBomb)) {
            arrayBombs.push(numberBomb);
        }
    }
    console.log(arrayBombs);
        
        
})


// FUNCTION --------------------------------------------------

// Numero random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}