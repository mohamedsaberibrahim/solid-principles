// Bad example
class Rectangle {
    constructor(public width: number, public height: number) {}
    
    setWidth(width: number) {
      this.width = width;
    }
    
    setHeight(height: number) {
      this.height = height;
    }
    
    getArea() {
      return this.width * this.height;
    }
  }
  
  class Square extends Rectangle {
    setWidth(width: number) {
      this.width = width;
      this.height = width; // Violates LSP
    }
    
    setHeight(height: number) {
      this.width = height; // Violates LSP
      this.height = height;
    }
  }
  
  // Good example
  abstract class Shape {
    abstract getArea(): number;
  }
  
  class Rectangle1 extends Shape {
    constructor(public width: number, public height: number) {
      super();
    }
    
    getArea() {
      return this.width * this.height;
    }
  }
  
  class Square1 extends Shape {
    constructor(public sideLength: number) {
      super();
    }
    
    getArea() {
      return this.sideLength * this.sideLength;
    }
  }