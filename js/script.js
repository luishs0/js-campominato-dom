let numbers = [];
let rndNumberIn;

let grid = document.querySelector(".grid");

while (numbers.length < 100) {

    rndNumberIn = getRndInteger(1, 100);

    if (!numbers.includes(rndNumberIn)) {
        numbers.push(rndNumberIn);
    } 

   
}

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

    let play = document.getElementById("play");


    play.addEventListener("click", function() {
        grid.classList.add("d-flex");

        if (square.classList.contains("blue")) {
            square.classList.remove("blue");
            square.classList.remove("color_white");
        }
    
    })
}

// FUNCTION

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }