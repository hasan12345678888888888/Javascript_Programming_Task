// Q1
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();
console.log(sizes);
// Q2
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(1, 2, 3);
console.log(sizes);
// Q3
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2, 0, "L");
console.log(sizes);
// Q4
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = sizes.slice(0, 3);
console.log(regSizes);
// Q5
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 3, "rabbit", "hamster");
console.log(pets); 
// Q6
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 2);
console.log(pets);
// Q7
var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var reducedPets = pets.slice(3, 5);
console.log(reducedPets); 


