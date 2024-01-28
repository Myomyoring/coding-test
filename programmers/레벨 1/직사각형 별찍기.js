process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
	const n = data.split(' ').map(Number);
	const line = `${'*'.repeat(n[0])}\n`;
	console.log(`${line.repeat(n[1])}`);
});
