const paletteDiv = document.getElementById("palette");
const generateBtn = document.getElementById("generate");

async function fetchPalette() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const url = `https://www.thecolorapi.com/scheme?hex=${randomColor}&mode=analogic`;
  paletteDiv.innerHTML = "";

  // fetch the data from url string, 
  // parse and store it in data variable
  // use dom to add respective color-box elements in the palleteDiv

  
  
  

}

generateBtn.addEventListener("click", fetchPalette);

fetchPalette();
