var set1 = new Set([1, 2, 3, 4]),
    set2 = new Set([3, 4, 5, 6]);

const intersection = new Set(Array.from(set1).filter(x => set2.has(x)));//Set {3, 4}
const difference = new Set(Array.from(set1).filter(x => !set2.has(x))); //Set {1, 2}

let engineering = new Set(['Alberta', 'Dr. Gero', 'Trunks', 'Bulma', 'Gohan']);
let freelancers = new Set(['Piccolo','Trunks', 'Vegeta', 'Goku', 'Gohan']);
let union = new Set([...engineering, ...freelancers]);


console.log(union);
console.log(intersection);
console.log(difference);