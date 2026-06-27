type User   =  {
    name:string;
    age:number
}


const user:User = {
    name:"Raman",
    age:23
}

//using interface

interface User1 {
    name:string,
    age:number
} 


const user1:User1 = {
    name:"Rmaan",
    age:23
}

//  intefac is mainly for objects

interface Product {
    id:number ,
    title:string,
    priice:number
}

type Age = string


interface Student {
    id:number,
    name:string,
    address:string
}


// usage

const student :Student =  {
id:23,
name:"Tamanay",
address:"latioili",
}


//Extending 




interface Animal {
   name:string
}
interface Dog extends Animal{
    breed:string
}


const dog:Dog = {
   name:"Tommy",
   breed:"labrador"
}

//Type vversion 

type Animal1 = {
    name : string
}

type Dog1  = Animal1 & {
    breed : string
}

const animal : Dog1  = {
    name:"Tommy ",
    breed:"labrador"
}



// Interface Merging (Special Feature)
 
interface fruit {
    name:string
}
interface fruit{
    amount:number 
}


const Fruit :fruit = {
    name:"mango",
    amount:2
}


//optional pproperties

interface veg  {
    name:string,
    amount?:number
}

const buy:veg = {
    name:'cucumber',
    amount:3
    
}

type User3  = {
    name:string,
    age?:number
}

const  newUser:User3 = {
    name:"Raman",
    

}

//unionn tpes

let result:string|number;


result= "pass";
result = "number"