function solution(keyinput, board) {
	const garoMax = (board[0] - 1) / 2;
	const seroMax = (board[1] - 1) / 2;
	let x = 0;
	let y = 0;

	keyinput.forEach((key) => {
		switch (key) {
			case 'left':
				if (x > -garoMax) x--;
				break;
			case 'right':
				if (x < garoMax) x++;
				break;
			case 'up':
				if (y < seroMax) y++;
				break;
			case 'down':
				if (y > -seroMax) y--;
				break;
			default:
				break;
		}
	});
	return [x, y];
}
