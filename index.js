const Frame = require('./frame');

function print(message) {
	const frame = new Frame(message);
	frame.print();
}

function progressiveFrames(frames, character, charIndex, message) {
	for (let frameIndex = 0; frameIndex < message.length; frameIndex++) {
		let frame = frames[frameIndex] || new Frame();
		if (charIndex <= frameIndex) {
			frame.message += character;
		}
		frames[frameIndex] = frame;
	}
	return frames;
}

function printAnimated(message) {
	const frames = message
		.split('')
		.reduce(progressiveFrames, []);

	let frameIndex = 0;
	setInterval(() => {
		console.clear();
		frames[frameIndex++].print();
		frameIndex = frameIndex > frames.length -1 ? 0 : frameIndex;
	}, 500);
}

//print('JBARDON');
printAnimated('JBARDON');