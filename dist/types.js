"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let drink = "coffe";
console.log("drink is ", drink);
let fruit = "mango";
console.log("fruit is ", fruit);
let numr;
numr = 100;
console.log("number is ", numr);
// turn off typescript checking , user can define whahtever he wants
let data = "Kathmandu";
console.log("city is ", data);
data = 10;
console.log("data is ", data);
function print(value) {
    console.log("the value is ", value);
}
print("Hello World ");
// Union | 
//   value can be several types
function display(value) {
    console.log("display", value);
}
display("ram");
display(5);
function comparision(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    if (typeof value === "number") {
        console.log(value.toFixed(2));
    }
}
comparision("sunrise");
comparision(454);
