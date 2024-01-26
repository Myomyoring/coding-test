function solution(friends, gifts) {
	let table = [];
	let giftPoint = [];
	let total = [];
	for (let person of friends) {
		table.push({ name: person });
	}

	for (let str of gifts) {
		const [giver, taker] = str.split(' ');
		table.forEach((el) => {
			if (el.name === giver) {
				el[taker] ? el[taker]++ : (el[taker] = 1);
			}
			if (el.name === taker) {
				el['point'] ? el['point']-- : (el['point'] = -1);
			}
		});
	}

	table.forEach((person) => {
		let point = 0;
		friends.forEach((friend) => (person[friend] ? (point += person[friend]) : ''));
		if (person['point']) {
			point += person['point'];
		}
		giftPoint.push({ name: person.name, point: point });
	});

	table.forEach((person) => {
		let gift = 0;
		table.forEach((friend) => {
			if (person[friend.name] && friend[person.name] && person[friend.name] !== friend[person.name]) {
				person[friend.name] > friend[person.name] ? gift++ : '';
			} else if (person[friend.name] && !friend[person.name]) {
				gift++;
			} else if ((!person[friend.name] && !friend[person.name]) || person[friend.name] === friend[person.name]) {
				let p = giftPoint.find((el) => el.name === person.name);
				let f = giftPoint.find((el) => el.name === friend.name);
				if (p.point > f.point) gift++;
			}
		});
		total.push(gift);
	});
	return Math.max(...total);
}
