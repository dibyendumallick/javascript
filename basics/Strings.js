const name="dibyendu"
const repo=50
//console.log(name+repo); nobody likes to write in this format.

console.log(`Hello my name is ${name} and my repo count is ${repo}`);
const n=new String("dibyendu");
console.log(`The indexes are: `);

// for(let i=0;i<n.length;i++)
// {
//     if(n.charAt(i)=='d')
//     {
//         console.log(i);
//     }
//     i++;
// }
console.log(n.indexOf('d'));
/*
const name=new String('dibyendu');

name
    String {'dibyendu'}
    0: "d"
    1: "i"
    2: "b"
    3: "y"
    4: "e"
    5: "n"
    6: "d"
    7: "u"
    length: 8

    Here String is NOT an array but an object,they are written in key value pairs.

    some methods of Strings.

    anchor: 
        ƒ anchor()
        at: ƒ at()
        big: ƒ big()
        blink: ƒ blink()
        bold: ƒ bold()
        charAt: ƒ charAt()
        charCodeAt: ƒ charCodeAt()
        codePointAt: ƒ codePointAt()
        concat: ƒ concat()


*/