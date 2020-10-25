module.exports = function check(str, bracketsConfig) {
  // your solution
  let first = bracketsConfig.map((arr) => arr.join(''));
  let second = str;
	for (let i = 0; i < str.length; i++) {
		for (let j = 0; j < first.length; j++) {
			second = second.replace(first[j], '');
		}
	}
	if (second == '') {
		return true;
	} else {
		return false;
	}
}
