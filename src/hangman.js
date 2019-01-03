class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }

    get puzzle() {
        let guessedWord = ''
        this.word.forEach(letter => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                guessedWord += letter
            } else {
                guessedWord += '*'
            }
        })
        return guessedWord
    }

    makeGuess(char) {
        if (!this.status === 'playing') {
            return
        }
        char = char.toLowerCase()
        if (this.guessedLetters.includes(char)) {
            alert('This letter is already guessed.');

        } else {
            this.guessedLetters = [...this.guessedLetters, char]
            if (!this.word.includes(char)) {
                this.remainingGuesses--
            }
        }

        this.checkStatus()
    }

    checkStatus() {
        let finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ') 

        if (this.remainingGuesses > 0) {
            if (finished) {
                this.status = 'finished'
            } else {
                this.status = 'playing'
            }
        } else {
            this.status = 'failed'
        }
        console.log(this.status);
    }

    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}".`
        } else if (this.status === 'finished') {
            return 'Great work! You guessed the word.'
        }
    }
}

export {Hangman as default}






// const Hangman = function (word, remainingGuesses) {
//     this.word = word.toLowerCase().split('')
//     this.remainingGuesses = remainingGuesses
//     this.guessedLetters = []
//     this.status = 'playing'

//     this.getPuzzle = function () {
//         let guessedWord = ''
//         this.word.forEach(letter => {
//             if (this.guessedLetters.includes(letter) || letter === ' '){
//                 guessedWord += letter
//             } else {
//                 guessedWord += '*'
//             }
//         })
//         return guessedWord
        
//     }
// }

// Hangman.prototype.makeGuess = function (char) {
//     if (!gameOne.status === 'playing') {
//         return
//     }
//     char = char.toLowerCase()
//     if (this.guessedLetters.includes(char)) {
//         console.log('That letter is already guessed');
        
//     } else {
//         this.guessedLetters.push(char)
//         if (!this.word.includes(char)) {
//             this.remainingGuesses --     
//         }          
//     }

//     this.checkStatus() 
// }

// Hangman.prototype.checkStatus = function () {
//     let finished = this.word.every((letter) => this.guessedLetters.includes(letter))

//     if (this.remainingGuesses >0){
//         if (finished){
//             this.status = 'finished'
//         } else {
//             this.status = 'playing'    
//         }
//     } else {
//         this.status = 'failed'
//     }
//     console.log(this.status);
// }

// Hangman.prototype.getStatusMessage = function () {
//     if (this.status === 'playing') {
//         return `Guesses left: ${this.remainingGuesses}`
//     } else if (this.status === 'failed') {
//         return `Nice try! The word was "${this.word.join('')}".`
//     } else if (this.status === 'finished') {
//         return 'Great work! You guessed the word.'
//     }
// }



