var font;
var vehicles = []
var words = []
var framecount = 0

function preload() {
    font = loadFont('steering/Yrsa-Bold.otf')
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight)

    words = [
        "spirals", "nexus", "horizon"
    ].map(w => {
        return font.textToPoints(w, 30, 185, 192)
    })
    console.log('-words-', words)

    var points = font.textToPoints('spirals', 30, 185, 192)
    vehicles = points.map(p => {
        return new Vehicle(p.x, p.y)
    })
}

function draw() {
    background(51)
    vehicles.forEach(v => {
        v.behaviors()
        v.update()
        v.show()
    })
    if (++framecount >= 60) {
        console.debug(`60 frames went by`)
        vehicles.forEach(v => {
            v.setTarget(random(width), random(height))
        })
        framecount -= 60
    }
}
