let [milliseconds, second, minute, hours, , ] = [0, 0, 0]; //or
// let milliseconds = 0;
// let second = 0;
// let minute = 0;

let timerRef = document.querySelector('#timer');
let int = null;

document.getElementById('start-button').addEventListener('click', () => {
    if (int !== null) {
        clearInterval(int); // stop the executtion of an interval
        //use to stop the time
        //SetTimeout() it call a function after number of milliseconds execute only once
    }
    int = setInterval(mainTime, 10); // call a function in specified intervals
});

document.getElementById('stop-button').addEventListener('click', () => {
    clearInterval(int);
});

document.getElementById('reset-button').addEventListener('click', () => {
    clearInterval(int);
    [milliseconds, second, minute, hours] = [0, 0, 0];
    timerRef.innerHTML = '00 : 00 : 00';
});

function mainTime() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        second++;
        if (second == 60) {
            second = 0;
            minute++;
            if (minute == 60) {
                minute = 0;
            }
        }
    }

    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timerRef.innerHTML = ` ${m} : ${s} : ${ms}`;
}