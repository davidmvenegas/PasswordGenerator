const pwEl = document.getElementById('pw')
const generateEl = document.getElementById('generate')
const copyEl = document.getElementById('copy')
const lengthEl = document.getElementById('length')
const upperEl = document.getElementById('upper')
const lowerEl = document.getElementById('lower')
const numberEl = document.getElementById('number')
const symbolEl = document.getElementById('symbol')

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '1234567890'
const symbols = '!@#$%^&*()_+='

const getUppercase = () => upperLetters[Math.floor(Math.random()*upperLetters.length)]
const getLowercase = () => lowerLetters[Math.floor(Math.random()*lowerLetters.length)]
const getNumbers = () => numbers[Math.floor(Math.random()*numbers.length)]
const getSymbols = () => symbols[Math.floor(Math.random()*symbols.length)]

function generateX() {
    const arr = []
    if (upperEl.checked) arr.push(getUppercase())
    if (lowerEl.checked) arr.push(getLowercase())
    if (numberEl.checked) arr.push(getNumbers())
    if (symbolEl.checked) arr.push(getSymbols())
    if (arr.length === 0) return ""
    return arr[Math.floor(Math.random()*arr.length)]
}

function generatePassword() {
    const length = lengthEl.value
    let password = ''
    for (let i = 0; i < length; i++) {
        const x = generateX()
        password += x
    }
    pwEl.innerHTML = password
}

function copyPassword() {
    navigator.clipboard.writeText(pwEl.innerText)
    pwEl.innerText.length > 0 && alert("Copied!")
}

generateEl.addEventListener('click', generatePassword)
copyEl.addEventListener('click', copyPassword)