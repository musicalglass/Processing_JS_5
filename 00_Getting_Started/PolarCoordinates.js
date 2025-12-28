/* <Description>
   Using sin & cos to calculate correct distance
   to move in X and Y based on rotation.
</Description> */

let car_Position_X = 187;
let car_Position_Y = 202;

let car_Speed = 0;
const ACCELERATION = 0.2;
const TOP_SPEED = 5;

let car_Rotation = 0;
const CAR_ROTATION_SPEED = 3;

let keys = {}; // multi-key input

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  frameRate(60);
  textAlign(CENTER);
}

function keyPressed() {
  keys[keyCode] = true;
}

function keyReleased() {
  delete keys[keyCode];
}

function updateCar() {

  if (keys[LEFT_ARROW])  car_Rotation -= CAR_ROTATION_SPEED;
  if (keys[RIGHT_ARROW]) car_Rotation += CAR_ROTATION_SPEED;

  if (key === ' ') { // Spacebar
    if (car_Speed < TOP_SPEED) {
      car_Speed += ACCELERATION;
    }
  } else if (car_Speed > 0) {
    car_Speed -= ACCELERATION;
    if (car_Speed < 0.1) car_Speed = 0;
  }

  car_Rotation %= 360;

  // 🔑 DEGREE-BASED MOTION (now works)
  car_Position_X += car_Speed * cos(car_Rotation);
  car_Position_Y += car_Speed * sin(car_Rotation);

  // Screen wrap
  if (car_Position_X > 410) car_Position_X = -10;
  if (car_Position_X < -10) car_Position_X = 410;
  if (car_Position_Y > 410) car_Position_Y = -10;
  if (car_Position_Y < -10) car_Position_Y = 410;
}

function drawCar() {
  push();

  translate(car_Position_X, car_Position_Y);
  rotate(car_Rotation);

  fill(255, 166, 0);
  rect(-20, -12, 40, 24);

  fill(0);
  rect(-20, 13, 15, 10);
  rect(-20, -23, 15, 10);
  rect(4, 13, 15, 10);
  rect(4, -23, 15, 10);

  pop();
}

function draw() {
  background(255);

  text(
    "Click inside game window to activate keyboard\n" +
    "LEFT / RIGHT = steer   SPACE = accelerate",
    width / 2, 30
  );

  updateCar();
  drawCar();
}

/* Tutorials in plain English by Dillinger © 2025 
All code is owned by its respective author 
and made available under an MIT license:
http://opensource.org/licenses/mit-license.php */