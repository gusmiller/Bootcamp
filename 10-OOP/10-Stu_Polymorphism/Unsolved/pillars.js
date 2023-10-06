// Below are 4 pillars of OOP

// 1. Encapsulation: Encapsulation is the concept of bundling data (attributes or properties) and methods (functions) that operate on that data into a single unit called an object.



class Circle {
      constructor(radius) {
            this.radius = radius;
      }

      // Getter method for accessing radius
      getRadius() {
            return this.radius;
      }

      // Method for calculating the area
      calculateArea() {
            return Math.PI * this.radius * this.radius;
      }
}

const myCircle = new Circle(5);
console.log(myCircle.getRadius()); // Accessing data through a method
console.log(myCircle.calculateArea()); // Calling a method



//2. Inheritance: Inheritance allows you to create new classes that inherit properties and methods from existing classes. It promotes code reuse and the creation of a hierarchy of classes. 

class Animal {
      constructor(name) {
            this.name = name;
      }

      speak() {
            console.log(`${this.name} makes a sound.`);
      }
}

class Dog extends Animal {
      constructor(name, breed) {
            super(name); // Call the constructor of the parent class
            this.breed = breed;
      }

      speak() {
            console.log(`${this.name} barks.`);
      }
}

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.speak(); // Overrides the speak method


// 3. Polymorphism: Polymorphism allows objects of different classes to be treated as objects of a common superclass. 

class Shape {
      constructor() {
            this.name = "";
      }

      getName() {
            return this.name;
      }

      area() {
            return 0;
      }
}

class Circle extends Shape {
      constructor(radius) {
            super();
            this.name = "Circle";
            this.radius = radius;
      }

      area() {
            return Math.PI * this.radius * this.radius;
      }
}

class Rectangle extends Shape {
      constructor(width, height) {
            super();
            this.name = "Rectangle";
            this.width = width;
            this.height = height;
      }

      area() {
            return this.width * this.height;
      }
}

const shapes = [new Circle(5), new Rectangle(4, 6)];

shapes.forEach(shape => {
      console.log(`${shape.getName()} - Area: ${shape.area()}`);
});


// 4.Abstraction: Abstraction is the process of simplifying complex reality by modeling classes based on real-world objects. It involves defining clear and concise properties and methods hiding unnecessary implementation details.  

class Vehicle {
      constructor(make, model) {
            this.make = make;
            this.model = model;
      }

      start() {
            console.log(`${this.make} ${this.model} is starting.`);
      }

      stop() {
            console.log(`${this.make} ${this.model} is stopping.`);
      }
}

const myCar = new Vehicle("Toyota", "Camry");
myCar.start();
myCar.stop();