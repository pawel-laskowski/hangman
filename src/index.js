// Primitive value: string. boolean, null, undefined

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done

import Hangman from "./hangman"
import getPuzzle from "./requests"

const puzzleEl = document.querySelector('#puzzle')
const guessesEL = document.querySelector('#remaining-guesses')
let gameOne

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    gameOne.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    guessesEL.textContent = gameOne.statusMessage

    gameOne.puzzle.split('').forEach(letter => {
        // puzzleEl.innerHTML += `<span>${letter}</span>`
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    });
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    gameOne = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()




// getLocation().then(async (ipinfo) => {
//     const country = await getCountry(ipinfo.country)
//     console.log(`YOUR LOCATION\ncity: ${ipinfo.city}\nregion:  ${ipinfo.region}\ncountry:  ${country.name}\n`)
// }).catch((err) => {
//     console.log(err);
// })

// getCurrentCountry().then((country) => {
//     console.log(country.name)
// }, (err) => {
//     console.log(err);
// })
