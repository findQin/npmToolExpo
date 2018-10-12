
const ESC = '\u001B[';
const tips = '(your app name)';
process.stdout.write(`请输入项目名? ${tips}`);

process.stdin.setRawMode( true );
process.stdin.resume();
process.stdin.setEncoding( 'utf8' );

process.stdin.once('data', (data) => {
    // 回退光标到输入位置、删除后面提示信息
    process.stdin.write(`${ESC}${tips.length + 1}D${ESC}K`);

});

process.stdin.on('data', (data) => {
    if (~data.indexOf('\r')) {
        process.stdin.end();
        process.exit();
    }
    if ( data === '\u0003' ) {
        process.exit();
    }
    process.stdout.write( data );
});

//process.stdin.end();
