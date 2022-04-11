let array_original = ["A", 1, 4, 5, "C", "B", 6, 8, "G", "D", 7, 3, "F", 2];
let numbers = [];
let letters = [];

array_original.forEach((a, i) => {
    if (isNaN(a.toString())) {
        numbers.push(a);
    }
    else {
        letters.push(a);
    }
});
letters.sort();
numbers.sort();
console.log(letters);
console.log(numbers);