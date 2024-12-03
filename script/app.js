let daily = document.getElementById('daily');
let weekly = document.getElementById('weekly');
let monthly = document.getElementById('monthly');
let workHour = document.getElementById('workHour');
let workPrev = document.getElementById('workPrev');
let playHour = document.getElementById('playHour');
let playPrev = document.getElementById('playPrev');
let studyHour = document.getElementById('studyHour');
let studyPrev = document.getElementById('studyPrev');
let exerciseHour = document.getElementById('exerciseHour');
let exercisePrev = document.getElementById('exercisePrev');
let socialHour = document.getElementById('socialHour');
let socialPrev = document.getElementById('socialPrev');
let selfCareHour = document.getElementById('selfCareHour');
let selfCarePrev = document.getElementById('selfCarePrev');

function getData(){
    return fetch('../data/data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        return data.timeframes
    }
)};

getData();

daily.addEventListener('click', function(){
    workHour.innerText = 'TestTest';
    workPrev.innerText = 'TestTest';
    daily.className = 'selected';
    weekly.className = 'notSelected';
    monthly.className = 'notSelected';
});
weekly.addEventListener('click', function(){
    daily.className = 'notSelected';
    weekly.className = 'selected';
    monthly.className = 'notSelected';
});
monthly.addEventListener('click', function(){
    daily.className = 'notSelected';
    weekly.className = 'notSelected';
    monthly.className = 'selected';
});