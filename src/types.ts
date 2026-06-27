let   drink  = "coffe"   
console.log("drink is ", drink)


let fruit :string   =  "mango";


console.log("fruit is ", fruit)



let numr : number ;

numr = 100;
 console.log("number is ",numr  )

// turn off typescript checking , user can define whahtever he wants

 let data:any = "Kathmandu"
 console.log("city is ",data)
 data = 10
 console.log("data is ",data);


 function print (value:any){
    console.log("the value is ", value);
 }
print("Hello World ")


// Union | 
//   value can be several types



function display(value:string|number){
    console.log("display",value)
}


display("ram");
display(5);



function comparision (value : string | number){

    if(typeof value === "string"){
        console.log(value.toUpperCase());

    }

    if(typeof value === "number"){
        console.log(value.toFixed(2))
    }





}


comparision("sunrise");
comparision(454)

//union literal type 

type PaymentStatus = "success"|"pending"|"failed"





//assignment

type status = "pending" | "shipped" | "delivered" | "cancelled"


type cart = {
    User:string,
    Product:string,
    Order:number,
    orderStatus:status
}