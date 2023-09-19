Array.prototype.even = function () {
    return this.filter((num) => num % 2 === 0);
};

Array.prototype.odd = function () {
    return this.filter((num) => num % 2 !== 0);
};

const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(myArray.even()); // [2, 4, 6, 8]
console.log(myArray.odd()); // [1, 3, 5, 7]