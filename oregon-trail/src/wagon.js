class Wagon {
    constructor(wagon) {
        this.title = wagon.name;
        this.wheels = wagon.wheels || [];
        this.axles = wagon.axles || [];
        this.oxen = wagon.oxen || [];
        this.yokes = wagon.yokes || [];
        this.food = wagon.food;
        this.ammunition = wagon.ammunition;
        this.clothes = wagon.clothes;
        this.settlers = wagon.settlers || [];
    }
    addPart(part) {
        if (part.type === 'ox') {
            this.oxen.push(part);
        }
        if (part.type === 'wheel') {
            this.wheels.push(part);
        }
        if (part.type === 'axle') {
            this.axles.push(part);
        }
        if (part.type === 'yoke') {
            this.yokes.push(part);
        }
    }

    canTravel() {
        if (this.checkWheels() &&
            this.checkAxles() &&
            this.checkOxen() &&
            this.yokes.length &&
            this.checkRatio() &&
            this.checkSettlers()) {
            return true;
        } else {
            return false;
        }
    }

    checkWheels() {
        for (var i = 0; i < this.wheels.length; i++) {
            if (this.wheels[i].broken) {
                return false;
            }
        }
        if (this.wheels.length > 3) {
            return true;
        }
    }

    checkAxles() {
        for (var i = 0; i < this.axles.length; i++) {
            if (this.axles[i].broken) {
                return false;
            }
        }
        if (this.axles.length >= 2) {
            return true;
        }
    }

    checkOxen() {
        var workingOxen = 0;
        for (var i = 0; i < this.oxen.length; i++) {
            if (!this.oxen[i].broken) {
                workingOxen++;
            }
        }
        if (this.oxen.length >= 2 && workingOxen >= 2) {
            return true;
        }
        return false;
    }
    checkRatio() {
        if (this.oxen.length / this.yokes.length === 2) {
            return true;
        }
        return false;
    }

    checkSettlers() {
        var livingSettlers = 0;
        for (var i = 0; i < this.settlers.length; i++) {
            if (this.settlers[i].status !== 'dead') {
                livingSettlers++;
            }
        }
        if (livingSettlers > 0) {
            return true;
        }
        return false;
    }
}

module.exports = Wagon;