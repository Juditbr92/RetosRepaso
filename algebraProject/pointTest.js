"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var myPoint = new point_1.Point(5, 3);
console.log(myPoint.getX());
console.log(myPoint.getY());
myPoint.setX(1);
myPoint.setY(5);
console.log(myPoint.toString());
