"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var myPoint = new point_1.Point(5, 3);
console.log(myPoint.getX());
console.log(myPoint.getY());
myPoint.setX(-9);
myPoint.setY(-6);
console.log(myPoint.toString());
console.log(myPoint.distanceToIOrigin());
var newPoint = new point_1.Point(7, 10);
console.log(myPoint.calculateDistance(newPoint));
console.log(myPoint.calcularQuadrant());
// Reto 4
var points = [new point_1.Point(1, -4), new point_1.Point(4, 2), new point_1.Point(-1, 16)];
var original = new point_1.Point(7, 10);
console.log(original.calculateNearest(points));
