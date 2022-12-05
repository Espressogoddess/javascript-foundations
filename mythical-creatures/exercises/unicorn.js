class Unicorn {
  constructor(name, color) {
    this.name = name
    this.color = color
    if (color === undefined) {
      this.color = 'white'
    }
  }
  isWhite() {
    if (this.color === undefined || this.color !== 'white') {
    return false
    } else {
      return true
    }
  }
  says(phrase) {
    return `**;* ${phrase} *;**`
  }

}

module.exports = Unicorn;
