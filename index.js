const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-list ul");
const listItems = document.querySelectorAll(".nav-list ul a");

hamburger.addEventListener("click", (event) => {
  if (navBar.style.left !== "100%") navBar.style.left = "100%";
  else navBar.style.left = "0%";
});

listItems.forEach((listItem) =>
  listItem.addEventListener("click", (event) => {
    navBar.style.left = "100%";
  })
);
