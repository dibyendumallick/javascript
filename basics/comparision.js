console.log("2" > 1);//true
console.log("02" > 1);//true
console.log(null>0);//here null is equal to '0'
console.log(null==0);//here null is a primitive data type,in this case null is not equal to '0',and it checks loose equality check
console.log(null>=0);//here null is converted to '0'
console.log(undefined==0);
console.log(undefined<0);
console.log(undefined>0);


/*
   Q.Why null is treated as 0 in comparison operators?

 ans-In comparison operators like >, <, >=, and <=, JavaScript performs  
     type coercion to try to make the two values comparable. When null is compared with a number, it is treated as 0 because null is considered to be equivalent to 0 in a numeric context

   Q.Why null is not treated as 0 in equality checks?

ans-However, in equality checks using the == operator, null is not 
    treated as 0. This is because the == operator checks for loose equality, which means it checks if the two values are equal in a more abstract sense.
    In the case of null and 0, they are not considered equal because they have different types and meanings. Therefore, the == operator returns false.


    equality check

    1.Normal equality check-:>, <, >=, and <=
    2.loose equality check-:==
    3.Strong equality check-:===
*/
