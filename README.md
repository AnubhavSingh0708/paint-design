# paint-design
a web app that makes easy to paint designs using kaliedoscope
## code explanation 
1.  [index.html](#indexhtml)
2. [sketch.js](#sketchjs)
## index.html
#### making the site respnsive for any device using
```
 <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi">
```
#### importing p5.js library using
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.2.0/p5.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.2.0/addons/p5.sound.min.js"></script>
```
#### linking to style.css
```
 <link rel="stylesheet" type="text/css" href="style.css">
```
#### adding script.js
```
<script src="sketch.js"></script>
```
## sketch.js
#### creating all required variables
```
let saveButton, clearButton, mouseButton, keyboardButton;
let slider;
let color;
let slider1;
let colorPicker;
```
#### creating canvas
if we want to create any slider or button or colur picker or canvas we hav to put it in function setup() of p5.js
```
createCanvas(windowWidth, windowHeight);
```
#### creating all required things
creating slider for number of reflections
```
slider1 = createSlider(0, 20, 100);
slider1.position(300, 20);
slider1.style('width', '80px');
```
creating save button
```
 saveButton = createButton('save');
 saveButton.mousePressed(saveFile);
saveButton.position(0,10);
```
and save function `function saveFile() { save('design.png');}`
