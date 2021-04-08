function start() {
    var minValue = Number(document.getElementById('item__minValue').value);
    var maxValue = Number(document.getElementById('item__maxValue').value);
    var attempts = Number(document.getElementById('item__attempts').value);

    if (minValue > 0 && minValue % 1 === 0 && minValue <=200 &&
        maxValue > 0 && maxValue % 1 === 0 && maxValue <= 200 &&
        maxValue >= minValue) {
        var config = {
            min: minValue,
            max: maxValue,
            attempts: attempts
        }
        localStorage.setItem('config', JSON.stringify(config));
        window.location.href = './guess.html'
        localStorage.getItem('config', JSON.stringify(config));
    } else {
        alert("Введите правильные данные");
    }
}
document.getElementById('item__btnGenerate').addEventListener('click', start);
document.getElementById('item__btnDefault').addEventListener('click', function () {
    window.location.href = './guess.html'
    
});
