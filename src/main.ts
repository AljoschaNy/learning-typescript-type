import {Student} from "./Student.ts";
const studentsList:Student[] = [];

function displayCertificates(certificatesList: any[]): string[] {
    return certificatesList.map(cert => (cert === "" ? "*" : cert.toString()));
}
function printStudentDetails ({firstName, lastName, age, certificates}: Student):string {
    return `${firstName} ${lastName} (${age}) \n`
        + "=".repeat(firstName.length+lastName.length)
        + "\nNoten: " + displayCertificates(certificates) + "\n\n";
}

function printAllStudents(studentsArray:Student[]) {
    let result = "";
    studentsArray.map(student => result+=printStudentDetails(student));
    return result;
}

const student1:Student = {
    firstName: "Aljoscha",
    lastName: "Nyang",
    age:32,
    certificates: [1,1,1,1,1,1,2],
};

const student2:Student = {
    firstName: "Tina",
    lastName: "Meyer",
    age:28,
    certificates: [1,"A",1,"B",1,1,"E"],
};

const student3:Student = {
    firstName: "Max",
    lastName: "Mustermann",
    age:35,
    certificates: [1,"A","","B","",1,"E"],
}

studentsList.push(student1,student2,student3)

console.log(printAllStudents(studentsList));