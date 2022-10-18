let grid = document.querySelector(".grid");
let mainContainer = document.querySelector(".main-container")
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
    

    // GENERA IL ARRAY CON LE BOMBE
    let arrayBombs = [];
    while (arrayBombs.length < 16) {
        let numberBomb = getRndInteger(1, 100);
        if (!arrayBombs.includes(numberBomb)) {
            arrayBombs.push(numberBomb);
        }
    }

    console.log(arrayBombs);

    // LISTA DI SQUARES
    const squareList = document.getElementsByClassName("square");
    console.log(squareList);

    // GENERA I QUADRATI DELLA GRID
    let square;
    for (let i = 0; i < numbers.length; i++) {
            
        square = document.createElement("div");
        square.classList.add("square");

        square.innerHTML = numbers[i];
        // square.classList.add(`a${i + 1}`)

        grid.append(square);

        let click = 0;
        square.addEventListener("click", function() {
            

            if (arrayBombs.includes(parseInt(this.innerHTML))) {
                console.log(this.textContent);

                for (let k = 0; k < arrayBombs.length; k++) {
                    squareList[arrayBombs[k] - 1].classList.add("red");
                }
                
                // mainContainer.append(`Hai perso dopo ${clicks} movimenti`)

            } else {
                this.classList.add("blue");
                console.log(this.textContent);

                click++
            }

            console.log(click);
            
        })
        
        
        
    }
    
    
})




// FUNCTION --------------------------------------------------

// Numero random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
