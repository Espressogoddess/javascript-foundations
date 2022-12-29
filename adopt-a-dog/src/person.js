var Dog = require("./dog.js");

class Person {
  constructor(human, dog) {
    this.name = human;
    this.dog = dog;
    if (this.dog) {
      this.dog.friends = [];
    }
    
  }

  fillFoodBowl() {
    this.dog.hungry = false;
  }

  throwBall() {
    if (this.dog.energyLevel >= 4) {
      this.dog.energyLevel--;
      return `${this.dog.name} loves playing fetch!`;
    }
  }

  introduceNewFriends(dog) {
    this.dog.friends.push(dog.name);
  }

  adoptAPup(dogName, dogAge) { 
    if (!this.dog) {
      this.dog = new Dog({ name: dogName, age: dogAge});
    }
    else {
      return `You can't adopt ${dogName}. You already have ${this.dog.name}!`;
    }
  }
}

module.exports = Person;
