const container = document.getElementById("container");
const slider = document.getElementById("myRange");
const sliderText = document.getElementById("sliderValue");
let gridValue = `1fr `;

function setGridColumns() {
  container.style.gridTemplateColumns = `${gridValue.repeat(slider.value)}`;
}
setGridColumns();

// create x column containers
function createPixels() {
  for (i = 0; i < slider.value; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("column");
    container.appendChild(newDiv);
    // for each column create x divs
    for (x = 0; x < slider.value; x++) {
      const pixelDiv = document.createElement("div");
      pixelDiv.classList.add("pixel");
      newDiv.appendChild(pixelDiv);
    }
  }
}
createPixels();

function setPixelActive() {
  //create nodelist of all pixels
  const pixelList = document.querySelectorAll(".pixel");
  //turn that nodelist into an array
  const pixelArray = [...pixelList];
  //check each pixel for event
  pixelArray.forEach((pixel) => {
    pixel.addEventListener("mouseover", () => {
      pixel.classList.add("activepixel");
    });
  });
}
setPixelActive();

//slider logic
sliderText.innerText = `${slider.value} x ${slider.value} `;
slider.oninput = () => {
  setGridColumns();
  sliderText.innerText = `${slider.value} x ${slider.value} `;
  container.innerHTML = "";
  createPixels();
  setPixelActive();
};
