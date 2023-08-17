// all reference
function textvalue() {
  let textArea = document.getElementById("textArea");
  return textArea;
}

function blue(ID) {
  let i = document.getElementById(ID);
  i.classList.toggle("blue");
  return i;
}

document.getElementById("bold").addEventListener("click", () => {
  let textArea = textvalue();
  textArea.classList.toggle("bold");
  blue("1");
});
document.getElementById("italic").addEventListener("click", () => {
  let textArea = textvalue();
  textArea.classList.toggle("italic");
  blue("2");
});
document.getElementById("underLine").addEventListener("click", () => {
  let textArea = textvalue();
  textArea.classList.toggle("underline");
  blue("3");
});
document.getElementById("leftAlign").addEventListener("click", () => {
  let textArea = textvalue();
  textArea.classList.toggle("leftalign");
  blue("4");
});
document.getElementById("centerAlign").addEventListener("click", () => {
  let textArea = textvalue();
  textArea.classList.toggle("centeralign");
  blue("5");
});
document.getElementById("rightAlign").addEventListener("click", () => {
  let textArea = textvalue();
  textArea.classList.toggle("rightalign");
  blue("6");
});
document.getElementById("justify").addEventListener("click", () => {
  let textArea = textvalue();
  textArea.classList.toggle("justifyalign");
  blue("7");
});
document.getElementById("texttransfrom").addEventListener("click", () => {
  let textArea = textvalue();
  textArea.classList.toggle("upperCase");
});

let fontSize = document.getElementById("fontSize");
fontSize.addEventListener("input", () => {
  let textArea = textvalue();
  let inputValue = parseFloat(fontSize.value);
  let fontSizes = inputValue + "px";
  textArea.style.fontSize = fontSizes;
});

let color = document.getElementById("color");
color.addEventListener("input", () => {
  let textArea = textvalue();
  let inputColor = color.value;
  textArea.style.color = inputColor;
});
