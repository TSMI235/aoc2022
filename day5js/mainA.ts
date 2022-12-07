const input = await Deno.readTextFile("./input.txt");

const [stack, instructions] = input.split("\n\n");
const stacklines = stack.split("\n");
const lastStackLine = stacklines[stacklines.length-1];
const numbers = lastStackLine.split(" ").map(x => x.trim()).filter(x => x != "");
const numberOfStacks = parseInt(numbers[numbers.length-1]);
const stacks = new Map();

// Create StackLines 
await stacklines.reverse().forEach((line) => {
	const splitLine = line.split("");
	splitLine.forEach((char, index) => {
		if (index == splitLine.length -1) {
			return;
		}	
		if (splitLine[index+1] == "]") {
			// dumb line but works
			const crainNumber = Math.floor(index / 4) + 1;
			if (stacks.get(crainNumber) == undefined) {
				stacks.set(crainNumber, [char]);
			}
			else {
				stacks.get(crainNumber).push(char);
			}
		}
	});
});

const filterWords = ["move","", " ", "from", "to"];

await instructions.split("\n").forEach((instruction) => {
	console.log(stacks);
	if (instruction == "") {
		return;
	}
	const instructionSplit = instruction.split(" ").filter(x => !filterWords.includes(x)).map(x => parseInt(x));
	console.log("Instruction = ");
	console.log(instructionSplit);
	let stackToPull = stacks.get(instructionSplit[1]);
	let movingChars = stackToPull.slice(instructionSplit[0] * -1);
	let remaingChars = stackToPull.slice(0, stackToPull.length - instructionSplit[0]);
	stacks.set(instructionSplit[1],remaingChars);
	movingChars = movingChars.reverse();
	console.log("Moving chars" + movingChars);
	let stackToPush = stacks.get(instructionSplit[2]);
	console.log("stack to push" + instructionSplit[2]);
	console.log("Stack to push" + stackToPush);
	let newStack = [...stackToPush, ...movingChars];
	console.log("New Stack" + newStack);
	stacks.set(instructionSplit[2], newStack);

});
console.log(stacks);

