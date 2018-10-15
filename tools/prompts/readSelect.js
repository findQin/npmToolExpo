/**
 * 实现prompt中多选的效果
 * - 反复删除和输出实现刷新
 * - 处理向上、向下、空格、回车事件
 */

// 配置输入输出
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const { stdin, stdout} = process;
// 引入删除行
const erase = require('./removeLine');


// 设置选项初始化
let choicePos = 2;
const choices = ['A', 'B', 'C'];
const choicesState = [false, false, false];

// 生成/刷新显示
const _genChoiceShow = (choices, choicesState) => {
    choices = Array.from(choices);
    for (let i in choices) {    
        choices[i] = [
            i == choicePos ? '-> ' : '   ',
            choicesState[i] ? '✅ ' : '  ',
            choices[i]
        ].join('');
    }
    return choices.join('\n');
}

const _refreshShow = (first) => {
    if (!first) {
        stdout.write(erase.lines(3));
    }
    stdout.write(_genChoiceShow(choices, choicesState));
}

// 显示问题
const ESC = '\u001B[';
const tips = '(空格选择，回车提交)';
stdout.write(`选择你需要的功能? ${tips}\n`);
// 显示选项
_refreshShow(true);
stdin.on('data', data => {
    switch(data.toString()) {
        case `${ESC}A`:
            choicePos = Math.max(0, choicePos - 1);
            _refreshShow(false);
            break;
        case `${ESC}B`:
            choicePos = Math.min(2, choicePos + 1);
            _refreshShow(false);
            break;
        case '\u0020':
            choicesState[choicePos] = !choicesState[choicePos];
            _refreshShow(false);
        default:
            break;
    }
})

// 读取回车事件
rl.on('line', (input) => {
    console.log(`value：${choicesState}`);
    rl.close();
});