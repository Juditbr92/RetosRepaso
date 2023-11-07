// Reto 1: clase point con Typescript 

export class Point {
    private x:number
    private y:number

    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }

    public getX():number{
        return this.x;
    }

    public setX(x:number){
        this.x = x;
    }

    public getY():number{
        return this.y;
    }

    public setY(y:number){
        this.y = y;
    }

    toString():string{
        return `(${this.x}, ${this.y})`
    }
}

// let coordenadas = new Point(2,0)
// console.log(coordenadas.toString());
