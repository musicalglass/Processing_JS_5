// Examples of text alignment

function blah() {
  let words = ["blah", "blap", "bla-blah", "blapity"];
  let result = words[floor(random(4))];

  for (let i = 0; i < 90; i++) {
    result += " " + words[floor(random(4))];
  }
  return result;
}

function setup() {
  createCanvas(400, 400);
  background(255);

  textSize(12);

  // Shade for 3 columns
  noStroke();
  fill(244);
  rect(0,   0, 133, 400);
  rect(266, 0, 133, 400);
  fill(0);

  // LEFT column
  textAlign(LEFT, TOP);
  text("LEFT ALIGNMENT\n\n" + blah(), 2, 0, 133, 400);

  // CENTER column
  textAlign(CENTER, TOP);
  text("CENTER\n\n" + blah(), 133, 0, 133, 400);

  // RIGHT column
  textAlign(RIGHT, TOP);
  text("RIGHT ALIGNMENT\n\n" + blah(), 266, 0, 133, 400);
}

function draw() {
  // static example
}

/* Tutorials in plain English by Dillinger © 2025 
All code is owned by its respective author 
and made available under an MIT license:
http://opensource.org/licenses/mit-license.php */