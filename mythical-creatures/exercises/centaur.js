class Centaur {
    constructor(personName) {
        this.name = personName.name;
        this.breed = personName.type;
        this.cranky = false;
        this.standing = true;
        this.count = 0;
        this.layingDown = false;
    }
    shootBow() {
        if (!this.cranky && !this.layingDown) {
        this.count++;
        if (this.count >= 3) {
            this.cranky = true;
            return 'Twang!!!';
        }
        return 'Twang!!!'
        } else {
            return "NO!";
        }
    }
    run() {
        if (!this.cranky && !this.layingDown) {
        this.count++;
        if (this.count >=3) {
            this.cranky = true
        }
        return 'Clop clop clop clop!!!';
        } else {
            return "NO!";
        }
    }
    sleep() {
        if (this.standing) {
            return "NO!";
        } else {
            this.cranky = false;
            return "ZZZZ";
        }
    }
    layDown() {
        this.layingDown = true;
        this.standing = false;
    }
    standUp() {
        this.layingDown = false;
        this.standing = true;
    }
    drinkPotion() {
        if (this.standing) {
            this.cranky = false;
        } else {
            return 'Not while I\'m laying down!';
        }
        
    }
}

module.exports = Centaur;