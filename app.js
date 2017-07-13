"use strict";

var user = prompt("Hi there, what's your name?");
console.log("User's name is " + user);

var wantToPlay = prompt("Nice to meet you, " + user + "! Would you like to play a game? (Type \'yes\' or \'no\')").toLowerCase();

while (wantToPlay !== "y" && wantToPlay !== "yes" && wantToPlay !== "n" && wantToPlay !== "no") {
  wantToPlay = prompt("I'm sorry, I don't understand. Please type \'yes\' or \'no\'").toLowerCase();
}

if (wantToPlay === "n" || wantToPlay === "no") {
  alert("Aww, that's too bad. Maybe next time!");
} else {
  alert("Great! Let's get started then!");

  var numCorrect = 0;

  var answerYes = ['yes', 'y'];
  var answerNo = ['no', 'n'];

  // Question 1


function rightAnswer(response, answer, msgCorrect, msgWrong) {
  if (answer.indexOf(response) === -1) {
    alert(msgWrong + "You've gotten " + numCorrect + " question(s) correct so far.");
  } else {
    numCorrect++;
    alert(msgCorrect + "You've gotten " + numCorrect + " question(s) correct so far.");
  }
}

function validAnswer(response) {
  while (response !== "y" && response !== "yes" && response !== "n" && response !== "no") {
    response = prompt("I'm sorry, I don't understand. Please type \'yes\' or \'no\'").toLowerCase();
  }
}

function question1() {
  var haveSiblings = prompt("Question 1: Am I an only child?").toLowerCase();
  console.log("User response to question 1 is " + haveSiblings + " (initial input)");
  validAnswer(haveSiblings);
  console.log("User response to question 1 is now " + haveSiblings + " (corrected, if needed)");
  var q1Correct = "Right! I have one older brother and one younger sister. ";
  var q1Wrong = "No. I have one older brother and one younger sister. ";
  rightAnswer(haveSiblings, answerYes, q1Correct, q1Wrong);
}
question1();

  // Question 2

  function question2() {
    var canDrive = prompt("Question 2: Do I have a driver's license?").toLowerCase();
    console.log("User response to question 2 is " + canDrive + " (initial input)");
    validAnswer(canDrive);
    console.log("User response to question 2 is now " + canDrive + " (corrected, if needed)");
    var q2Correct = "That's right! I got a 90/100 on my driving test (trying to paraellel park in a Eurovan sucks). ";
    var q2Wrong = "No, that's wrong. ";
    rightAnswer(canDrive, answerYes, q2Correct, q2Wrong);
  }
  question2();

  // Question 3

  function question3() {
    var brokenBones = prompt("Question 3: Have I broken any bones?").toLowerCase();
    console.log("User response to question 3 is " + brokenBones + " (initial input)");
    validAnswer(brokenBones);
    console.log("User response to question 3 is now " + brokenBones + " (corrected, if needed)");
    var q3Correct = "Correct. I broke my right ulna when I was 7. ";
    var q3Wrong = "Wrong. I broke my right ulna when I was 7. ";
    rightAnswer(brokenBones, answerYes, q3Correct, q3Wrong);
  }
  question3();


  // Question 4

  function question4() {
    var playInstrument = prompt("Question 4: Do I play any instruments?").toLowerCase();
    console.log("User response to question 4 is " + playInstrument + " (initial input)");
    validAnswer(playInstrument);
    console.log("User response to question 4 is now " + playInstrument + " (corrected, if needed)");
    var q4Correct = "Right. Unfortunately I do not play any instruments. ";
    var q4Wrong = "Wrong. Unfortunately I do not play any instruments. ";
    rightAnswer(playInstrument, answerNo, q4Correct, q4Wrong);
  }
  question4();


  // Question 5

  function question5() {
    var havePets = prompt("Question 5: Do I have any pets?").toLowerCase();
    console.log("User response to question 5 is " + havePets + " (initial input)");
    validAnswer(havePets);
    console.log("User response to question 5 is now " + havePets + " (corrected, if needed)");
    var q5Correct = "Correct. I don't have any pets right now, maybe someday. ";
    var q5Wrong = "No, but maybe someday. ";
    rightAnswer(havePets, answerNo, q5Correct, q5Wrong);
  }
  question5();

  // Question 6

  function question6() {
    var guessedNum = parseInt(prompt("Question 6: What is my favorite number? Hint: It's between 1 and 20. You have 4 tries"));
    var triesRemaining = 3;  // This starts at 3 since the user JUST guessed above

    while (triesRemaining >= 0) {

      // Forces the user to input a number
      // User is not penalized for entering a wrong guess i.e. triesRemaining NOT decremented
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
