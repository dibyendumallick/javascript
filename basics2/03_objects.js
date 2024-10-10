//singleton
//object literals

const mySym=Symbol()
const Juser={
    name: "Dibyendu",
    age: 25,//age,name,location etc are treated as strings.
    "full name": "Dibyendu mallick",
    [mySym] : "hello world",
    location: "jaipur",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Saturday"]
}

//all the keys in object is a string but symbol is not a string so it is written within []
// console.log(Juser.age);
// console.log(Juser["full name"]);//here we use ["full name"] because we cannot access the full name using dot operator,although full name is treated as a string.

console.log(Juser[mySym]);
console.log(typeof Juser[mySym]);
console.log(typeof [mySym]);

// //console.log(Juser.full name);//throws an error
/*

    const foo=() =>console.log('First');

    const bar=() =>setTimeout(
        ()   => console.log('Second'));

    const baz=() =>console.log('Third');

*/
//     bar();
//     foo();
//     baz();



//console.log(typeof typeof 1);resultof type of is always a string.

//Object.freeze(Juser)
Juser.greeting= function () {
    console.log(`hello,${this.name}`);    
}
console.log(Juser.greeting());

