class Vampire {
    constructor(vampName, petType) {
        this.name = vampName
        this.pet = petType
        this.thirsty = true
        this.ouncesDrank = 0

        if (!petType) {
            this.pet = 'bat'
        }   
    }
    drink() {
        if (this.ouncesDrank >= 50) {
            return 'I\'m too full to drink anymore!'
        }
        this.ouncesDrank += 10
         if (this.ouncesDrank >= 1) {
            this.thirsty = false
        }
    }
}


module.exports = Vampire;