//data/data types has been caategorised into memory arrangement and memory access.PRIMITIVE AND NON-PRIMITIVE


 /*
 PRIMITIVE:-7 types
           string,number,boolean,null,undefined,symbol,BigInt

NON-PRIMITIVE/REFERENCE:-Arrays,Objects,Functions


dynamic typed


*/

// let id=Symbol('123');
// let anotherID=Symbol('123');
// console.log(id);//symbol(123)
// console.log(anotherID);//symbol(123)
// console.log(id==anotherID);//false

/*
Arrays:
    let name=["Abhishek","Anitya","Rocket"]

Objects:
    let myObj={
        name:"Dibyendu",
        age:24
    }
    
Function:
    const a=function(){
        console.log("Hello world");
    }


*/
const a=function(){
    console.log("Hello world");
}
console.log(typeof a);//returns function


let name=["Abhishek","Anitya","Rocket"]
console.log(typeof name);//returns object

//https://262.ecma-international.org/5.1/#sec-11.4.3



//stack(Primitive),Heap (Non-primitive)
let myName="Dibyendu"
let anotherName=myName
