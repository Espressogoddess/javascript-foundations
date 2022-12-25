class Part {
    constructor(part) {
        this.type = part;
        this.broken = false;
        this.count = 0;
    }

    break() {
        this.broken = true;
        this.count++;
    }
    repair() {
        if (this.count > 1) {
            return `This ${this.type} has seen better days, we\'ll need a brand new one!`;
        }
        this.broken = false;
    }
}

module.exports = Part;
