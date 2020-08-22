
//default values:
let selectedColor = "#ff6633"
let selectedSize = 25;
let selectedFont = "Arial";

const colorElement = document.getElementById('color');
colorElement.value = selectedColor;

const sizeElement = document.getElementById('size');
sizeElement.value = selectedSize;

const fontElement = document.getElementById('font');
fontElement.value = selectedFont;

//setting  output element attributes to default values:
const outputElement = document.getElementById('output');
outputElement.value="quick brown fox jumps over the lazy dog"
outputElement.style.color = selectedColor;
outputElement.style.fontSize= selectedSize;
outputElement.style.fontFamily = selectedFont;

//adding value change handlers to input elements:

colorElement.addEventListener('change', (event) => {
  selectedColor = event.target.value;
  outputElement.style.color = selectedColor;
  console.log(`You selected Color ${event.target.value}`);
});

sizeElement.addEventListener('change', (event) => {
  selectedSize = event.target.value;
  outputElement.style.fontSize = selectedSize+"px";
  console.log(`You selected Size ${event.target.value}`);
});

fontElement.addEventListener('change', (event) => {
  selectedFont = event.target.value;
  outputElement.style.fontFamily = selectedFont;
  console.log(`You selected Font ${event.target.value}`);
});