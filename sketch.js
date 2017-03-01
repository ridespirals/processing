// for red, green, and blue color values
var WIDTH = 480, HEIGHT = 272
var r, g, b;
var c =  { x: WIDTH / 2, y: HEIGHT / 2, r: 100 }
var orb = { x: 0, y: 0, theta: 90, r: 5, speed: 0.02 }
var cxSlider, cySlider, resetButton, orbitSlider, orbitDirection

function setup() {
    createCanvas(WIDTH, HEIGHT)
    // Pick colors randomly
    r = random(255);
    g = random(255);
    b = random(255);

    // resetButton = createButton('Reset')
    createElement('h2', 'Orbit Speed')
    orbitSlider = createSlider(0, 1000, 1)
    createElement('h2', 'Orbit Direction')
    orbitDirection = createSlider(0, 1, 1)
    // resetButton.mousePressed(resetValues)

    resetValues()
}

function resetValues() {
    orbitSlider.value(20)
    orbitDirection.value(1)
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
    if (c.r > 120) dir = -1;
    if (c.r < 80) dir = 1;
    c.r = c.r + (dir * 0.25);
    // orbit
    orb.speed = orbitSlider.value() / 1000
    orb.theta += orb.speed
    _.assign(orb, orbit_position(orb.theta * orbit_direction(), c.x, c.y, c.r))
}

function orbit_direction() {
    return orbitDirection.value() === 1 ? 1 : -1
}

function orbit_position(theta, center_x, center_y, orbit_radius) {
    return {
        x: orbit_radius * cos(theta) + center_x,
        y: orbit_radius * sin(theta) + center_y
    }
}

function orbit_position2(orb, center_x, center_y, orbit_radius) {
    orb.x = orbit_radius * cos(orb.theta) + center_x
    orb.y = orbit_radius * sin(orb.theta) + center_y
}
