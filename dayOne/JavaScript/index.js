const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const inputArray = input.split("\n").map(Number);

//Part ONE
inputArray.forEach((num1) => {
	inputArray.forEach((num2) => {
		if (num1 + num2 == 2020) {
			console.log(num1, "+", num2, "=", num1 + num2);
			console.log(num1, "*", num2, "=", num1 * num2);
		}
	});
});

//Part TWO
inputArray.forEach((num1) => {
	inputArray.forEach((num2) => {
		inputArray.forEach((num3) => {
			if (num1 + num2 + num3 == 2020) {
				console.log(num1, "+", num2, "+", num3, "=", num1 + num2 + num3);
				console.log(num1, "*", num2, "*", num3, "=", num1 * num2 * num3);
			}
		});
	});
});
