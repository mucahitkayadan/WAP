Array.prototype.customSort = function() {
    return this.slice().sort(function(a, b) {
        return a - b;
    });
};
let numbers = [5, 2, 8, 1, 9];
console.log(numbers.customSort()); // Output: [1, 2, 5, 8, 9]