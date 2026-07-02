"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name) {
        this.name = name;
    }
}
const user1 = new User("Raman");
const user2 = new User("cristiano");
// console.log("user is ", user1.name)
//public
class Athelete {
    constructor() {
        this.name = "Ronaldo";
    }
}
const player1 = new Athelete();
console.log(player1.name);
//private only class can access it 
class Country {
    constructor() {
        this.name = "Korea";
    }
}
const NewCountry = new Country();
console.log(NewCountry);
class BankAccount {
    constructor() {
        this.balance = 1000;
    }
    depositBalance(amount) {
        this.balance += amount;
    }
    checkBalance() {
        return this.balance;
    }
}
const bank = new BankAccount();
bank.depositBalance(222);
console.log(bank.checkBalance());
class UserAccount {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    changePassword(newPassword) {
        this.password = newPassword;
    }
    verifypassword(EnteredPassword) {
        if (this.password !== EnteredPassword) {
            return;
        }
        console.log("Password Verified !!");
    }
    changeEmail(newEmail) {
        this.email = newEmail;
        return newEmail;
    }
    getUser() {
        return this.username;
    }
}
const acc = new UserAccount("Raman", "raman@gmail.com", "123456");
console.log(acc.username);
//inhheritancce
