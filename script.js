let res = document.querySelector('#screen')
let ml = 0
let sec = 0
let min = 0
let hr = 0
let interval

function twomlDigits(digit) {
    if (digit < 10) {
        return `00${digit}`
    } else if (digit < 100) {
        return `0${digit}`
    } else {
        return digit
    }
}

function twoDigits(digit) {
    if (digit < 10) {
        return '0' + digit
    } else {
        return digit
    }
}

function timer() {
    ml++
    res.innerHTML = `${twoDigits(hr)}:${twoDigits(min)}:${twoDigits(sec)}:${twomlDigits(ml)}`
    if (ml == 100) {
        sec++
        ml = 0
    }
    if (sec == 60) {
        min++
        sec = 0
    }
    if (min == 60) {
        hr++
        min = 0
    }
}

function iniciar() {
    timer()
    interval = setInterval(timer, 10)
}


function pausar() {
    clearInterval(interval)
}

function parar() {
    ml = 0
    sec = 0
    min = 0
    hr = 0
    clearInterval(interval)
    res.innerHTML = '00:00:00:000'
}
