// Bad example
class Circle {
    radius: number;
  
    constructor(radius: number) {
      this.radius = radius;
    }
  
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
}
  
class Square {
    sideLength: number;

    constructor(sideLength: number) {
        this.sideLength = sideLength;
    }

    getArea(): number {
        return this.sideLength * this.sideLength;
    }
}
  
// Good example
abstract class Shape {
    abstract getArea(): number;
}

class Circle1 extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Square1 extends Shape {
    sideLength: number;

    constructor(sideLength: number) {
        super();
        this.sideLength = sideLength;
    }

    getArea(): number {
        return this.sideLength * this.sideLength;
    }
}