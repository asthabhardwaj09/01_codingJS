//concat, spread,from,isArray,Array.of,flat()

const marvel_hero=["iron man","thor","doctor strange"]

const dc_hero=["joker","flash","batman"]

// marvel_hero.push(dc_hero)
const all_hero=marvel_hero.concat(dc_hero)
console.log(all_hero);
// console.log(marvel_hero);
// console.log(marvel_hero[3][1]);

// const all_heros=[...marvel_hero,...dc_hero]
// console.log(all_heros);

// const another_array=[1,2,3,[4,5,6],7,[8,[9,10]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("astha"));
console.log(Array.from("astha"));
console.log(Array.from({name:"astha"})); //interesting

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));


