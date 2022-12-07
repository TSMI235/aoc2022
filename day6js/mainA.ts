const input = await Deno.readTextFile("./input.txt");

const split = input.split("");

await split.every((char, index) => {
	if (index == input.length -4) {
		pos = 0;
		return false;
	}
	else if (index > input.length -4) {
		return false;
	}
	let set = new Set(input.substring(index,index+4));
	console.log(set);
	if(set.size == 4) {
		console.log(index + 4);
		return false;
	}
	return true;
});

