"use strict";
//typeof Type guard
Object.defineProperty(exports, "__esModule", { value: true });
function print(value) {
    if (typeof value === "string") {
        console.log("Yes  i am string ", value);
    }
    else {
        console.log("i ma number ", value);
    }
}
print(5);
print("Raman");
//in operator type guard
// const car =  {
//     make:"Toyota",
//     model:"Camry"
// }
// console.log("model" in car)   // it checks if model is present in car 
const user = {
    name: "Raman",
    phoneNumber: undefined
};
console.log("phoneNumber" in user);
function isChaiOrder(obj) {
    return (typeof obj === "object" && obj !== null && obj !== null && typeof obj.type == "string" && typeof obj.sugar === "number");
}
//type assertion type never and type unknown
let response = "23";
let numericLength = response.length;
let bookString = '{"name":"Who moved my cheese"}';
let bookObject = JSON.parse(bookString);
console.log(bookObject.name);
let result;
result = "pass";
result = true;
result = 101;
if (typeof result === "string") {
    console.log(result.toUpperCase());
}
//# sourceMappingURL=typenarrowing.js.map