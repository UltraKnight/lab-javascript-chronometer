const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  // ... your code goes here
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
}

function printSeconds() {
  // ... your code goes here
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  milUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMiliseconds())[1];
  milDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMiliseconds())[0];
}

function printSplit() {
  // ... your code goes here
  let time = chronometer.splitClick();
  let li = document.createElement("li");
  li.innerHTML = time;
  splits.appendChild(li);
}

function clearSplits() {
  // ... your code goes here
  splits.innerHTML = "";  
}

function setStopBtn() {
  // ... your code goes here
  btnLeft.classList.add('start');
  btnLeft.classList.remove('stop');

  btnLeft.innerHTML = "START";
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.classList.add('reset');
  btnRight.classList.remove('split');

  btnRight.innerHTML = "RESET";
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.classList.remove('start');
  btnLeft.classList.add('stop');

  btnLeft.innerHTML = "STOP";
}

function setResetBtn() {
  // ... your code goes here
  btnRight.classList.remove('reset');
  btnRight.classList.add('split');

  btnRight.innerHTML = "SPLIT";
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  if(btnLeft.classList.contains('start')) {
    chronometer.startClick(printTime);
    setStartBtn();
    setResetBtn();
  } else {
    chronometer.stopClick();
    setStopBtn();
    setSplitBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here'
  if(btnRight.classList.contains('reset')) {
    chronometer.resetClick();
    clearSplits();
    printTime();
  } else {
    printSplit();
  }
});