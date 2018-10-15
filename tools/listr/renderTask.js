/**
 * renderTask实现listr效果
 * - 实现任务执行时动画效果
 */


// 引入行擦除工具
const erase = require('../prompts/removeLine');

/**
 * elegant-spinner
 * 实现返回当前动画帧
 */
var frames = process.platform === 'win32' ?
	['-', '\\', '|', '/'] :
	['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
const spinner = function () {
	var i = 0;
	return function () {
		return frames[i = ++i % frames.length];
	};
};

/**
 * title: 初始化任务标题
 * spinnerTask: 产生旋转动画对象
 * renderTask: 任务渲染
 */
const title = 'Task Name';
const spinnerTask = spinner();
const renderTask = () => {
    process.stdout.write(`${spinnerTask()} ${title}`);
}

/**
 * 刷新动画效果
 */
renderTask();
const timer = setInterval(() => {
    process.stdout.write(erase.lines(1));
    renderTask();
}, 100);

/**
 * 任务执行完后清除动画效果
 */
setTimeout(() => {
    clearInterval(timer);
    process.stdout.write(erase.lines(1));
    process.stdout.write('Task Done!');
}, 3000)