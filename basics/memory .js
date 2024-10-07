/*
    two types of memory:-
        1.stack:-stores primitive datatype.
        2.heap:store non-primitive datatype/reference datatype.

        let myName="Dibyendu Mallick"  -->primitive datatype
        let anotherName=myName
        anotherName="hello"

        console.log(anotherName);-->hello
        console.log(myName);-->Dibyendu Mallick

        when we put the value of "myName" in other variable called "anotherName" the copy of "myName" value goes into the stack,but not the original one.Whatever we change the value in "anotherName" is doesnot impact the original value.

        where as in heap when we create an object it stores the details of the object.eg

        let obj1={
            x=93,
            y=09,
            z=98
        }
            this above example create an onject inside heap memory but the variable name is created inside stack that points to the details of an object.

        let obj2=obj1

        this will point to the details of the obj1 inside heap memory,
        this is called reference to the object.I can the change the value of the reference object where it wasnot possible in primitive datatype.

*/