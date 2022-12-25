class Sphinx {
    constructor() {
        this.name = null;
        this.riddles = [];    
    }
    collectRiddle(riddle) {
        if (this.riddles.length < 3) {
            this.riddles.push(riddle);
        }
        else {
            this.riddles.shift();
            this.riddles.push(riddle);
        }

    }
    
}

module.exports = Sphinx;