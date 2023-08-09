// Bad example
interface Vehicle {
    drive(): void;
    fly(): void;
    swim(): void;
  }
  
  class Car implements Vehicle {
    drive() {
      // Code for driving a car
    }
    
    fly() {
      // Empty method, not applicable for a car
    }
    
    swim() {
      // Empty method, not applicable for a car
    }
  }
  
  // Good example
  interface Drivable {
    drive(): void;
  }
  
  interface Flyable {
    fly(): void;
  }
  
  interface Swimmable {
    swim(): void;
  }
  
  class Car1 implements Drivable {
    drive() {
      // Code for driving a car
    }
  }
  
  class Airplane implements Drivable, Flyable {
    drive() {
      // Code for driving an airplane
    }
    
    fly() {
      // Code for flying an airplane
    }
  }