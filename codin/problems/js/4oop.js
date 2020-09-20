// Encapsulation: data and code are encapsulated ("name" and "talk")
//
// Abstraction: it is abstracted that an animal is passed a "name" and it has a behavior "talk"
class Animal {
  constructor(name) {
    this.name = name
  }

  talk() {
    throw 'Subclasses should implement this method'
  }
}

// Inheritance: Cat inherits "name" from Animal
//
// Polymorphism: Cat overrides the "talk" method;
// same method name, but the behavior is different from Dog#talk below
class Cat extends Animal {
  talk() {
    console.log(`Meow, my name is ${this.name}`)
  }
}

class Dog extends Animal {
  talk() {
    console.log(`Wolf, my name is ${this.name}`)
  }
}

class Zoo {
  constructor() {
    this.animals = []
  }

  add(animal) {
    this.animals.push(animal)
  }

  talkAll() {
    console.log(`All ${this.animals.length} animals will now talk:`)

    // Polymorphism:
    // the same method "talk" is called, but depending on the type
    // of the animal, the behavior is different
    this.animals.forEach(a => a.talk())
  }
}

const kitty = new Cat('Kitty')
kitty.talk()

const pluto = new Dog('Pluto')
pluto.talk()

const zoo = new Zoo()
zoo.add(kitty)
zoo.add(pluto)
zoo.talkAll()
