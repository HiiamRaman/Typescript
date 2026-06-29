//Array

import { ST } from "next/dist/shared/lib/utils";

const numbers : number[] = [1,2,3,4]

//array of strings 

const name :string[]= ["raman", "ascsac","ascsc"]

//array of objects
type User  = {
    name:string;
    age:number
}

const user:User[]  =[
    {
    name:"Raman",
    age:23

},
 {
    name:"Raman",
    age:23

}
]


//tuples means array with fixed type and order 


const user1:[string,number] = ["raman",23]

//real world usage 

const res:[boolean, string] = [true, "success"] 

//enums means fixed set of named values 

enum Role   {   
    Admin,
    user,
    manager

}

const role:Role  = Role.manager


enum Res {
    success,
    failed,
    error
}

const res1  :Res = Res.success


//custom enum 


enum fruits {
    cooked   =  "Cooked",
    halfcooked = "HalfCookeed",
    notcooked = "NotCooked"

}


const Fruits :fruits = fruits.notcooked

//assignment 


enum Status   {

    Pending  = "PENDING",
    Processing="PROCESSING",
    Delivered="Delivered",
    Cancelled="CANCELLED"

}


 function printStatus(status:Status){
    return console.log(Status.Processing);



 }

 


