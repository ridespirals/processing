function Vehicle(x, y) {
  this.pos = createVector(random(width), random(height))
  this.vel = p5.Vector.random2D()
  this.acc = createVector()
  this.target = createVector(x, y)
  this.r = 8
  this.maxspeed = 5
  this.maxforce = 0.3
}

Vehicle.prototype.behaviors = function() {
  var arrive = this.arrive(this.target)
  this.applyForce(arrive)
}

Vehicle.prototype.applyForce = function(f) {
  this.acc.add(f)
}

Vehicle.prototype.update = function() {
  this.pos.add(this.vel)
  this.vel.add(this.acc)
  this.acc.mult(0)
}

Vehicle.prototype.show = function() {
  stroke(255)
  strokeWeight(this.r)
  point(this.pos.x, this.pos.y)
}

Vehicle.prototype.arrive = function(target) {
  var desired = p5.Vector.sub(target, this.pos)
  var dist = desired.mag()
  var speed = this.maxspeed
  if (dist < 100) {
    speed = map(dist, 0, 100, 0, this.maxspeed)
  }
  desired.setMag(speed)
  var steer = p5.Vector.sub(desired, this.vel)
  steer.limit(this.maxforce)
  return steer
}

Vehicle.prototype.seek = function(target) {
  var desired = p5.Vector.sub(target, this.pos)
  desired.setMag(this.maxspeed)
  var steer = p5.Vector.sub(desired, this.vel)
  steer.limit(this.maxforce)
  return steer
}
