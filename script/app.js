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
        console.log(data[0].timeframes.daily.current)
    })};

getData(timeframes);

daily.addEventListener('click', function(){
    workHour.innerText = 'TestTest1';
    workPrev.innerText = 'TestTest1';
    daily.className = 'selected';
    weekly.className = 'notSelected';
    monthly.className = 'notSelected';
});
weekly.addEventListener('click', function(){
    workHour.innerText = 'TestTest2';
    workPrev.innerText = 'TestTest2';
    daily.className = 'notSelected';
    weekly.className = 'selected';
    monthly.className = 'notSelected';
});
monthly.addEventListener('click', function(){
    workHour.innerText = 'TestTest3';
    workPrev.innerText = 'TestTest3';
    daily.className = 'notSelected';
    weekly.className = 'notSelected';
    monthly.className = 'selected';
});