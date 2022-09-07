class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, status);
    this.legs = 0;
    this.species = "shark";
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, status);
    this.legs = 4;
    this.species = "cat";
  }
}

class Dog extends Animal {
  constructor(name, age, status, master = "") {
    super(name, age, status);
    this.master = master;
    this.legs = 4;
    this.species = "dog";
  }
  GreetMaster() {
    return `Hello ${this.master}`;
  }
}

let shark = new Shark("White Shark", 10, "bereneng");
let cat = new Cat("Garfield", 2, "bermain");
let dog = new Dog("blacky", 2, "berlari", "Frans");

console.log(shark.introduce());
console.log(cat.introduce());
console.log(dog.introduce() + " " + dog.GreetMaster());
