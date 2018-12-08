const LETTERS = require('./letters');
const CONSOLE_COLORS = require('./colors');

function addLetterInMessage(messageLines, letterLines) {
    for (let lineIndex = 0; lineIndex < letterLines.length; lineIndex++) {
        const currentLines = messageLines[lineIndex] || '';
        messageLines[lineIndex] = currentLines + letterLines[lineIndex];
    }
    return messageLines;
}

function buildMessage(message) {
    const lettersLines = message
        .toUpperCase()
        .split('')
        .map(letter => LETTERS[letter]);

    return lettersLines.reduce(addLetterInMessage, []);
}

function printMessage(messageLines, color = CONSOLE_COLORS.GREEN) {
    messageLines.forEach(line => console.log(color, line));
}

function print(message, color) {
    printMessage(buildMessage(message), color);
}

print('jbardon');