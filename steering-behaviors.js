var font;

function preload() {
  font = loadFont('Yrsa-Bold.otf')
}

function setup() {
  createCanvas(600, 300)
  background(51)

  var points = font.textToPoints('spirals', 30, 185, 192)
  console.log(points)

  var totalPoints = points.length;
  for (var i = 0; i < totalPoints; i++) {
    var p = points[i];
    stroke(0, 255, 255)
    strokeWeight(4)
    point(p.x, p.y)
  }
}
