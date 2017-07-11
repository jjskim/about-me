"use strict";

var user = prompt("Hi there, what's your name?");
console.log("User's name is " + user);

var wantToPlay = prompt("Nice to meet you, " + user + "! Would you like to play a game? (Type \'yes\' or \'no\')").toLowerCase();

while (wantToPlay !== "y" && wantToPlay !== "yes" && wantToPlay !== "n" && wantToPlay !== "no") {
  wantToPlay = prompt("I'm sorry, I don't understand. Please type \'yes\' or \'no\'");
}

if (wantToPlay === "n" || wantToPlay === "no") {
  alert("Aww, that's too bad. Maybe next time!");
} else {
  alert("Great! Let's get started then!");
}
