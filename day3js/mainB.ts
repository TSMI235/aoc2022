const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");
let sum = 0
for (let i = 0; i < lines.length; i += 3) {
	const line = lines[i];
	const line2 = lines[i+1];
	const line3 = lines[i+2];
	if (line.length == 0) {
		break;
	}
	const firstSet = new Set();
	const secondSet = new Set();
	const thirdSet = new Set();
	line.split("").forEach(val => firstSet.add(val));
	line2.split("").forEach(val => secondSet.add(val));
	line3.split("").forEach(val => thirdSet.add(val));
	const match = new Set( [...firstSet].filter(x => secondSet.has(x)));
	const match2 = new Set ( [...match].filter(x => thirdSet.has(x)));
	const val = match2.values().next().value;
	if (val == val.toLowerCase()) {
		sum += val.charCodeAt(0) - 96;
	}
	if (val == val.toUpperCase()) {
		sum += val.charCodeAt(0) - 38;
	}
	
};
console.log(sum);

