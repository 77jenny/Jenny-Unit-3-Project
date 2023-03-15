let startButton = document.querySelector(".startButton");
let storyOpening = document.querySelector(".storyOpening");
let sceneOne = document.querySelector(".sceneOne");

startButton.onclick = function() {
  storyOpening.style.display = "none";
  sceneOne.style.display = "block";
};

let optionOne = document.querySelector(".optionOne");
let optionTwo = document.querySelector(".optionTwo");
let firstOption = document.querySelector(".firstOption");
let secondOption = document.querySelector(".secondOption");

optionOne.onclick = function() {
  sceneOne.style.display = "none";
  firstOption.style.display = "block";
};

optionTwo.onclick = function() {
  sceneOne.style.display = "none";
  secondOption.style.display = "block";
};

let secOpbutton = document.querySelector(".secOpbutton");
let questionTwo = document.querySelector(".questionTwo");
let firstOpbutton = document.querySelector(".firstOpbutton");

firstOpbutton.onclick = function() {
  firstOption.style.display = "none";
  questionTwo.style.display = "block";
};

secOpbutton.onclick = function() {
  secondOption.style.display = "none";
  questionTwo.style.display = "block";
};

let oneOption = document.querySelector(".oneOption");
let oneOptionAnswer = document.querySelector(".oneOptionAnswer");

oneOption.onclick = function() {
  questionTwo.style.display = "none";
  oneOptionAnswer.style.display = "block";
};

let twoOption = document.querySelector(".twoOption");
let twoOptionAnswer = document.querySelector(".twoOptionAnswer");

twoOption.onclick = function() {
  questionTwo.style.display = "none";
  twoOptionAnswer.style.display = "block";
};

let choiceOne= document.querySelector(".choiceOne");
let optionChoiceThree= document.querySelector(".optionChoiceThree");
let answerChoiceOneResult= document.querySelector(".answerChoiceOneResult");

choiceOne.onclick = function() {
  optionChoiceThree.style.display = "none";
  answerChoiceOneResult.style.display = "block";
};
/*

let continue = document.querySelector(".continue");
let answerChoiceOneResult = document.querySelector(".answerChoiceOneResult");
let goodEnding = document.querySelector(".goodEnding");

continue.onclick = function() {
  answerChoiceOneResult.style.display = "none";
  goodEnding.style.display = "block";
};

/*/