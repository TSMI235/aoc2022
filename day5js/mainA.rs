use std::fs::File;
use std::io::{BufRead, BufReader};
use std::collections::HashMap;

fn main() -> Result<(), std::io::Error> {
  let file = File::open("./input.txt")?;
  let reader = BufReader::new(file);

  let mut input = String::new();
  reader.read_to_string(&mut input)?;

  let (stack, instructions) = input.split("\n\n").collect::<Vec<&str>>();
  let stack_lines = stack.split("\n").collect::<Vec<&str>>();
  let last_stack_line = stack_lines[stack_lines.len() - 1];
  let numbers = last_stack_line
    .split(" ")
    .map(str::trim)
    .filter(|x| x != "")
    .collect::<Vec<&str>>();
  let number_of_stacks = numbers[numbers.len() - 1].parse::<i32>()?;
  let mut stacks: HashMap<i32, Vec<char>> = HashMap::new();

  for line in stack_lines.iter().rev() {
    let split_line = line.chars().collect::<Vec<char>>();
    for (index, char) in split_line.iter().enumerate() {
      if index == split_line.len() - 1 {
        continue;
      }
      if split_line[index + 1] == ']' {
        let crain_number = (index / 4) as i32 + 1;
        let chars = stacks.entry(crain_number).or_insert(Vec::new());
        chars.push(*char);
      }
    }
  }

  let filter_words = vec!["move", "", " ", "from", "to"];

  for instruction in instructions.split("\n") {
    if instruction == "" {
      continue;
    }
    let instruction_split: Vec<i32> = instruction
      .split(" ")
      .filter(|x| !filter_words.contains(x))
      .map(|x| x.parse().unwrap())
      .collect();
    let mut stack_to_pull = stacks.get_mut(&instruction_split[1]).unwrap();
    let moving_chars = stack_to_pull.split_off(instruction_split[0] * -1);
    let stack_to_push = stacks.get_mut(&instruction_split[2]).unwrap();
    let new_stack = [&stack_to_push[..], &moving_chars[..]].concat();
    stack_to_push.clear();
    stack_to_push.extend(new_stack);
  }

  println!("{:?}", stacks);

  Ok(())
}
