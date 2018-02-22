process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        if (instruction === '/exit') {
            process.stdout.write('Quitting app!\n');
            process.exit();
       	 } else if (instruction === 'info'){
		console.log('Jezyk Systemowy to: ' + process.env.LANG + ' 'Wersja Node to:' + process.version.node);
		process.exit();
	 } else {
            process.stderr.write('Wrong instruction!');
        }
    }
});