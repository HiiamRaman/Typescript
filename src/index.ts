// interface Animal {
//     name:string
// }

// interface Dog extends Animal {

//     sound:string

// }

// const  dog:Dog = {
//     name:"Jack",
//     sound:'meow'

// }
// console.log(dog.sound)

// interface User {
//     name:string;
//     age?:number
// }

// interface Admin extends User {
//     role:string
// }

// const user:Admin = {
// name:"kale",
// age:23,
// role:"doctor"
// }

// console.log(user.name,user.age)

// //generics

// function  identity <T> (value:T) : T{
// return value
// }

// console.log(identity<string>("Raman")) ;
// console.log(identity<boolean>(true))

// function name <T> (value:T) :T {
//     return value
// }
// console.log(name<string>("Hello "))

// function people<T> (value:T):T{

//     return value

// }

// const who = people<string>("cristiano");

// console.log(who);
// //Generic

// interface ApiResponse <T>{
// data:T,
// success:boolean
// }

// const userResponse :ApiResponse<{name:string; age:number}> =  {
//     data:{name:"Raman",age:23},
//     success:true
// }

// console.log(userResponse);

// const products:ApiResponse<string> = {
//     data:"Raman",
//     success:true
// }

// const result:ApiResponse<string> ={
// data:"123",
// success:true
// }

// console.log(result.data)

// interface ApiResponse<T>{
//   data:T
//   success:boolean
// }

// function printData<T>(value:T){
//    console.log(value)
// }

// printData("Hello")

// function wrap<T>(value:T){
// return value
// }

// console.log(wrap("hello Mbappe"))

// function Mycareer<T>(value :T){

//     return value

// }
// console.log(Mycareer("i will be successfull soon!!"))

// function getLength <T extends {length:number}>(value:T){    // here extends means the restriction it only alloows value who has length

//     return value.length
// }

// console.log(getLength([1,22,3,3,3,3,3,3,3]))

// const response = {
//   products: [
//     {
//       id: 1,
//       title: "Phone",
//       price: 500,
//       category: "electronics",
//     },
//     {
//       id: 2,
//       title: "Shoes",
//       price: 120,
//       category: "fashion",
//     },
//     {
//       id: 3,
//       title: "Watch",
//       price: 300,
//       category: "accessories",
//     },
//   ],
// };

// interface Product {
// id:number,
// title:string,
// price:number,
// category:string
// }

// interface ProductsResponse {
//     products:Product[];
// }

//dummy data
// id": 1,
//       "title": "Essence Mascara Lash Princess",
//       "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
//       "category": "beauty",
//   "price": 9.99,

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
}

interface ApiResponse {
  products: Product[];
}

//fetch function

async function fetchProduct(): Promise<ApiResponse> {
  try {
    const res = await fetch("https://dummyjson.com/products");

    const data: ApiResponse = await res.json();

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function mani() {
  const data = await fetchProduct();

 data.products.map((items)=>{
   console.log(items.title)
 }

 )


}
mani()
