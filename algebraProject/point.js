"use strict";
// Reto 1: clase point con Typescript 
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setX = function (x) {
        this.x = x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.setY = function (y) {
        this.y = y;
    };
    Point.prototype.toString = function () {
        return "(".concat(this.x, ", ").concat(this.y, ")");
    };
    Point.prototype.distanceToIOrigin = function () {
        var newX = Math.pow((this.x - 0), 2);
        var newY = Math.pow((this.y - 0), 2);
        return Math.sqrt(newX + newY);
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        var anotherX = Math.pow((this.x - anotherPoint.getX()), 2);
        var anotherY = Math.pow((this.y - anotherPoint.getY()), 2);
        return Math.sqrt(anotherX + anotherY);
    };
    return Point;
}());
exports.Point = Point;
// let coordenadas = new Point(2,0)
// console.log(coordenadas.toString());
