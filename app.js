"use strict";

// Takes in the user's input, and an array of valid responses
//    checks if the user input is a valid string, else repeats prompt until one is entered and returns it
function checkValidString(userInput, validInputs) {
  while (validInputs.indexOf(userInput) === -1) {
    userInput = prompt("I'm sorry, I don't understand. Please type \'yes\' or \'no\'").toLowerCase();
  }
  return userInput;
}

// Start of prompt
var user = prompt("Hi there, what's your name?");
console.log("User's name is " + user);

var wantToPlay = prompt("Nice to meet you, " + user + "! Do you want to play a guessing game about me? (Type \'yes\' or \'no\')").toLowerCase();

wantToPlay = checkValidString(wantToPlay, ["yes", "no", "y", "n"]);

if (wantToPlay === "n" || wantToPlay === "no") {  // end -- no game
  alert("Aww, that's too bad. Maybe next time!");
} else if (wantToPlay == "y" || wantToPlay === "yes") {  // continue - play game
  alert("Great! Let's get started then!");
  var numCorrect = 0; // var to count correct responses

  // Array of questions to be asked
  var questionsArray = [];
  questionsArray.push("Question 1: Am I an only child?");
  questionsArray.push("Question 2: Do I have a driver's license?");
  questionsArray.push("Question 3: Have I broken any bones?");
  questionsArray.push("Question 4: Do I play any instruments?");
  questionsArray.push("Question 5: Do I have any pets?");

  // Array of accepted answers
  var answersArray = [];
  answersArray.push(["no", "n"]);
  answersArray.push(["yes", "y"]);
  answersArray.push(["yes", "y"]);
  answersArray.push(["no", "n"]);
  answersArray.push(["no", "n"]);

  // Array of responses to alert, based on user's answer
  var responsesArray = [];
  responsesArray.push(["Right! I have one older brother and one younger sister.", "No. I have one older brother and one younger sister."]);
  responsesArray.push(["That's right! I got a 90/100 on my driving test (trying to paraellel park in a Eurovan sucks).", "No, that's wrong."]);
  responsesArray.push(["Correct. I broke my right ulna when I was 7.", "Wrong. I broke my right ulna when I was 7."]);
  responsesArray.push(["Right. Unfortunately I do not play any instruments.", "Wrong. Unfortunately I do not play any instruments."]);
  responsesArray.push(["Correct. I don't have any pets right now, maybe someday.", "No, but maybe someday."]);


  // Asks question from questionsArray, compares user's response to corresponding answer from
  //    answersArray, and prints appropriate response from responsesArray
  //    index is used to determine what question to ask, what is the correct answer, & how to respond
  function askYesNoQuestion(index) {
    var userResponse = prompt(questionsArray[index]).toLowerCase();
    checkValidString(userResponse, ["yes", "no", "y", "n"]);
    if (userResponse === answersArray[index][0] || userResponse === answersArray[index][1]) {
      numCorrect++;
      alert(responsesArray[index][0] + " You\'ve gotten " + numCorrect + " question(s) right so far!");
    } else {
      alert(responsesArray[index][1]);
    }
  }

  // Asks the first 5 yes/no questions in questionsArray
  //    checks answers and responds accordingly to the user
  function questionGame() {
    for (var i = 0; i < questionsArray.length; i++) {
      askYesNoQuestion(i);
    }
  }
  
  questionGame();

  // Question 6
  function question6() {
    var guessedNum = parseInt(prompt("Question 6: What is my favorite number? Hint: It's between 1 and 20. You get 4 guesses."));
    var triesRemaining = 3;  // This starts at 3 since the user JUST guessed above

    while (triesRemaining >= 0) {

      // Forces the user to input a number
      //    User is not penalized for entering a wrong guess
      while(isNaN(guessedNum)) {
        guessedNum = parseInt(prompt("That's not a number! Please enter a number."));
      }
        if (triesRemaining === 0 && guessedNum !== 13) {
          alert("You\'re out of guesses. My favorite number is 13.");
        } else if (guessedNum < 1 || guessedNum > 20) { // User guesses out of range
          guessedNum = parseInt(prompt("No, remember it's between 1 and 20. You have " + triesRemaining + " guess(es) left."));
        } else if (guessedNum > 13) {  // Guessed too high
          guessedNum = parseInt(prompt("Too high. You have " + triesRemaining + " guess(es) left."));
        } else if (guessedNum < 13) {  // Guesse too low
          guessedNum = parseInt(prompt("Too low. You have " + triesRemaining + " guess(es) left."));
        } else if (guessedNum === 13) { // Guesses correct!
          numCorrect++;
          alert("That's right! My favorite number is 13. You've gotten " + numCorrect + " question(s) correct so far.");
          triesRemaining = -1;    // Dummy value, just to exit the while loop
        }
      triesRemaining--;
    }
  }

  question6();


  // Question 7
  function question7() {
    var sports = ["basketball", "boxing", "soccer", "tennis"];
    var sportsGuess = prompt("Last question: I love watching sports. Can you guess one of my favorites? You get 6 guesses.").toLowerCase();
    var sportGuessesLeft = 5; // Starts at 5 since the first guess is above

    while (sportGuessesLeft >= 0) {
      if (sports.indexOf(sportsGuess) === -1 && sportGuessesLeft !== 0) { // wrong guess
        sportsGuess = prompt("Nope, that's not one of them. You have " + sportGuessesLeft + " guess(es) left.").toLowerCase();
      } else if (sports.indexOf(sportsGuess) === -1 && sportGuessesLeft === 0) { // last AND wrong guess
        alert("You're out of guesses! My favorite sports are basketball, boxing, soccer, and tennis.");
      } else {     //  an index other than -1 is returned, ie. it's IN the array
        numCorrect++;
        alert("Yep correct! My favorite sports are basketball, boxing, soccer, and tennis.");
        sportGuessesLeft = -1;  // dummy value, just to exit the while loop
      }
      sportGuessesLeft--;
    }
  }

  question7();


  // End of game message
  if (numCorrect === 0) {
    alert("You got 0 questions correct, " + user + ". Better luck next time!");
  } else {
    alert("Good job, " + user + "! You got " + numCorrect + " out of 7 questions correct!");
  }
}
