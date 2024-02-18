//3
for (let i = 1; i <= 5; i++) {
  console.log(`Round ${i}, you have ${5 - i} tries left`);
  // 1
  let userInput = prompt("Lets play!! Chose Rock, Paper or Sicssor");
  userInput = userInput.toLowerCase();
  //2
  let computerList = ["rock", "paper", "sicssor"];
  let computerInput = computerList[Math.floor(Math.random() * 3)];
  console.log(computerInput);
  if (userInput === computerInput) {
    console.log("your tide, try again!");
  } else if (
    (userInput === "rock" && computerInput === "sicssor") ||
    (userInput === "sicssor" && computerInput === "paper") ||
    (userInput === "paper" && computerInput === "rock")
  ) {
    console.log("YOU WIN!!!");
  } else if (
    (computerInput === "rock" && userInput === "sicssor") ||
    (computerInput === "sicssor" && userInput === "paper") ||
    (computerInput === "paper" && userInput === "rock")
  ) {
    console.log("you've lost, good luck next time");
  } else {
    console.log("chose a valid input.....");
  }
}
