class Fairy {
    constructor(fairy) {
        this.name = fairy;
        this.dust = 10;
        this.clothes = {dresses:
        ['Iris']};
        this.disposition = 'Good natured';
        this.humanWards = [];
        this.stealCount = 0;
    }
    receiveBelief() {
        this.dust++;
    }
    believe() {
        this.dust+= 10;
    }
    makeDresses(dressNames) {
        for (var i = 0; i < dressNames.length; i++) {
            this.clothes.dresses.push(dressNames[i]);
        }   
    }
    becomeProvoked() {
        this.disposition = 'Vengeful';
    }
    replaceInfant(infantInfo) {
        if (this.disposition === 'Vengeful') {
            this.stealCount++;
            infantInfo.disposition = 'Malicious';
            this.humanWards.push(infantInfo);
            if (this.stealCount >= 3) {
                this.disposition = 'Good natured';
            }
        } else {
            return infantInfo;
        }
    }
}

module.exports = Fairy;