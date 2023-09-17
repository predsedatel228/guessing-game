class GuessingGame {
    constructor() {}

    setRange(min, max) {
      this.array = [];
      this.start = 0;
      
      for (this.i = min; this.i<=max; this.i++) {
        this.array.push(this.i);
      }
      this.start = 0;
      this.end = this.array.length - 1;
      this.guess(this.array)
    }

    guess() {
      this.mid = Math.round((this.end - this.start)/2) + this.start;
      return this.array[this.mid]
    }

    lower() {
      this.end = this.mid;
      this.guess()
    }

    greater() {
      this.start = this.mid;
      this.guess()
    }

}

module.exports = GuessingGame;



