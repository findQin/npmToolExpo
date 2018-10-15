/**
 * colorText实现控制台输出有颜色文字和背景
 * - 实现3/4位色控制台
 */

const ESC = '\u001B[';

const title = 'Text';

// 输出红色文本
console.log(`${ESC}31m${title}`);
// 输出蓝色文本+亮黄色背景
console.log(`${ESC}34;103m${title}2`);


// ANSI转义序列
// https://zh.wikipedia.org/wiki/ANSI%E8%BD%AC%E4%B9%89%E5%BA%8F%E5%88%97