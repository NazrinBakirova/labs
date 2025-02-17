
let randomNum = Math.floor(Math.random() * 100 + 1);
let guessNum = document.querySelector(".guess_numbers_counter");
let triesNum = document.querySelector(".guess_counter");
let text = document.querySelector(".text");

console.log(randomNum);

let playBtn = document.querySelector(".table_button");
let numbers = [];
let maxTries = 3;

playBtn.addEventListener("click", () => {
    if (numbers.length >= maxTries) {
        text.textContent = "No more attempts left!";
        return;
    }
    
    let enterNum = document.getElementById("guess_input").value;
    let userNum = Number(enterNum);

    if (userNum > 100 || userNum < 1) {
        alert("Please enter a number between 1 and 100");
        return;
    }

    numbers.push(userNum);
    guessNum.textContent = numbers;
    triesNum.textContent = numbers.length;

    if (userNum == randomNum) {
        text.textContent = "You win!!!!!!!!";
     
    } else if (userNum < randomNum) {
        text.textContent = "Try greater";
    } else if (userNum > randomNum) {
        text.textContent = "Try smaller";
    }

    if (numbers.length >= maxTries && userNum !== randomNum) {
        text.textContent = "Game over! The number was " + randomNum;
      
    }
});




// let timeLine = document.querySelector(".time")

// function updateTime() {
//     let now = new Date();
//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();
//     let time = `${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
//     timeLine.innerHTML = time;
// setTimeout(updateTime,1000)
// }
// updateTime()
