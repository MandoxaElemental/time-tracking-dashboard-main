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
let yesterday = 'Yesterday - '; 
let lastWeek =  'Last Week - ';
let lastMonth = 'Last Month - ';

function getData(){
    return fetch('../data/data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        console.log(data[0].timeframes.daily.current)
        return data;
    }
)};

getData();

getData().then(data => {
    workHour.innerText = data[0].timeframes.weekly.current + 'hrs';
    workPrev.innerText = yesterday + data[0].timeframes.weekly.previous + 'hrs';
    playHour.innerText = data[1].timeframes.weekly.current + 'hrs';
    playPrev.innerText = yesterday + data[1].timeframes.weekly.previous + 'hrs';
    studyHour.innerText = data[2].timeframes.weekly.current + 'hrs';
    studyPrev.innerText = yesterday + data[2].timeframes.weekly.previous + 'hrs';
    exerciseHour.innerText = data[3].timeframes.weekly.current + 'hrs';
    exercisePrev.innerText = yesterday + data[3].timeframes.weekly.previous + 'hrs';
    socialHour.innerText = data[4].timeframes.weekly.current + 'hrs';
    socialPrev.innerText = yesterday + data[4].timeframes.weekly.previous + 'hrs';
    selfCareHour.innerText = data[5].timeframes.weekly.current + 'hrs';
    selfCarePrev.innerText = yesterday + data[5].timeframes.weekly.previous + 'hrs';
});

daily.addEventListener('click', function(){
    getData().then(data => {
        workHour.innerText = data[0].timeframes.daily.current + 'hrs';
        workPrev.innerText = yesterday + data[0].timeframes.daily.previous + 'hrs';
        playHour.innerText = data[1].timeframes.daily.current + 'hrs';
        playPrev.innerText = yesterday + data[1].timeframes.daily.previous + 'hrs';
        studyHour.innerText = data[2].timeframes.daily.current + 'hrs';
        studyPrev.innerText = yesterday + data[2].timeframes.daily.previous + 'hrs';
        exerciseHour.innerText = data[3].timeframes.daily.current + 'hrs';
        exercisePrev.innerText = yesterday + data[3].timeframes.daily.previous + 'hrs';
        socialHour.innerText = data[4].timeframes.daily.current + 'hrs';
        socialPrev.innerText = yesterday + data[4].timeframes.daily.previous + 'hrs';
        selfCareHour.innerText = data[5].timeframes.daily.current + 'hrs';
        selfCarePrev.innerText = yesterday + data[5].timeframes.daily.previous + 'hrs';
    });
    daily.className = 'selected';
    weekly.className = 'notSelected';
    monthly.className = 'notSelected';
});
weekly.addEventListener('click', function(){
    getData().then(data => {
        workHour.innerText = data[0].timeframes.weekly.current + 'hrs';
        workPrev.innerText = yesterday + data[0].timeframes.weekly.previous + 'hrs';
        playHour.innerText = data[1].timeframes.weekly.current + 'hrs';
        playPrev.innerText = yesterday + data[1].timeframes.weekly.previous + 'hrs';
        studyHour.innerText = data[2].timeframes.weekly.current + 'hrs';
        studyPrev.innerText = yesterday + data[2].timeframes.weekly.previous + 'hrs';
        exerciseHour.innerText = data[3].timeframes.weekly.current + 'hrs';
        exercisePrev.innerText = yesterday + data[3].timeframes.weekly.previous + 'hrs';
        socialHour.innerText = data[4].timeframes.weekly.current + 'hrs';
        socialPrev.innerText = yesterday + data[4].timeframes.weekly.previous + 'hrs';
        selfCareHour.innerText = data[5].timeframes.weekly.current + 'hrs';
        selfCarePrev.innerText = yesterday + data[5].timeframes.weekly.previous + 'hrs';
    });
    daily.className = 'notSelected';
    weekly.className = 'selected';
    monthly.className = 'notSelected';
});
monthly.addEventListener('click', function(){
    getData().then(data => {
        workHour.innerText = data[0].timeframes.monthly.current + 'hrs';
        workPrev.innerText = yesterday + data[0].timeframes.monthly.previous + 'hrs';
        playHour.innerText = data[1].timeframes.monthly.current + 'hrs';
        playPrev.innerText = yesterday + data[1].timeframes.monthly.previous + 'hrs';
        studyHour.innerText = data[2].timeframes.monthly.current + 'hr';
        studyPrev.innerText = yesterday + data[2].timeframes.monthly.previous + 'hrs';
        exerciseHour.innerText = data[3].timeframes.monthly.current + 'hrs';
        exercisePrev.innerText = yesterday + data[3].timeframes.monthly.previous + 'hrs';
        socialHour.innerText = data[4].timeframes.monthly.current + 'hrs';
        socialPrev.innerText = yesterday + data[4].timeframes.monthly.previous + 'hrs';
        selfCareHour.innerText = data[5].timeframes.monthly.current + 'hr';
        selfCarePrev.innerText = yesterday + data[5].timeframes.monthly.previous + 'hrs';
    });
    daily.className = 'notSelected';
    weekly.className = 'notSelected';
    monthly.className = 'selected';
});