class Magician {
    constructor(magician) {
        this.name = `The Great ${magician.name}`;
        this.assistant = magician.assistant;
        this.confidencePercentage = 10;

        if (magician.clothing) {
        this.favoriteAccessory = magician.clothing;
        } else {
        this.favoriteAccessory = 'top hat';
        }
    }
    performIncantation(word) {
        return `${word.toUpperCase()}!`;
    }
    performTrick() {
        this.confidencePercentage += 10;
        if (this.favoriteAccessory === 'cape') {
            return 'PULL DOVE FROM SLEEVE';
        } else {
        return 'PULL RABBIT FROM TOP HAT';
        }
    }
    performShowStopper() {
        if (this.confidencePercentage >= 100 && this.assistant) {
            return 'WOW! The magician totally just sawed that person in half!';
        } else {
            return 'Oh no, this trick is not ready!'
        }
    }
}

module.exports = Magician;