class Settler {
    constructor(info) {
    this.name = info.name;
    this.age = info.age;
    this.nationality = info.nationality || 'unknown';
    this.status = 'healthy';
    this.ailments = [];
    }
    experienceDistress(illness) {
        if (this.ailments.length === 0) {
            this.ailments.push(illness);
            this.status = 'fair';
        }
        else if (this.ailments.length === 1) {
            this.ailments.push(illness);
            this.status = 'poor';
        }
        else if (this.ailments.length === 2) {
            this.ailments.push(illness);
            this.status = 'dead';
        } 
    }
    heal() {
        if (this.status !== "dead") {
            this.ailments = [];
            this.status = 'healthy';
        }
        else {
            return 'Sorry, we can\'t heal a corpse. Will needs a proper burial!';
        }
    }
}
module.exports = Settler;