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
