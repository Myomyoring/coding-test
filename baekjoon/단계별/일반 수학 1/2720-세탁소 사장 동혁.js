const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
input.shift();
const coins = [25, 10, 5, 1];

input.forEach((restCoin) => {
	let cnt = [0, 0, 0, 0];
	for (let i = 0; i < coins.length; i++) {
		if (coins[i] <= restCoin) {
			cnt[i] = Math.floor(restCoin / coins[i]);
			restCoin = restCoin % coins[i];
		}
	}
	console.log(cnt.join(' '));
});
