"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var triangle_1 = require("./triangle");
var point_1 = require("./point");
var point1 = new point_1.Point(2, 1);
var point2 = new point_1.Point(4, 1);
var point3 = new point_1.Point(1, 9);
var myTriangle = new triangle_1.Triangle(point1, point2, point3);
console.log(myTriangle.calculateLengthSides());
