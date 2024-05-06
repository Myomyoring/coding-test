function solution(participant, completion) {
	let answer = '';
	let map = new Map();

	participant.forEach((name) => {
		if (map.has(name)) {
			map.set(name, map.get(name) + 1);
		} else {
			map.set(name, 1);
		}
	});

	completion.forEach((name) => {
		if (map.has(name)) {
			map.set(name, map.get(name) - 1);
		}
	});

	for (const [k, v] of map) {
		if (map.get(k) === 1) answer = k;
	}

	//     for(const name of participant) {
	//         const tmp1 = completion.filter(el => el === name);
	//         const tmp2 = participant.filter(el => el === name);

	//         if(tmp1.length === 0 || tmp1.length !== tmp2.length) {
	//             answer = name;
	//             break;
	//         }
	//     }
	return answer;
}
