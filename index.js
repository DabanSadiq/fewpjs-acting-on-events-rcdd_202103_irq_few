// Your code here
let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

document.addEventListener("keydown", function(e) {
  console.log(e.key);
});

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();

  }
  else if (e.key ==="ArrowRight"){
    moveDodgerRight();
  }
});

function moveDodgerRight() {
  let rightNumbers = dodger.style.right.replace("px", "");
  let right = parseInt(rightNumbers, 10);
console.log(dodger.style.right);
  if (left < 180) {
    dodger.style.right = `${right - 1}px`;
  }
}
