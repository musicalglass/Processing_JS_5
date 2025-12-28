// Transformation variables
let translateX = 200;
let translateY = 300;
let scaleX = 0.5;   // Try a negative number
let scaleY = 0.5;
let rotateDegrees = 0;

// Image variable
let my_image;

function preload() {
  my_image = loadImage("https://raw.githubusercontent.com/musicalglass/KAOS/master/assets/KAOS_drone.jpg");
}

function setup() {
  createCanvas(400, 600);
  describe('Use matrix transformations to manipulate an image.');
}

function draw() {
  background(255);

  push(); // ---- BEGIN TRANSFORM SPACE ----

  // Apply transformations
  translate(translateX, translateY);
  scale(scaleX, scaleY);
  rotate(rotateDegrees);

  // Draw image centered at local (0,0)
  // Image is 512 X 768
  image(my_image, -256, -384);

  pop(); // ---- END TRANSFORM SPACE ----
}

/* Tutorials in plain English by Dillinger © 2025 
All code is owned by its respective author 
and made available under an MIT license:
http://opensource.org/licenses/mit-license.php */