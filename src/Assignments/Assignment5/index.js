function sum(arr) {
    return arr.filter(num => num > 20).reduce((acc, curr) => acc + curr, 0);
}
const getNewArray = function(arr) {
    return arr.filter(str => str.length >= 5 && str.includes('a'));
};
const numbers = [10, 50, 30, 25, 15, -40];

console.log("Sum of numbers greater than 20:", sum(numbers));

const strings = ["apple", "potato", "orange", "grape", "cucumber"];

console.log("New array with strings length >= 5 and contains 'a':", getNewArray(strings));

