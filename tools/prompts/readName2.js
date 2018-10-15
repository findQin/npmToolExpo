
const ESC = '\u001B[';
const tips = '(your app name)';
process.stdout.write(`请输入项目名? ${tips}`);

/**
 * 不使用readline时，stdin的'data'事件仅在接收到回车时触发
 * 如果要实时触发需要设置stdin为RawMode，同时自行处理各类事件
 */
process.stdin.setRawMode( true );
process.stdin.resume();
process.stdin.setEncoding( 'utf8' );

process.stdin.once('data', (data) => {
    // 回退光标到输入位置、删除后面提示信息
    process.stdin.write(`${ESC}${tips.length + 1}D${ESC}K`);

});

process.stdin.on('data', (data) => {
    // 处理回车
    if (~data.indexOf('\r')) {
        process.stdin.end();
        process.exit();
    }
    // 处理Ctrl+C为退出
    if ( data === '\u0003' ) {
        process.exit();
    }
    process.stdout.write( data );
});

//process.stdin.end();
