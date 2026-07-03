interface Animal {
    name:string
}

interface Dog extends Animal {

    sound:string

} 


const  dog:Dog = {
    name:"Jack",
    sound:'meow'

}
console.log(dog.sound)





interface User {
    name:string;
    age?:number
}

interface Admin extends User {
    role:string
}


const user:Admin = {
name:"kale",
age:23,
role:"doctor"
}

console.log(user.name,user.age)


