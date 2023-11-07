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

    distanceToIOrigin():number{
        let newX = (this.x - 0) ** 2;
        let newY = (this.y - 0) ** 2;        
        return Math.sqrt(newX + newY)
    }

    calculateDistance(anotherPoint: Point):number{
        let anotherX = (this.x - anotherPoint.getX()) ** 2;
        let anotherY = (this.y - anotherPoint.getY()) ** 2;
        return Math.sqrt(anotherX + anotherY)
    }

    calcularQuadrant():number {
        if(this.x === 0 || this.y === 0){
            return 0;
        } else if(this.x > 0 && this.y > 0){
            return 1;
        } else if(this.x < 0 && this.y > 0){
            return 2;
        } else if(this.x < 0 && this.y < 0){
            return 3
        } else{
            return 4
        }
    } 
    
}
