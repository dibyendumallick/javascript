const marvel=["thor","Ironman","Spiderman"]
const dc=["superman","flash","batman"]
/*
    USING PUSH METHOD

    marvel.push(dc);//push method returns new length of an array
    console.log(marvel.push(dc));///4

    console.log(marvel);//['thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman']]

    console.log(marvel.length);//4

    console.log(marvel[3][1]);//flash
*/
/*
    USING CONCAT METHOD

    const all=marvel.concat(dc);//concat method joins 2 arrays and returns a new array,so we have to write another variable 'all'.

    console.log(all);//['thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman']
*/

/*
    USING SPREAD OPERATOR

    const all=[...marvel,...dc]
    console.log(all);//['thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman']
*/
/*
    USING FLAT METHOD

    const all=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

    const real=all.flat(Infinity);
    console.log(real);//[
        1, 2, 3, 4, 5,
        6, 7, 6, 7, 4,
        5
    ]
 */

/*
    USING ISARRAY METHOD

    console.log(Array.isArray("Dibyendu"));//false
    console.log(Array.from("Dibyendu"));//[
        'D', 'i', 'b',
        'y', 'e', 'n',
        'd', 'u'
    ]
    console.log((Array.from({name:"Dibyendu"})));//returns an empty string(it asks create an array using keys or values.Here key is 'name' and value is 'Dibyendu')

*/

/*
    USING OF

    let score1=100
    let score2=200
    let score3=300
    console.log(Array.of(score1,score2,score3));//[100,200,300]

*/