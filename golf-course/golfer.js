class Golfer {
    constructor(personInfo) {
        this.name = personInfo.name;
        this.handicap = personInfo.handicap
        this.frustration = 0;
        this.confidence = 0;
    }
    calculateAvg(par) {
        var avgPar = par + this.handicap;
        return `I usually shoot a ${avgPar} on average.`
    } 
    playRound(courseInfo) {
        if (courseInfo.difficulty === 'hard') {
            this.frustration = 500;
        }
        if (courseInfo.difficulty === 'moderate') {
            this.frustration = 100;
        }
    }
    hitTheRange() {
        this.confidence += 10;
    }
    whatYaShoot(num) {
        if (num > 0) {
            this.frustration += 20;
            return 'Doh!';
        }
        if (num === 0) {
            this.frustration -= 10;
            return 'Booyah!';
        }
        if (num < 0) {
            this.frustration = 0;
            return 'I AM THE GREATEST GOLFER ALIVE!';
        }
    }
    marvel(courseInfo) {
        return `I love the ${courseInfo.features[0]} and ${courseInfo.features[1]} on this course!`;
    }
}

module.exports = Golfer;
