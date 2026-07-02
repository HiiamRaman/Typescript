"use strict";
//Array
Object.defineProperty(exports, "__esModule", { value: true });
const numbers = [1, 2, 3, 4];
//array of strings 
const name = ["raman", "ascsac", "ascsc"];
const user = [
    {
        name: "Raman",
        age: 23
    },
    {
        name: "Raman",
        age: 23
    }
];
//tuples means array with fixed type and order 
const user1 = ["raman", 23];
//real world usage 
const res = [true, "success"];
//enums means fixed set of named values 
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["user"] = 1] = "user";
    Role[Role["manager"] = 2] = "manager";
})(Role || (Role = {}));
const role = Role.manager;
var Res;
(function (Res) {
    Res[Res["success"] = 0] = "success";
    Res[Res["failed"] = 1] = "failed";
    Res[Res["error"] = 2] = "error";
})(Res || (Res = {}));
const res1 = Res.success;
//custom enum 
var fruits;
(function (fruits) {
    fruits["cooked"] = "Cooked";
    fruits["halfcooked"] = "HalfCookeed";
    fruits["notcooked"] = "NotCooked";
})(fruits || (fruits = {}));
const Fruits = fruits.notcooked;
//assignment 
var Status;
(function (Status) {
    Status["Pending"] = "PENDING";
    Status["Processing"] = "PROCESSING";
    Status["Delivered"] = "Delivered";
    Status["Cancelled"] = "CANCELLED";
})(Status || (Status = {}));
function printStatus(status) {
    return console.log(Status.Processing);
}
