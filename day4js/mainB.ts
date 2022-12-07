const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");
let fullycontained = 0;
await lines.forEach((line) => {
	console.log(line);
	if (!line.includes(',')) {
		return;
	}
	const [firstElf, secondElf] = line.split(',');
	let [firstElfStart, firstElfEnd] = firstElf.split('-');
	let [secondElfStart, secondElfEnd] = secondElf.split('-');
	firstElfStart = parseInt(firstElfStart);
	firstElfEnd = parseInt(firstElfEnd);
	secondElfStart = parseInt(secondElfStart);
	secondElfEnd = parseInt(secondElfEnd);
	if (firstElfStart > secondElfStart) {
		if (secondElfEnd >= firstElfStart) {
			console.log("contained 1");
			console.log(firstElf);
			console.log(secondElf);
			fullycontained += 1;
		}
	}
	else if (secondElfStart > firstElfStart) {
		if (firstElfEnd >= secondElfStart) {
			console.log("contained 2");
			console.log(firstElf);
			console.log(secondElf);
			fullycontained += 1;
		}
	}
	else {
		fullycontained += 1;
	}
});
console.log(fullycontained);

