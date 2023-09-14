function Student(firstName, lastName, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades;

    this.inputNewGrade = function(newGrade) {
        this.grades.push(newGrade);
    };

    this.computeAverageGrade = function() {
        let sum = 0;
        for (let i = 0; i < this.grades.length; i++) {
            sum += this.grades[i];
        }
        return sum / this.grades.length;
    };
}

let st1 = new Student("Muja", "Kayadan", [60, 70, 80]);
let st2 = new Student("Daniel", "Togo", [98, 99, 100]);

console.log("St1 grades: " + st1.grades);
console.log("St2 grades: " + st2.grades);

st1.inputNewGrade(80);
st2.inputNewGrade(80);

console.log("St1 average: " + st1.computeAverageGrade());
console.log("St2 average: " + st2.computeAverageGrade());

console.log("St1 grades: " + st1.grades);
console.log("St2 grades: " + st2.grades);

let students = [st1, st2];
let totalAverageGrade = 0;

for (let i = 0; i < students.length; i++) {
    let averageGrade = students[i].computeAverageGrade();
    totalAverageGrade += averageGrade;
}

let overallAverageGrade = totalAverageGrade / students.length;
console.log("Overall Average Grade: " + overallAverageGrade);