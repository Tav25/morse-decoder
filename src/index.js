const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let word = ''
    const quantityOfLetters = expr.length / 10
    let i = 0
    do {
        letterMorze = expr.substr(i, 10)
        if (letterMorze === "**********") { word = word + ' ' }
        else {
            const g = letterMorze.indexOf("1")
            letterMorze = letterMorze.substr(g, 10).replace(/(10)/g, ".").replace(/(11)/g, "-")
            word = word + MORSE_TABLE[letterMorze]
        }
        i += 10
    } while (i < quantityOfLetters * 10)
    return word
}

module.exports = {
    decode
}