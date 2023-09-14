let student = {
    firstName: "",
    lastName: "",
    grades: [],
    inputNewGrade: function (newGrade) {
        this.grades.push(newGrade);
    },
    computeAverageGrade: function () {
        let sum = 0;
        for (let i = 0; i < this.grades.length; i++) {
            sum += this.grades[i];
        }
        return sum / this.grades.length;
    }
};

let st1 = Object.create(student);
st1.firstName = "Muja";
st1.lastName = "Kayadan"
st1.grades = [60,70,80];

let st2 = Object.create(student);
st2.firstName = "Daniel";
st2.lastName = "Togo";
st2.grades = [98,99,100];

console.log("st2" + st2.grades);
let students = [st1, st2];

let totalAverageGrade = 0;
for (let i = 0; i < students.length; i++) {
    let averageGrade = students[i].computeAverageGrade();
    totalAverageGrade += averageGrade;
}
console.log("St1 grades: " + st1.grades);
console.log("St2 grades: " + st2.grades);
st1.inputNewGrade(80);
st2.inputNewGrade(80);
console.log("St1 average: " + st1.computeAverageGrade());
console.log("St2 average: " + st2.computeAverageGrade());
console.log("St1 grades: " + st1.grades);
console.log("St2 grades: " + st2.grades);
let overallAverageGrade = totalAverageGrade / students.length;
console.log("Overall Average Grade: " + overallAverageGrade);