let res = document.querySelector('#screen')
let ml = 0
let sec = 0
let min = 0
let hr = 0
let interval

function backgroud1min(min) {
    document.body.style.backgroundColor = 'Orange'
}

function backgroud10min(min) {
    document.body.style.backgroundColor = 'Purple'
}

function backgroud20min(min) {
    document.body.style.backgroundColor = 'Limegreen'
}

function backgroud30min(min) {
    document.body.style.backgroundColor = 'Pink'
}

function backgroud40min(min) {
    document.body.style.backgroundColor = 'DarkBlue'
}

function backgroud50min(min) {
    document.body.style.backgroundColor = 'DarkYellow'
}

function backgroud1hr(min) {
    document.body.style.backgroundColor = 'Black'
}

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
    if (min == 1) {
        backgroud1min()
    } else if (min == 10) {
        backgroud10min()
    } else if (min == 20) {
        backgroud20min()
    } else if (min == 30) {
        backgroud30min()
    } else if (min == 40) {
        backgroud40min()
    } else if (min == 50) {
        backgroud50min()
    } else if (hr == 1) {
        backgroud1hr()
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
