import { Point } from "./point"

let myPoint = new Point(5,3);
console.log(myPoint.getX());
console.log(myPoint.getY());
myPoint.setX(-9);
myPoint.setY(-6);

console.log(myPoint.toString());

console.log(myPoint.distanceToIOrigin());
let newPoint = new Point(7, 10);

console.log(myPoint.calculateDistance(newPoint));

console.log(myPoint.calcularQuadrant());

// Reto 4
let points = [new Point (1,-4), new Point(4,2), new Point (-1, 16)]
let original = new Point (7,10)
console.log(original.calculateNearest(points));
