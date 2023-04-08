// checker function
const checker = () => {
  if (currentAwayScore > currentHomeScore) {
    console.log('Away above');
    homeHeader.classList.add('loser');
    awayHeader.classList.remove('loser');
  } else if (currentAwayScore < currentHomeScore) {
    console.log('Home above');
    awayHeader.classList.add('loser');
    homeHeader.classList.remove('loser');
  } else {
    awayHeader.classList.remove('loser');
    homeHeader.classList.remove('loser');
  }
};

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
homeScore.innerHTML = `<span class='score' id='home-score'>${currentHomeScore}</span>`;

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
  homeScore.innerHTML = `<span class='score' id='home-score'>${currentHomeScore}</span>`;
});

secondHomeBtn.addEventListener('click', function () {
  addHomeTwo();
  checker();
  homeScore.innerHTML = `<span class='score' id='home-score'>${currentHomeScore}</span>`;
});

thirdHomeBtn.addEventListener('click', function () {
  addHomeThree();
  checker();
  homeScore.innerHTML = `<span class='score' id='home-score'>${currentHomeScore}</span>`;
});

// AWAY
let currentAwayScore = 0;

const firstAwayBtn = document.getElementById('first-away');
const secondAwayBtn = document.getElementById('second-away');
const thirdAwayBtn = document.getElementById('third-away');

const awayScore = document.getElementById('away-score');

awayScore.innerHTML = `<span class='score' id='home-score'>${currentHomeScore}</span>`;

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
  awayScore.innerHTML = `<span class='score' id='away-score'>${currentAwayScore}</span>`;
});

secondAwayBtn.addEventListener('click', function () {
  addAwayTwo();
  checker();
  awayScore.innerHTML = `<span class='score' id='away-score'>${currentAwayScore}</span>`;
});

thirdAwayBtn.addEventListener('click', function () {
  addAwayThree();
  checker();
  awayScore.innerHTML = `<span class='score' id='away-score'>${currentAwayScore}</span>`;
});

// reset 
let resetBtn = document.getElementById('reset')

resetBtn.addEventListener('click', function (){
    currentAwayScore = 0;
    currentHomeScore = 0;
    awayScore.innerHTML = `<span class='score' id='away-score'>${currentAwayScore}</span>`;
    homeScore.innerHTML = `<span class='score' id='home-score'>${currentHomeScore}</span>`;
})

