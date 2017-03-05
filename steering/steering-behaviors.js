var font;
var vehicles = []

var sat, bright;

function preload() {
  font = loadFont('steering/Yrsa-Bold.otf')
}

function setup() {
  createCanvas(600, 300)

  // createElement('h3', 'Saturation')
  // sat = createSlider(0, 255)
  // createElement('h3', 'Brightness')
  // bright = createSlider(0, 255)

  sat.value(127)
  bright.value(127)

  var points = font.textToPoints('spirals', 30, 185, 192)
  var totalPoints = points.length;
  for (var i = 0; i < totalPoints; i++) {
    var p = points[i];
    var vehicle = new Vehicle(p.x, p.y)
    vehicles.push(vehicle)
  }
}

function draw() {
  background(51)
  vehicles.forEach(v => {
    v.behaviors()
    v.update()
    v.show()
  })
}
