function solution(board) {
	let answer = 0;

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (board[i][j] === 1) {
				board[i][j - 1] = board[i][j - 1] || 2;
				board[i][j + 1] = board[i][j + 1] || 2;
				board[i - 1][j] = board[i - 1][j] || 2;
				board[i + 1][j] = board[i + 1][j] || 2;
				board[i - 1][j - 1] = board[i - 1][j - 1] || 2;
				board[i - 1][j + 1] = board[i - 1][j + 1] || 2;
				board[i + 1][j - 1] = board[i + 1][j - 1] || 2;
				board[i + 1][j + 1] = board[i + 1][j + 1] || 2;
			}
		}
	}

	board.forEach((row) => {
		for (let i = 0; i < row.length; i++) {
			if (row[i] === 0) answer++;
		}
	});

	return answer;
}
