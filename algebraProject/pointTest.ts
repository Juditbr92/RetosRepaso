import { Point } from "./point"

let myPoint = new Point(5,3);
console.log(myPoint.getX());
console.log(myPoint.getY());
myPoint.setX(1);
myPoint.setY(5);

console.log(myPoint.toString());
