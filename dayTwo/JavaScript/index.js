const { count } = require("console");
const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const inputArray = input.split("\n");
var passCount = 0;
inputArray.forEach((password) => {
	pwdArray = password.split(" ");
	var [min, max] = pwdArray[0].split("-");
	var ch = pwdArray[1].slice(0, -1);
	var pass = pwdArray[2];
	var regx = new RegExp(ch, "g");
	var res = pass.match(regx);
	if (res) {
		if (res.length >= min && res.length <= max) {
			passCount++;
		}
	}
});
console.log("Part ONE-->", passCount);

var passCount = 0;
inputArray.forEach((password) => {
	pwdArray = password.split(" ");
	var [min, max] = pwdArray[0].split("-");
	let minIndex = parseInt(min) - 1;
	let maxIndex = parseInt(max) - 1;
	var ch = pwdArray[1].slice(0, -1);
	var pass = pwdArray[2];
	var regx = new RegExp(ch, "g");
	var res = pass.match(regx);
	if ((pass[minIndex] == ch) ^ (pass[maxIndex] == ch)) {
		passCount++;
	}
	// console.log(minIndex, maxIndex);
	// if (pass.charAt(minIndex) == ch && pass.charAt(maxIndex) == ch) {
	// 	return;
	// } else if (pass.charAt(minIndex) == ch) {
	// 	passCount++;
	// } else if (pass.charAt(maxIndex) == ch) {
	// 	passCount++;
	// }
});
console.log("Part TWO-->", passCount);
