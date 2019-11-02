const redBlock = document.querySelector(".block--red");
const blueBlock = document.querySelector(".block--blue");
const greenBlock = document.querySelector(".block--green");
const pinkBlock = document.querySelector(".block--pink");
const grayBlock = document.querySelector(".block--gray");
const block = document.querySelectorAll(".block");

redBlock.addEventListener("click", () => {
  redBlock.style = "order: 0";
});

blueBlock.addEventListener("click", () => {
  redBlock.style = "order: 2";
  blueBlock.style = "order: 1";
  greenBlock.style = "order: 3";
  pinkBlock.style = "order: 4";
  grayBlock.style = "order: 5";
  blueBlock.addEventListener("mousedown", () => {
    blueBlock.style = "margin-left: 20%";
  });
});

greenBlock.addEventListener("click", () => {
  redBlock.style = "order: 3";
  blueBlock.style = "order: 2";
  greenBlock.style = "order: 1";
  pinkBlock.style = "order: 4";
  grayBlock.style = "order: 5";
});

pinkBlock.addEventListener("click", () => {
  redBlock.style = "order: 4";
  blueBlock.style = "order: 2";
  greenBlock.style = "order: 3";
  pinkBlock.style = "order: 1";
  grayBlock.style = "order: 5";
});

grayBlock.addEventListener("click", () => {
  redBlock.style = "order: 3";
  blueBlock.style = "order: 2";
  greenBlock.style = "order: 5";
  pinkBlock.style = "order: 4";
  grayBlock.style = "order: 1";
});
