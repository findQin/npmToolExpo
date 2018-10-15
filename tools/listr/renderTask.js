
const erase = require('../prompts/removeLine');

// elegant-spinner Code
var frames = process.platform === 'win32' ?
	['-', '\\', '|', '/'] :
	['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
const spinner = function () {
	var i = 0;

	return function () {
		return frames[i = ++i % frames.length];
	};
};


const title = 'Task Name';
const spinnerTask = spinner();
const renderTask = () => {
    process.stdout.write(`${spinnerTask()} ${title}`);
}


renderTask();
const timer = setInterval(() => {
    process.stdout.write(erase.lines(1));
    renderTask();
}, 100);


setTimeout(() => {
    clearInterval(timer);
    process.stdout.write(erase.lines(1));
    process.stdout.write('Task Done!');
}, 3000)