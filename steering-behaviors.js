var font;
var vehicles = []

function preload() {
  font = loadFont('Yrsa-Bold.otf')
}

function setup() {
  createCanvas(600, 300)

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
