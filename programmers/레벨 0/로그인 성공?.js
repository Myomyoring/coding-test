function solution(id_pw, db) {
	let answer = undefined;
	const [id, pw] = id_pw;
	db.map((member) => {
		if (member[0] === id && member[1] === pw) answer = 'login';
		else if (member[0] === id) answer = 'wrong pw';
	});
	return answer ?? 'fail';
}
