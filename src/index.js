module.exports = function toReadable (number) {
		
	let strNum = number.toString().split('');
	let res;
	let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	let dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	let hundreds = 'hundred';

	if (number < 10) {
		res = units[strNum[0]];
	} else if (number < 20) {
		res = teens[strNum[1]];
	} else if (number < 100) {
		if (number % 10 === 0) {
			res = dozens[strNum[0] -1];
		} else {
			res = dozens[strNum[0] - 1] + ' ' + units[strNum[1]];
		}
	} else if (number < 1000) {
		if (number % 100 === 0) {
			res = units[strNum[0]] + ' ' + hundreds;
		} else if (number % 10 === 0) {
			res = units[strNum[0]] + ' ' + hundreds + ' ' + dozens[strNum[1] - 1];
		} else if (strNum[1] == 0) {
			res = units[strNum[0]] + ' ' + hundreds + ' ' + units[strNum[2]];
		} else if (strNum[1] == 1) {
			res = units[strNum[0]] + ' ' + hundreds + ' ' + teens[strNum[2]];
		} else{
			res = units[strNum[0]] + ' ' + hundreds + ' ' + dozens[strNum[1] - 1] + ' ' + units[strNum[2]]
		}
	}
	return res;
}
