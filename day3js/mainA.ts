const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");
let sum = 0
await lines.forEach((line) => {
	if (line.length == 0) {
		return;
	}
	console.log("--------");
	const splitIndex = line.length/2;
	const firstCompartment = line.substring(0, splitIndex);
	const secondCompartment = line.substring(splitIndex, line.length);
	const firstSet = new Set();
	const secondSet = new Set();
	firstCompartment.split("").forEach(val => firstSet.add(val));
	secondCompartment.split("").forEach(val => secondSet.add(val));
	console.log(line.length);
	console.log(splitIndex);
	console.log( new Array( ...firstSet).join(' '));
	console.log( new Array( ...secondSet).join(' '));
	const match = new Set( [...firstSet].filter(x => secondSet.has(x)));
	console.log(match.size);
	const val = match.values().next().value;
	console.log(val);
	if (val == val.toLowerCase()) {
		console.log(val.charCodeAt(0) - 96);
		sum += val.charCodeAt(0) - 96;
	}
	if (val == val.toUpperCase()) {
		console.log(val.charCodeAt(0) - 38);
		sum += val.charCodeAt(0) - 38;
	}
	
});
console.log(sum);

