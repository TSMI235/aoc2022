fn main() {
    //Part 1
    //let file = include_str!("./input.txt");
    //let score = file.lines().map( |line| line.split_once(" ").unwrap()).fold(0, |score, (opp, mine)|
    //    { match (opp, mine) {
    //        ("A", "X") => score + 4,
    //        ("A", "Y") => score + 8,
    //        ("A", "Z") => score + 3,
    //        ("B", "X") => score + 1,
    //        ("B", "Y") => score + 5,
    //        ("B", "Z") => score + 9,
    //        ("C", "X") => score + 7,
    //        ("C", "Y") => score + 2,
    //        ("C", "Z") => score + 6,
    //        _ => unreachable!()
    //    }
    //    });
    //println!("{:?}",score);

    //Part 2
    let file = include_str!("./input.txt");
    let score = file.lines().map( |line| line.split_once(" ").unwrap()).fold(0, |score, (opp, mine)|
        { match (opp, mine) {
            ("A", "X") => score + 3,
            ("A", "Y") => score + 4,
            ("A", "Z") => score + 8,
            ("B", "X") => score + 1,
            ("B", "Y") => score + 5,
            ("B", "Z") => score + 9,
            ("C", "X") => score + 2,
            ("C", "Y") => score + 6,
            ("C", "Z") => score + 7,
            _ => unreachable!()
        }
        });
    println!("{:?}",score);
}
