const container = document.getElementById("container");

// create 16 column containers
for (i = 0; i < 16; i++) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("column");
  container.appendChild(newDiv);
  // for each column create 16 divs
  for (x = 0; x < 16; x++) {
    const pixelDiv = document.createElement("div");
    pixelDiv.classList.add("pixel");
    newDiv.appendChild(pixelDiv);
  }
}

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

// for i create x containers that stack vertically
// for i create x amount of divs in container that stack horizzontally
// get all divs, add event listener, on hover change background color
