class Ogre {
    constructor(ogre) {
        this.name = ogre.name;
        this.home = ogre.abode || 'Swamp';
        this.swings = 0;
    }
    encounter(human) {
        human.encounterCounter++;
    }
    swingAt(human) {
        this.swings++;
    }
}

module.exports = Ogre;


