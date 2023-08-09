// Bad example
class Vehicle {
public:
  virtual void drive() = 0;
  virtual void fly() = 0;
  virtual void swim() = 0;
};

class Car : public Vehicle {
public:
  void drive() override {
    // Code for driving a car
  }
  
  void fly() override {
    // Empty method, not applicable for a car
  }
  
  void swim() override {
    // Empty method, not applicable for a car
  }
};

// Good example
class Drivable {
public:
  virtual void drive() = 0;
};

class Flyable {
public:
  virtual void fly() = 0;
};

class Swimmable {
public:
  virtual void swim() = 0;
};

class Car : public Drivable {
public:
  void drive() override {
    // Code for driving a car
  }
};

class Airplane : public Drivable, public Flyable {
public:
  void drive() override {
    // Code for driving an airplane
  }
  
  void fly() override {
    // Code for flying an airplane
  }
};