class BankAccount {
  constructor(owner, balance,history) {
    this.owner = owner;
    this.balance = balance;
    this.history= [];
  }
 
  deposit(amount) {
    this.balance = this.balance + amount;
    this.history.push(`deposited ${amount}`)
  }


  withdraw(amount){


    if(this.balance >= amount ){
        this.balance = this.balance-amount;
        this.history.push(`withdraw ${amount}`)
        console.log("new balance is ", this.balance)

    }
    else{
         console.log("in-sufficinet amount")
    }
    

  }

  checkBalance(){
    console.log(this.balance)
  }
  showHistory(){
    console.log(this.history)
  }

  transfer(otherUser,amount){
    if(amount>this.balance){
        console.log("in-sufficient balance ")
        return 
    }
   this.balance -= amount;
   otherUser.balance+=amount;

   this.history.push(`transfered ${amount } to ${otherUser.owner}`)
   otherUser.history.push(`amount ${amount} credited from ${this.owner}`)
  }
}
 


const user1 = new BankAccount("Raman",10000000);
const user2 = new BankAccount ("Ronaldo", 1000)
user1.deposit(1000000000)
user1.withdraw(200)
user1.checkBalance()
user1.showHistory()

user1.transfer(user2,1000)
user1.showHistory()
user2.showHistory()