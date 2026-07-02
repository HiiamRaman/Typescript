class User {
name:string
constructor(name:string){

   this.name = name;

}



 

}
const user1 = new User("Raman");
const user2 = new User("cristiano");




// console.log("user is ", user1.name)

//public
 class Athelete {
    public name  = "Ronaldo"
 }


 const player1 = new Athelete()

 console.log(player1.name)

 //private only class can access it 




 class Country {
    private name =  "Korea"
 }

const NewCountry = new Country()
console.log(NewCountry)



class BankAccount {

    private balance = 1000;


    depositBalance (amount:number){
        this.balance+=amount;
    }
    checkBalance(){
        return this.balance
    }



}

const bank  = new BankAccount()


 bank.depositBalance(222)
 console.log(bank.checkBalance())


 class UserAccount {
    public username : string;
    private email:string; password:string;

   constructor (username:string,email:string,password:string){

  this.username = username;
  this.email = email;
  this.password = password
   }

   changePassword(newPassword:string){

    this.password = newPassword

   }

   verifypassword (EnteredPassword:string){
    if (this.password !== EnteredPassword){
        return

    }
    console.log("Password Verified !!")

   }

   changeEmail(newEmail:string){
      

    this.email = newEmail;
    return newEmail
   }


   getUser(){
    return this.username
   }
  
   




 }


 const  acc  = new UserAccount("Raman","raman@gmail.com","123456")
 console.log(acc.username)


 //inhheritancce


