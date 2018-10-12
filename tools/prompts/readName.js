
const readline = require('readline');

process.stdout;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// 方式1：使用readline包含的提问信息
// rl.question('项目名称?', (answer) => {
//   // 对答案进行处理
//   console.log(`value：${answer}`);

//   rl.close();
// });


// 方式2：包含提示(tips)的提问
const ESC = '\u001B[';
const tips = '(your app name)';
process.stdout.write(`请输入项目名? ${tips}`);

process.stdin.once('data', (data) => {
    // 回退光标到输入位置、删除后面提示信息
    process.stdin.write(`${ESC}${tips.length + 1}D${ESC}K`);
    // 将删除的输入数据补上
    process.stdout.write(data);
});
rl.on('line', (input) => {
    console.log(`value：${input}`);
    rl.close();
});