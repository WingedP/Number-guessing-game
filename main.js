//1>>>>>     RANDOM NUMBER:
let randomNumber = Math.floor (Math.random()*100+1); 
let resultArea = document.getElementById ("resultArea");
let chanceArea = document.getElementById ("chanceArea");
console.log("random number", randomNumber)
//1>>>>>     INPUT BOX:
let userguess = document.getElementById("userguess");
//1>>>>>     HISTORY:
let historyArea = document.getElementById("historyArea");
//1>>>>>     BUTTON:
let guessButton = document.getElementById("guessButton");
//1>>>>>     READ VALUE FROM USERS' INPUT:
guessButton.addEventListener("click", guess);


//TEXT RUN//
let i = 0;
let txt = '20 seconds. 3 turns. Guess the correct random number.';
let speed = 130;

function typeWriter() {
    if (i < txt.length) {
      document.getElementById("textrun").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

window.onload = typeWriter();
////////////

let history = []
let chance = 3; 

//1>>>>>     TIME COUNTING:
let time = 20;
let mytime;


function timecounting() {
    mytime = setInterval(() => {
    time -= 1
    document.getElementById ('timecount').innerHTML = time
    if (time <= 0) {
        timeout (mytime);  
    }
}, 1000); 
}

function timeout(mytime) {
    clearInterval(mytime);
    resultArea.innerHTML = "you lost, out of time.";
    guessButton.disabled = true;
    userguess.disabled = true;
}

startButton.addEventListener("click", reset);

function reset() {
    time = 20;
    document.getElementById ('timecount').innerHTML = time

    chance = 3;
    history = [];
    chanceArea.innerHTML = chance;
    historyArea.innerHTML = [];


    resultArea.innerHTML = "";
    guessButton.disabled = false;
    userguess.disabled = false;
    timecounting()
}

chanceArea.innerHTML = chance;
function guess() {
    let userNumber = userguess.value;
    if(history.includes(userNumber)){
        // return    resultArea.innerHTML = "ALREADY GUESSED THAT NUMBER";
        return alert("NUH UH. ALREADY GUESSED THAT NUMBER :)")
    }
    
    
    chance = chance -1;
    
    history.push(userNumber);
    console.log ("Here's user's number:",userNumber);
    userguess.value = "";
    if (chance > 0) {
        let answerResponse = "";
        //1>>>>>     COMPARE USERNUMBER AND RANDOM:
        if (userNumber == randomNumber) {
            console.log ("Correct! GGEZ ^___^");
            answerResponse = "Correct! GGEZ ^___^";
        } else if (userNumber > randomNumber) {
            console.log ("too big >___<");
            answerResponse = "too big >___<";
        } else if (userNumber < randomNumber) {
            console.log ("too small >___<");
            answerResponse = "too small >___<";
        } 
        resultArea.innerHTML = `${answerResponse}`;
        chanceArea.innerHTML = ` ${chance}`;
        historyArea.innerHTML = `${history}`;
    } else {
        resultArea.innerHTML = "GAME OVER! You lost (We all lost in the end).";
        guessButton.disabled = true;
        userguess.disabled = true;
        chanceArea.innerHTML = "0";
        historyArea.innerHTML = `${history}`;
        clearInterval(mytime);
        time =0;
        document.getElementById ('timecount').innerHTML = time
    
    }


}




// if (history,includes(userNumber)) {
//     alert ("duplicated result: try again.")
// }

