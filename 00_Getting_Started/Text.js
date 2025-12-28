// Declare a variable
let myVariable = 42;

function setup() {
  createCanvas(400, 400);
  background(255);

  // Default text
  fill(0);
  textSize(14);

  // Print text
  text("hello", 35, 40);

  // Print variable
  text(myVariable, 35, 56);

  // Combine text & variable
  text("My Variable = " + myVariable, 35, 84);

  // Big red text
  fill(255, 0, 0);
  textSize(28);
  text("Big Red", 204, 38);

  // ---- FONT HANDLING (p5.js way) ----

  // Use system font by NAME (no createFont)
  textFont('fantasy');
  textSize(36);
  
  // --- FONT OPTIONS (system / CSS fonts) ---

// textFont('sans-serif');   // Clean, modern, default
// textFont('serif');        // Book / newspaper style
// textFont('monospace');    // Debug / code / retro
// textFont('cursive');     // Handwritten look
// textFont('fantasy');     // Decorative / playful

// Specific common fonts (availability depends on OS):
// textFont('Arial');
// textFont('Times New Roman');
// textFont('Courier New');
// textFont('Impact');
// textFont('Georgia');


  // Drop shadow
  fill(0, 0, 0, 180);
  text("Custom", 203, 83);

  // Foreground text
  fill(127, 0, 255);
  text("Custom", 200, 80);

  // Reset font & size
  textFont('cursive');
  textSize(14);
  fill(0);

  text('You can "Quote me" on that!', 80, 110);

  text(
`Until one is committed, there is hesitancy, the chance
to draw back, always ineffectiveness. Concerning all
acts of initiative (and creation), there is one elementary
truth, the ignorance of which kills countless ideas and
splendid plans: that the moment one definitely commits
oneself, then providence moves too. A whole stream of
events issues from the decision, raising in one’s favour
all manner of unforeseen incidents and meetings and
material assistance, which no man could have dreamed
would have come his way.
Whatever you can do or dream you can, begin it.
Boldness has genius, power and magic in it!
Begin it now.

William Hutchison Murray`,
    26, 135
  );
}

function draw() {
  // no loop needed for static text
}

/* Tutorials in plain English by Dillinger © 2025 
All code is owned by its respective author 
and made available under an MIT license:
http://opensource.org/licenses/mit-license.php */