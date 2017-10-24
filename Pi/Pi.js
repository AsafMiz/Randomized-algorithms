var n = 60000;
var k = 1;
var pointsX = [];
var pointsY = [];
var inPoints = 0;
var pi;
var radius = 400;

function setup() {
  createCanvas(radius, radius);
  createPointsArr();
  colorMode(HSB);
}

function createPointsArr() {
  for (var i = 0; i < n; i++) {
    pointsX[i] = random(0, 400);
    pointsY[i] = random(0, 400);
    // TODO point<int,int> class
  }
}

function piVal(x, y) {
  if (inBounds(x, y)) {
    inPoints++;
  }
  pi = (inPoints / k) * 4;
  console.log(pi);
}

function inBounds(x, y) {
  //return dist(x, y, 0, 0) < radius;
  return (pow(x, 2) + pow(y, 2)) < pow(radius, 2);
}

function draw() {
  background(0, 0, 0);
  fill(0, 0, 50);
  ellipse(0, 400, 800);
  strokeWeight(2);
  if (k < n) {
    for (var i = 0; i < k; i++) {
      if (inBounds(pointsX[i], pointsY[i])) {
        stroke(0, 100, 100); //red
      } else {
        stroke(250, 100, 100); //blue
      }
      point(pointsX[i], radius - pointsY[i]);
    }
    var newK;
    if (k * 1.1 < n) {
      newK = floor(k * 1.1);
      if (newK == k) {
        newK = k + 1;
      }
    } else {
      newK = k + 1;
    }
    if (newK < n) {
      for (var i = k; i < newK; i++) {
        piVal(pointsX[i], pointsY[i]);
      }
    }
    k = newK;
  }
  noStroke();
  fill(0, 0, 100);
  text("n: " + k + "    " + "PI~ " + pi, 10, 20);
}
