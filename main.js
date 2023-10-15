let share = document.querySelector(".share");
let div = document.querySelector(".div");
let a = document.querySelector(".icon");
a.addEventListener("click", function () {
  div.classList.toggle("hidden");
  share.classList.toggle("hidden");
  
});
