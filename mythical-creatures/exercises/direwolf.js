const Stark = require("./stark");

class Direwolf {

    constructor(creature, homeName, sizeName) {
        this.name = creature;
        this.size = 'Massive';
        this.home = 'Beyond the Wall';
        this.starksToProtect =[];
        this.huntsWhiteWalkers = true;
        if (homeName) {
            this.home = homeName;
        }
        if (sizeName) {
            this.size = sizeName;
        }
    }
    protect(person) {
        if (person.location === this.home && this.starksToProtect.length < 2) {
            this.starksToProtect.push(person);
            person.safe = true;
            this.huntsWhiteWalkers = false;
        }
    }
    leave(person) {
        person.safe = false;
        this.starksToProtect.pop();
    }
}

module.exports = Direwolf;