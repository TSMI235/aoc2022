const input = await Deno.readTextFile("./input.txt");

const split = input.split("");

let pos = 0;
await split.every((char, index) => {
	if (index == input.length -14) {
		pos = 0;
		return false;
	}
	else if (index > input.length -14) {
		return false;
	}
	let set = new Set(input.substring(index,index+14));
	console.log(set);
	if(set.size == 14) {
		console.log("hit");
		console.log(index + 14);
		return false;
	}
	return true;
});

console.log(pos);
