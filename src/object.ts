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


//