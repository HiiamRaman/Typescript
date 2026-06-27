//typeof Type guard

function print (value:string | number ){

  if(typeof value === "string"){
     console.log("Yes  i am string ",value)
  }
  else{
    console.log("i ma number ", value)
  }
}


print (5);
print("Raman")


//in operator type guard

// const car =  {
//     make:"Toyota",
//     model:"Camry"
// }

// console.log("model" in car)   // it checks if model is present in car 


const user = {
    name:"Raman",
    phoneNumber:undefined
}

console.log("phoneNumber" in user)


type ChaiOrder = {
  type:string,
  sugar:number
}


function isChaiOrder(obj:any):obj is ChaiOrder{
  return (
    typeof obj ==="object" && obj!==null&& obj!==null && typeof obj.type=="string" && typeof obj.sugar ==="number"
  )
}

 

//type assertion type never and type unknown
let response:any  = "23";
let numericLength:number   = (response as string).length


type Book = {
  name:string;
}


let bookString = '{"name":"Who moved my cheese"}';
let bookObject  = JSON.parse(bookString) as Book
console.log(bookObject.name) ;



let result  : unknown ;



result = "pass";
result=true;
result= 101;

if( typeof result ===  "string"){
   console.log(result.toUpperCase()) 
}

const data:unknown  = "chai aur code "
const strData : string = data as string