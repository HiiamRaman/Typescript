"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(a, b) {
    return a + b;
}
sum(3, 4);
function createStudent(student) {
    return ({ id: student.id,
        name: student.name,
        marks: student.marks
    });
}
createStudent({ id: '123', name: "Raman", marks: 99 });
function createUser(user) {
    return ({
        id: user.id,
        name: user.name
    });
}
createUser({ id: "233", name: "Ramana" });
//
