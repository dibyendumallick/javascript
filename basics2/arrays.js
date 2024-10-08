//array
const myArray=[1,2,3,4,5,true,"dib"];
//for(let i=0;i<myArray.length;i++)
// {
//     console.log(myArray[i]);   
// }

/*
    Arrays are RESIZABLE and can contain different type of values or datatypes.

    //Arrays are Objects in js

    //DYANMIC TYPE:-which means that variables do not have a fixed type at compile time.This allows arrays to be treated as objects and to have properties and methods added to them dynamically. Java, on the other hand, is statically-typed, which means that variables have a fixed type at compile time, and arrays are not treated as objects.

*/
    // myArray.push(6);
    // myArray.push(7);
    // console.log(myArray);
    // myArray.pop();
    // console.log(myArray);
    // console.log(myArray.includes);//gives boolean value
    // console.log(myArray.indexOf());//returns the index of the particular element if present or returns -1 if not present(default value)

// const newArray=myArray.join()

// console.log(myArray);
// console.log(typeof myArray);

// console.log(newArray);

// console.log(typeof newArray);

const myn1=myArray.slice(1,3);
console.log("A ",myn1);
console.log(myArray);



const myn2=myArray.splice(1,3);
console.log("B" ,myn2);
console.log(myArray);

/*
    SLICE VS SPLICE

    in slice the given index is operated as given excluding the end index,it doesnot change the original array.

    in splice the given index is operated and the end index is included in it,it change the original index after using the method.
*/



