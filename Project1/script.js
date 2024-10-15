const buttons = document.querySelectorAll(".button");
// console.log(buttons)
const body = document.querySelector("body");
buttons.forEach((button) => {
  // console.log(buttons)
  button.addEventListener("click", (e) => {
    // if (e.target.id === "grey") {
    //   body.style.backgroundColor = "grey";
    // }
    // if (e.target.id === "white") {
    //   body.style.backgroundColor = "white";
    // }
    // if (e.target.id === "blue") {
    //   body.style.backgroundColor = "blue";
    // }
    // if (e.target.id === "yellow") {
    //   body.style.backgroundColor = "yellow";
    // }
    changeBodyColor(selectColor[e.target.id])
  });
});

const colorSelector = document.getElementById("colorSelector");

colorSelector.addEventListener("change", (e) => {
    changeBodyColor(e.target.value)
});

function changeBodyColor(color) {
  body.style.backgroundColor = color;
}

const selectColor = {
  grey: "grey",
  white: "white",
  blue: "blue",
  yellow: "yellow",
};
