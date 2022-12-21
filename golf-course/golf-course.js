class GolfCourse {
    constructor(courseName, diffRating, openingDays, features) {
        this.name = courseName;
        this.difficulty = diffRating;
        this.openings = openingDays;
        this.features = features;
        this.currentlyPlaying = [];
    }
    checkInGroup(group) { 
        if (this.openings >= group.length) {
            for (var i = 0; i < group.length; i++) {
                this.currentlyPlaying.unshift(group[i].name);
            }
            this.openings -= group.length;
            return 'You\'re checked in. Have fun!';
        } else {
            return 'Sorry, we are currently booked! Please come back later.'
        }
        
    }
}

module.exports = GolfCourse;
