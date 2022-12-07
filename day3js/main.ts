const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");
let sum = 0
await lines.forEach((line) => {
	if (line.length == 0) {
		return;
	}
	const splitIndex = line.length/2;
	const firstCompartment = line.substring(0, splitIndex-1);
	const secondCompartment = line.substring(splitIndex, line.length);
	const firstCompartmentSet = new Set();
	firstCompartment.split("").forEach(val => firstCompartmentSet.add(val));
	secondCompartment.split("").every(val => {
		if (firstCompartmentSet.has(val)) {
			console.log(val);
			if (val == val.toLowerCase()) {
				console.log(val.charCodeAt(0) - 96);
				sum += val.charCodeAt(0) - 96;
				return false;
			}
			if (val == val.toUpperCase()) {
				console.log(val.charCodeAt(0) - 38);
				sum += val.charCodeAt(0) - 38;
				return false;
			}
		}
		return true;
	});
	
});
console.log(sum);

