class Dragon {
    constructor(dragonName, riderName) {
        this.name = dragonName
        this.rider = riderName
        this.hungry = true
        this.count = 0
    }
    greet() {
        return `Hi, ${this.rider}!`
    }
    eat() {
        this.count++
        if (this.count >= 3) {
            this.hungry = false
            }
    }
}

module.exports = Dragon
