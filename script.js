
const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const randomButton = document.getElementById("random");


function setGradient() {
    body.style.background =
        "linear-gradient(to right,"
        + color1.value
        + ", "
        + color2.value
        + ")";

    css.textContent = body.style.background + ";";
    }
// METHOD 1:
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
    	color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// // METHOD 2: (I don't understand it but it works.)
// function getRandomColor() {
//     return '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
// }

function randomColors(){
	color1.value = getRandomColor();
	color2.value = getRandomColor();

    setGradient();
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", randomColors);