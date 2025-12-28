// This variable changes (0,0) to the game window's center
// Change this to 0 to see the window's normal settings
let OFFSET = 200;

// Transformation variables - Tweak these to see Sprite Transforms
let translateX = 0;
let translateY = 0;
let scaleX = 2.0;
let scaleY = 2.0;
let rotateDegrees = 0;

function setup() {
  createCanvas(400, 400);
  describe('Apply matrix transformations to a grouped sprite.');
}

function draw() {
  background(255);

  push(); // ----- BEGIN TRANSFORM SPACE -----

  // Move world origin
  translate(OFFSET + translateX, OFFSET + translateY);

  // Apply transforms
  scale(scaleX, scaleY);
  rotate(rotateDegrees);

  drawAntSprite();

  pop(); // ----- END TRANSFORM SPACE -----
}

// -------------------------------------------------
// Sprite drawing (LOCAL SPACE, centered at 0,0)
// -------------------------------------------------
function drawAntSprite() {

  fill(255, 0, 0); // Color Red
  ellipse(0, -30, 15, 20); // Head
  ellipse(0, -9, 10, 22);  // Thorax
  ellipse(0, 7, 6, 11);    // Petiole
  ellipse(0, 16, 6, 11);   // Node
  ellipse(0, 33, 20, 24);  // Gaster

  fill(0);
  ellipse(4, -33, 4, 5);   // Eye Right
  ellipse(-4, -33, 4, 5);  // Eye Left

  // pupils
  stroke(255);
  point(4, -35);
  point(-4, -35);

  // Upper legs
  stroke(0);
  strokeWeight(3);
  line(-5, -13, -13, -21); // left front
  line(-5, -8, -16, -9); // left middle
  line(-5, -3, -14, 4); // left rear
  line(5, -13, 13, -21); // right front
  line(5, -8, 16, -9); // right mid
  line(5, -3, 14, 4); // right rear

  // Middle Legs
  strokeWeight(2);
  line(-20, -33, -13, -21); // lf
  line(-29, -2, -16, -9); // lm
  line(-27, 26, -14, 4); // lr
  line(20, -33, 13, -21); // rf
  line(29, -2, 16, -9); // rm
  line(27, 26, 14, 4); // rr

  // leg ends
  strokeWeight(1);
  line(-20, -33, -22, -47);
  line(-29, -2, -39, 10);
  line(-27, 26, -30, 46);
  line(20, -33, 22, -47);
  line(29, -2, 39, 10);
  line(27, 26, 30, 46);

  // Antenae
  line(4, -37, 11, -47); // left
  line(-4, -37, -11, -47);
  line(9, -59, 11, -47); // right
  line(-9, -59, -11, -47);
}

/* Tutorials in plain English by Dillinger © 2025 
All code is owned by its respective author 
and made available under an MIT license:
http://opensource.org/licenses/mit-license.php */