const ASCII_LETTERS = require('./letters');
const COLORS = require('./colors');

class Frame {
	constructor(message = '', color = COLORS.WHITE) {
		this.message = message;
		this.color = color;
		this.lines = [];
	}

	build() {
		this.color = pickColor(this.message.length);
		this.lines = this.message
			.split('')
			.map(character => ASCII_LETTERS[character])
	.reduce(this.toSingleFrame, []);
	}



	toSingleFrame(frame, characterFrame, index) {
		for (let lineIndex = 0; lineIndex < characterFrame.length; lineIndex++) {
			let frameLine = frame[lineIndex] || "";
			frame[lineIndex] = frameLine + characterFrame[lineIndex];
		}
		return frame;
	}

	print() {
		if (this.lines.length === 0) {
			this.build();
		}
		console.log(); // Empty line
		this.lines
			.forEach(line => console.log(this.color, line));
	}
}

function pickColor(stringSize = 0) {
	const colorsList = Object.values(COLORS);
	return colorsList[stringSize % (colorsList.length -1)];
}

module.exports = Frame;