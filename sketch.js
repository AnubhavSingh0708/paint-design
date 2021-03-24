// Symmetry corresponding to the number of reflections. Change the number for different number of reflections 
let symmetry = 6;   

let angle = 360 / symmetry;
let saveButton, clearButton, mouseButton, keyboardButton;
let slider;
let color;
let slider1;
let colorPicker;
function setup() { 
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(127);
slider1 = createSlider(0, 20, 100);

  slider1.position(300, 20);

  slider1.style('width', '80px');
  // Creating the save button for the file
  saveButton = createButton('save');
  saveButton.mousePressed(saveFile);
saveButton.position(0,10);
  // Creating the clear screen button
  clearButton = createButton('clear');
  clearButton.mousePressed(clearScreen);
clearButton.position(40,10);
  // Creating the button for Full Screen
  fullscreenButton = createButton('Full Screen');
  fullscreenButton.mousePressed(screenFull);
fullscreenButton.position(80,10);
  // Setting up the slider for the thickness of the brush
  brushSizeSlider = createButton('Brush Size Slider');
  brushSizeSlider.position(160,10);
  sizeSlider = createSlider(1, 32, 4, 0.1);
  sizeSlider.position(160,20);
  colorPicker = createColorPicker('#000000');
  colorPicker.position(0,40);
  colorPicker.size(100, 50);
  
}

// Save File Function
function saveFile() {
  save('design.png');
}

// Clear Screen function
function clearScreen() {
  background(127);
}

// Full Screen Function
function screenFull() {
  let fs = fullscreen();
  fullscreen(!fs);
}

function draw() {
  let sym = slider1.value();
  translate(width / 2, height / 2);
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;
    
    if (mouseIsPressed) {
      for (let i = 0; i < sym; i++) {
        rotate(360/sym);
        let sw = sizeSlider.value();
        strokeWeight(sw);
        stroke(colorPicker.color());
        line(mx, my, pmx, pmy);
        push();
        scale(1, -1);
        line(mx, my, pmx, pmy);
        pop();
      }
    }
  }
}
function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}
