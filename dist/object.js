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
function createProduct(product) {
    return (product);
}
function printProduct(product) {
    return console.log(product);
}
createProduct({ id: "1323", name: "Apple", price: 120 });
printProduct({ id: "1323", name: "Apple", price: 120 });
function processResponse(res) {
    if (res.success == true) {
        return res.data * 2;
    }
    if (res.success == false) {
        return res.error;
    }
}
