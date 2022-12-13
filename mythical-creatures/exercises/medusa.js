var Person = require('./person');
var Statue = require('./statue');

class Medusa {
    constructor(person) {
        this.name = person;
        this.statues = [];
    }
    gazeAtVictim(victim) {
        this.statues.push(new Statue(victim.name));
    }
}

module.exports = Medusa;
