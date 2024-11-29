let guessInput = document.getElementById('guessInput');
let checkButton = document.getElementById('checkButton');
let result = document.getElementById('result');
let restartButton  = document.getElementById('restartButton');
let easyButton = document.getElementById('easy-btn');
let mediumButton= document.getElementById('medium-btn');
let hardButton = document.getElementById('hard-btn');
let select = document.getElementById('select');
let number1 = Math.floor(Math.random()*50)+1;
let number2 = Math.floor(Math.random()*100)+1;
let number3 = Math.floor(Math.random()*200)+1;
document.write(number3)

easyButton .onclick = () =>{
 guessInput.style.display= "block";
 checkButton.style.display= "block";
 easyButton.style.display= "none";
 mediumButton.style.display= "none";
 hardButton.style.display= "none";
 checkButton.onclick = () =>{
    let  guess = Number(guessInput.value);
    if(guess <1 || guess >50){
        result.textContent = "Enter a number between 1 to 50 ";
        result.style.color= "red";
    }
    else if(guess === number1){
        result.textContent = "Congrats!!🎉🎉🎉 You win";
        result.style.color= "green";
        checkButton.disabled=true;
        restartButton.style.display='block'

    }
    else{
        result.textContent= guess < number1 ? "Too Low!! Try Again" : "Too high!! Try again";
        result.style.color= "orange";
    }
    guessInput.value= ""
    guessInput.focus();
}

}
mediumButton .onclick = () =>{
    guessInput.style.display= "block";
    checkButton.style.display= "block";
    easyButton.style.display= "none";
    mediumButton.style.display= "none";
    hardButton.style.display= "none";

    checkButton.onclick = () =>{
       let  guess = Number(guessInput.value);
       if(guess <1 || guess >100){
           result.textContent = "Enter a number between 1 to 100 ";
           result.style.color= "red";
       }
       else if(guess === number2){
           result.textContent = "Congrats!!🎉🎉🎉 You win";
           result.style.color= "green";
           checkButton.disabled=true;
           restartButton.style.display='block'
   
       }
       else{
           result.textContent= guess < number2 ? "Too Low!! Try Again" : "Too high!! Try again";
           result.style.color= "orange";
       }
       guessInput.value= ""
       guessInput.focus();
   }
   }
   
   hardButton .onclick = () =>{
    guessInput.style.display= "block";
    checkButton.style.display= "block";
    easyButton.style.display= "none";
    mediumButton.style.display= "none";
    hardButton.style.display= "none";

    checkButton.onclick = () =>{
       let  guess = Number(guessInput.value);
       if(guess <1 || guess >200){
           result.textContent = "Enter a number between 1 to 200 ";
           result.style.color= "red";
       }
       else if(guess === number3){
           result.textContent = "Congrats!!🎉🎉🎉 You win";
           result.style.color= "green";
           checkButton.disabled=true;
           restartButton.style.display='block'
   
       }
       else{
           result.textContent= guess < number3 ? "Too Low!! Try Again" : "Too high!! Try again";
           result.style.color= "orange";
       }
       guessInput.value= ""
       guessInput.focus();
   }
   }
restartButton.onclick = () =>{
    number1 = Math.floor(Math.random()*50)+1;
    number2 = Math.floor(Math.random()*100)+1;
    number3 = Math.floor(Math.random()*200)+1;
    guessInput.style.display= "none";
    checkButton.style.display= "none";
    easyButton.style.display= "block";
    mediumButton.style.display= "block";
    hardButton.style.display= "block";
    checkButton.disabled=false;
    restartButton.style.display='none'
    result.textContent = "";
    guessInput.value= ""
    guessInput.focus();
    
}