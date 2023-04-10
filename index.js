// checker function
const checker = () => {
  if (currentAwayScore > currentHomeScore) {
    homeHeader.classList.add('loser');
    awayHeader.classList.remove('loser');
  } else if (currentAwayScore < currentHomeScore) {
    awayHeader.classList.add('loser');
    homeHeader.classList.remove('loser');
  } else {
    resetClasses()
  }
};

// reset classes
const resetClasses = () => {
  awayHeader.classList.remove('loser');
  homeHeader.classList.remove('loser');
}

//
let homeHeader = document.getElementById('home-header');
let awayHeader = document.getElementById('away-header');

// initialize home score
let currentHomeScore = 0;

// get home buttons
const firstHomeBtn = document.getElementById('first-home');
const secondHomeBtn = document.getElementById('second-home');
const thirdHomeBtn = document.getElementById('third-home');

// get home score
const homeScore = document.getElementById('home-score');

// render initial home score
homeScore.innerHTML = `${currentHomeScore}`;

// home functions
function addHomeOne() {
  currentHomeScore += 1;
}

function addHomeTwo() {
  currentHomeScore += 2;
}

function addHomeThree() {
  currentHomeScore += 3;
}

//
firstHomeBtn.addEventListener('click', function () {
  addHomeOne();
  checker();
  homeScore.innerHTML = `${currentHomeScore}`;
});

secondHomeBtn.addEventListener('click', function () {
  addHomeTwo();
  checker();
  homeScore.innerHTML = `${currentHomeScore}`;
});

thirdHomeBtn.addEventListener('click', function () {
  addHomeThree();
  checker();
  homeScore.innerHTML = `${currentHomeScore}`;
});

// AWAY
let currentAwayScore = 0;

const firstAwayBtn = document.getElementById('first-away');
const secondAwayBtn = document.getElementById('second-away');
const thirdAwayBtn = document.getElementById('third-away');

const awayScore = document.getElementById('away-score');

awayScore.innerHTML = `${currentHomeScore}`;

function addAwayOne() {
  currentAwayScore += 1;
}

function addAwayTwo() {
  currentAwayScore += 2;
}

function addAwayThree() {
  currentAwayScore += 3;
}

firstAwayBtn.addEventListener('click', function () {
  addAwayOne();
  checker();
  awayScore.innerHTML = `${currentAwayScore}`;
});

secondAwayBtn.addEventListener('click', function () {
  addAwayTwo();
  checker();
  awayScore.innerHTML = `${currentAwayScore}`;
});

thirdAwayBtn.addEventListener('click', function () {
  addAwayThree();
  checker();
  awayScore.innerHTML = `${currentAwayScore}`;
});

// reset 
let resetBtn = document.getElementById('reset')

resetBtn.addEventListener('click', function (){
    currentAwayScore = 0;
    currentHomeScore = 0;
    awayScore.innerHTML = `${currentAwayScore}`;
    homeScore.innerHTML = `${currentHomeScore}`;
    resetClasses()
})

