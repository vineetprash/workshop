const paletteDiv = document.getElementById("palette");
const generateBtn = document.getElementById("generate");

async function fetchPalette() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const url = `https://www.thecolorapi.com/scheme?hex=${randomColor}&mode=analogic`;
  paletteDiv.innerHTML = "";
  // const response = await fetch(url);
  // const data = await response.json();
  
  // data.colors.forEach((color) => {
  //   const colorBox = document.createElement("div");
  //   colorBox.className = "color-box";
  //   colorBox.style.background = color.hex.value;
  //   paletteDiv.appendChild(colorBox);
  // });

  
  //   Same code using promise
  fetch(url)
    .then(response => response.json())
    .then(json => {
      json.colors.forEach((color) => {
        const colorBox = document.createElement("div");
        colorBox.className = "color-box";
        colorBox.style.background = color.hex.value;
        paletteDiv.appendChild(colorBox);
      });
    })


}

generateBtn.addEventListener("click", fetchPalette);

fetchPalette();
