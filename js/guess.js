var goalNumber;
var countAttempts;
var previousInput;
function randomFunc(min, max) {
    min = Math.floor(min);
    max = Math.ceil (max) + 1;
    var random = Math.floor(Math.random() * (max - min)) + min;
    return random;
}
function load() {
    var min, max;
    if (localStorage.getItem('config') === null) {
        min = 1;
        max = 100;
        attempts = 5;
    } else {
        var config = JSON.parse(localStorage.getItem('config'));
        min = config.min;
        max = config.max;
        attempts = config.attempts;
    }
    goalNumber = randomFunc(min, max);
    console.log(goalNumber);
    countAttempts = attempts;
    document.getElementById('item__helloLbl').innerHTML = `Привет, я загадал число от ${min} до ${max} вашего диапазона.`;
    document.getElementById('item__helloLb2').innerHTML = `Попробуй угадать его за ${countAttempts} попыток!`;
}
document.addEventListener('DOMContentLoaded', load);
function gameGuess() {
    var inputGuess = Number(document.getElementById('item__guess').value);
    var help = document.getElementById('item__help');
    countAttempts--;
    if (inputGuess === goalNumber) {
        help.innerHTML = `Победа! Через 4 секунды ты вернешься обратно`
        setTimeout(function () {
            window.location.href = './index.html';
        }, 4000);
        return;
    }
    if (countAttempts === 0) {
        help.innerHTML = `Не расстраивайся...Через 4 секунды ты вернешься обратно`
        setTimeout(function () {
            window.location.href = './index.html';
        }, 4000);
        return;
    }
    if (previousInput === undefined) {
        help.innerHTML = `Не угадал. Осталось ${countAttempts} попыток `
    } else {
    if (Math.abs(goalNumber - inputGuess) > Math.abs(goalNumber - previousInput)) {
        help.innerHTML = `Холоднее. Осталось ${countAttempts} попыток`
    } else {
        help.innerHTML = `Теплее.Осталось ${countAttempts} попыток`
        }
    }
    previousInput = inputGuess; 
}
document.getElementById('item__btnTry').addEventListener('click', gameGuess);
function exitFunc() {
    window.location.href = './index.html';
}
document.getElementById('item__btnExit').addEventListener('click', exitFunc);
window.addEventListener('unload', function () {
    localStorage.removeItem('config');
})