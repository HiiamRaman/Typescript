function sum (a:number,b:number):number{
    return a+b
}


 sum(3,4)




//  type User =   {

//     name:string;
//     age:number;

//  }

//  function printuser (user:User){

//     console.log(user.name);

//  }

//  printuser({
//   name: "Raman",age:23
// })




//assignment 

type Student ={
    id:string,
    name:string,
    marks:number
};


function createStudent (student:Student):Student {

    return (
        { id:student.id,
         name:student.name,
         marks:student.marks
}
    )

}

createStudent({id:'123',name:"Raman",marks:99})



type User  = {
id:string,
name:string
}



function createUser (user:User):User{

return ({
    id:user.id,
    name:user.name
})


}

createUser({id:"233",name:"Ramana"})


//assignment


type Product  = {
    id:string,
    name:string,
    price:number
}


function createProduct(product:Product):Product{
  return  (product)
}


function printProduct (product:Product):void{

    return console.log(product)

}



createProduct({id:"1323",name:"Apple",price:120})

printProduct({id:"1323",name:"Apple",price:120})



type apiResponse = 
|{success:true ; data:number}
|{success:false ; error:string}

function processResponse (res:apiResponse){
    if (res.success==true){
        return res.data*2;

    }

    if(res.success==false){
        return res.error
    }
}