"use strict";
// let reload = document.getElementById("reload");

let palette1 = document.getElementById("palette1");
let palette2 = document.getElementById("palette2");
let palette3 = document.getElementById("palette3");
let palette4 = document.getElementById("palette4");
let palette5 = document.getElementById("palette5");

let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let color3 = document.getElementById("color3");
let color4 = document.getElementById("color4");
let color5 = document.getElementById("color5");

function randomColor() {
  let num1 = Math.round(Math.random() * 255);
  let num2 = Math.round(Math.random() * 255);
  let num3 = Math.round(Math.random() * 255);
  let num4 = Math.round(Math.random() * 255);

  color1.style.background = `rgb(${num1}, ${num2}, ${num3})`;
  color2.style.background = `rgb(${num3}, ${num4}, ${num1})`;
  color3.style.background = `rgb(${num1}, ${num3}, ${num2})`;
  color4.style.background = `rgb(${num4}, ${num1}, ${num3})`;
  color5.style.background = `rgb(${num3}, ${num1}, ${num4})`;

  palette1.innerText = `rgb(${num1}, ${num2}, ${num3})`;
  palette2.innerText = `rgb(${num3}, ${num4}, ${num1})`;
  palette3.innerText = `rgb(${num1}, ${num3}, ${num2})`;
  palette4.innerText = `rgb(${num4}, ${num1}, ${num3})`;
  palette5.innerText = `rgb(${num3}, ${num1}, ${num4})`;
}

setInterval(randomColor, 3000)

// reload.addEventListener("click", randomColor);

let currYear = document.getElementById("currYear");
let now = new Date();
currYear.innerText = now.getFullYear();
