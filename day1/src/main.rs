fn main() {
    let file = include_str!("./input.txt");
    let split = file.split("\n\n");
    let mut sums: Vec<i32> = Vec::new();
    for x in split {
        let split2 = x.split("\n");
        let mut sum = 0;
        for y in split2 {
            let int = y.parse::<i32>();
            if int.is_ok() {
                sum = sum + int.unwrap();
            }
            sums.push(sum);    
        }
    }
    sums.sort();
    println!("{:?}", sums[sums.len()-1]);

    let threesum = sums[sums.len()-1] + sums[sums.len()-2] + sums[sums.len()-3];
    println!("{:?}", threesum);
}
