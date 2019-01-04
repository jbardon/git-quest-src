const LETTERS = require('./letters');

function addLetterInMessage(messageLines, letterLines) {
    for (let lineIndex = 0; lineIndex < letterLines.length; lineIndex++) {
        const currentLines = messageLines[lineIndex] || '';
        messageLines[lineIndex] = currentLines + letterLines[lineIndex];
    }
    return messageLines;
}

function buildMessage(message) {
    const lettersLines = message
        .split('')
        .map(letter => LETTERS[letter]);

    return lettersLines.reduce(addLetterInMessage, []);
}

function printMessage(messageLines) {
    messageLines.forEach(line => console.log(line));
}

function print(message) {
    printMessage(buildMessage(message));
}

module.exports = print;