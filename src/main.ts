import {Student} from "./Student.ts";
const studentsList:string[] = [];

function studentDetails ({firstName, lastName, age, certificates}: Student):string {
    const student:string = `${firstName} ${lastName} (${age}) \n`
        + "=".repeat(30)
        + `\nNoten: ${certificates}\n\n`;
    studentsList.push(student);
    return student;
}

function printAllStudents(studentsArray:string[]) {
    let result = "";
    studentsArray.map(student => result+=student);
    return result;
}

const student1:string = studentDetails({
    firstName: "Aljoscha",
    lastName: "Nyang",
    age:32,
    certificates: [1,1,1,1,1,1,2],
})

const student2:string = studentDetails({
    firstName: "Tina",
    lastName: "Meyer",
    age:28,
    certificates: [1,"A",1,"B",1,1,"E"],
})

const student3:string = studentDetails({
    firstName: "Max",
    lastName: "Mustermann",
    age:35,
    certificates: [1,"A",1,"B","*",1,"E"],
})

console.log(student1)
console.log(student2)
console.log(student3)
console.log(printAllStudents(studentsList));