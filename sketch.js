// for red, green, and blue color values
var WIDTH = 480, HEIGHT = 272
var r, g, b;
var c =  { x: WIDTH / 2, y: HEIGHT / 2, r: 100 }
var orb = { x: 0, y: 0, theta: 90, r: 5 }
var cxSlider, cySlider, resetButton

function setup() {
    createCanvas(WIDTH, HEIGHT)
    // Pick colors randomly
    r = random(255);
    g = random(255);
    b = random(255);

    cxSlider = createSlider(0, WIDTH, 10)
    cySlider = createSlider(0, HEIGHT, 10)
    resetButton = createButton('Reset')
    resetButton.mousePressed(resetValues)
    resetValues()
}

function resetValues() {
    cxSlider.value(WIDTH / 2)
    cySlider.value(HEIGHT / 2)
}

function draw() {
    update();
    background(127);
    // Draw a circle
    strokeWeight(2);
    stroke(r, g, b);
    fill(r, g, b, 127);
    //ellipse(240, 136, 200, 200);
    ellipse(c.x, c.y, c.r * 2)

    // draw orb
    stroke(50, 250, 255)
    fill(255)
    ellipse(orb.x, orb.y, orb.r * 2)
}

var dir = 1
function update() {
    // grow/shrink circle radius
    if (c.r > 300) dir = -1;
    if (c.r < 50) dir = 1;
    c.r = c.r + (dir * 0.25);
    // set circle X/Y based on sliders
    c.x = cxSlider.value()
    c.y = cySlider.value()
    // orbit
    orb.theta += 0.02
    orbit_position(orb, c.x, c.y, c.r)
}

function orbit_position(orb, center_x, center_y, orbit_radius) {
    orb.x = orbit_radius * cos(orb.theta) + center_x
    orb.y = orbit_radius * sin(orb.theta) + center_y
}
