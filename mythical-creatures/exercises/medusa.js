var Person = require('./person');
var Statue = require('./statue');

class Medusa {
    constructor(person) {
        this.name = person;
        this.statues = [];
    }
    gazeAtVictim(victim) {
        this.statues.push(new Statue(victim.name));
        if (this.statues.length > 3) {
            var backToPerson = this.statues.shift();
            var newPerson = new Person(backToPerson.name);
            newPerson.mood = 'relieved';
            return newPerson;
        }
    }
}

module.exports = Medusa;
