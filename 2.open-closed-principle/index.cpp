// Bad example
class Circle {
public:
  double radius;

  Circle(double radius) : radius(radius) {}

  double getArea() {
    return 3.14159 * radius * radius;
  }
};

class Square {
public:
  double sideLength;

  Square(double sideLength) : sideLength(sideLength) {}

  double getArea() {
    return sideLength * sideLength;
  }
};

// Good example
class Shape {
public:
  virtual double getArea() = 0;
};

class Circle : public Shape {
public:
  double radius;

  Circle(double radius) : radius(radius) {}

  double getArea() {
    return 3.14159 * radius * radius;
  }
};

class Square : public Shape {
public:
  double sideLength;

  Square(double sideLength) : sideLength(sideLength) {}

  double getArea() {
    return sideLength * sideLength;
  }
};