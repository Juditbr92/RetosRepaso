import { Triangle  } from "./triangle";
import { Point } from "./point"

let point1 = new Point (2,1);
let point2 = new Point (4,1);
let point3 = new Point (1,9);

let myTriangle = new Triangle(point1, point2, point3);

console.log(myTriangle.calculateLengthSides());