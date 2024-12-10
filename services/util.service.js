export const utilService = {
    loadFromStorage,
    saveToStorage,
    makeId,
    makeLorem,
    getRandomIntInclusive,
    getDayName,
    getMonthName,
    animateCSS
}

function makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

function makeLorem(size = 100) {
    const words = [
        'The sky', 'above', 'the port', 'was', 'the color', 'of nature', 'tuned', 'to', 'a live channel',
        'All', 'this happened', 'more or less', 'I', 'had', 'the story', 'bit by bit', 'from various people',
        'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', 
        'a pleasure', 'to', 'burn',
        'shadows', 'lingered', 'in the corners', 'of thought', 'ancient', 'whispers', 'echoed', 'through the halls',
        'the clock', 'ticked', 'in defiance', 'of silence', 'unspoken', 'promises', 'loomed', 'on the horizon',
        'secrets', 'buried', 'beneath', 'layers', 'of memory', 'the wind', 'carried', 'fragments', 'of dreams',
        'into the night', 'words', 'lost', 'to time', 'a fleeting', 'moment', 'etched', 'into', 'eternity',
        'the forest', 'stood', 'like a sentinel', 'guarding', 'its mysteries', 'a world', 'unseen', 'and untouched',
        'hearts', 'beating', 'in rhythm', 'with the unknown', 'fate', 'weaved', 'its threads', 'through', 'destinies',
        'a single spark', 'ignited', 'the cosmos', 'and', 'everything', 'changed', 'forever'
      ];
    var txt = ''
    while (size > 0) {
        size--
        txt += words[Math.floor(Math.random() * words.length)]
        if (size >= 1 ) txt += ' '
    }
    return txt
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
    const data = localStorage.getItem(key)
    return (data) ? JSON.parse(data) : undefined
}

function getDayName(date, locale) {
    date = new Date(date)
    return date.toLocaleDateString(locale, { weekday: 'long' })
}

function getMonthName(date) {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ]
    return monthNames[date.getMonth()]
}

function animateCSS(el, animation='bounce') {
    const prefix = 'animate__'
    return new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`
        el.classList.add(`${prefix}animated`, animationName)
        function handleAnimationEnd(event) {
            event.stopPropagation()
            el.classList.remove(`${prefix}animated`, animationName)
            resolve('Animation ended')
        }

        el.addEventListener('animationend', handleAnimationEnd, { once: true })
    })
}

export function debounce(func, time = 500) {
    var timeoutId
    return (...args) => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            func(...args)
        }, time);
    }
}