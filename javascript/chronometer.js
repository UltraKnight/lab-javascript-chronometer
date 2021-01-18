class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId =  0;
  }

  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if(typeof callback === "function") {
        callback();
      }
    }, 1000);
  }
  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    // ... your code goes here
    return this.currentTime - this.getMinutes() * 60;
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
    let fullTime = this.twoDigitsNumber(this.getMinutes()) + ":" + this.twoDigitsNumber(this.currentTime);
    return fullTime;
  }
}
