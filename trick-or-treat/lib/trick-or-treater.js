class TrickOrTreater {
    constructor(costume, bag) {
        this.dressedUpAs = costume.style;
        this.hasCandy = false;
        this.bag = bag;
        this.countCandies = 0;
    }
    putCandyInBag(candy) {
        this.bag.candies.push(candy);
        this.hasCandy = true;
        this.countCandies++;
        this.bag.count = this.countCandies; 
    }
    eat() {
        this.countCandies--;
        this.bag.candies.splice(0, 1);
    }
}
module.exports = TrickOrTreater;