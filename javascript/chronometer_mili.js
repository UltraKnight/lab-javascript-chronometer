class Chronometer {
    constructor() {
      // ... your code goes here
      this.start = Date.now();
      this.currentTime = 0.00;
      this.intervalId =  0;
    }
  
    startClick(callback) {
      // ... your code goes here
      this.intervalId = setInterval(() => {
        let elapsedTime = Date.now() - this.start;
        this.currentTime = (elapsedTime / 1000).toFixed(2);
        if(typeof callback === "function") {
          callback();
        }
      }, 10);
    }

    getMinutes() {
      // ... your code goes here
      return Math.floor(Math.floor(this.currentTime) / 60);
    }
    getSeconds() {
      // ... your code goes here
      return Math.floor(this.currentTime) % 60;
    }
    getMiliseconds() {
        let mili = parseInt(this.currentTime.toString().slice(-2));
        return mili;
    }
    twoDigitsNumber(number) {
      // ... your code goes here
      let stringNumber = number.toString();
      if(number < 10) {
        stringNumber = '0' + stringNumber;
      }
      return stringNumber;
    }
    stopClick() {
      // ... your code goes here
      clearInterval(this.intervalId);
    }
    resetClick() {
      // ... your code goes here
      this.currentTime = 0;
    }
    splitClick() {
      // ... your code goes here
      let min = this.twoDigitsNumber(this.getMinutes());
      let sec = this.twoDigitsNumber(this.getSeconds());
      let mil = this.twoDigitsNumber(this.getMiliseconds());
      let fullTime = min + ":" + sec + ":" + mil;
      return fullTime;
    }
  }
  