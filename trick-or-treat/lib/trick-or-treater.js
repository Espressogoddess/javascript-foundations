class TrickOrTreater {
    constructor(costume, bag) {
        this.dressedUpAs = costume.style;
        this.hasCandy = false;
        // this.bag.count = 0;
        this.bag = bag;
    }
    putCandyInBag(candy) {
        if (!this.bag.candies.includes(candy)) {
            this.bag.candies.push(candy);
            this.hasCandy = true;
        }
        
    }
}
module.exports = TrickOrTreater;