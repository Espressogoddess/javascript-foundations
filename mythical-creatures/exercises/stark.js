const Direwolf = require("./direwolf");

class Stark {
    constructor(person) {
        this.name = person.name;
        this.safe = false;
        this.location = 'Winterfell';
        if (person.area) {
            this.location = person.area;
        }
    }
    sayHouseWords() {
        if (this.safe) {
            return "The North Remembers"
        }
        return 'Winter is Coming';
    }
    callDirewolf(creature, homeName) {
        var direwolf = new Direwolf(creature, homeName);
        direwolf.home = "Riverlands";
        direwolf.protect(this);
        return direwolf;
    }

}

module.exports = Stark;