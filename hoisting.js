/*
********************************************************** 1 ******************************************************************
*/

console.log(a); // error thrown as 'a' has functional scope and hence is available in function 'x'

function x () {
    var a = 10;
}


/*
*******************************************************************************************
*/

function x1 () {
    var a = 10;
}

console.log(a); 

// error thrown as 'a' has functional scope and hence is available in function 'x1'


/*
********************************************************** 2 ******************************************************************
*/

// from : https://www.freecodecamp.org/news/function-hoisting-hoisting-interview-questions-b6f91dbc2be8

function foo(){  
    function bar() { return 3 }
    return bar()
    function bar() { return 8 }
}

alert(foo());


/**
 * Both the bar() functions are function declarations and will 
 * therefore be hoisted to the top of foo() local scope. 
 * 
 * However, the bar() returning 8 will be hoisted after, and 
 * replaces the bar() one returning 3.
 * Also known as 'shadowing'.
 */


// Output: 8


/*
********************************************************** 5 ******************************************************************
*/

function foo() {
    var bar = function() { return 3 }
    return bar();
    var bar = function() { return 8 }
}

alert(foo());


/**
 * The function foo() itself will be hoisted in the global scope as
 * its a function declaration.
 * 
 * Inside foo(), both the bar() functions are function expressions.
 * 
 * Hence when hoisted it will be undefined, and during runtime, the 
 * first one will be assigned to bar and executed in the next and returned.
 * Hence 3 is returned.
 * 
 * The second bar() will not be read by the interpreter ahead of time.
 */


// Output: 3


/*
********************************************************** 3 ******************************************************************
*/

var a = 1;

function b() {
    a = 10;
    return;
    function a() {}
}

b();

console.log(a);

/**
 * 
 * This is because the function a() {} statement has now 
 * created a local 'a' that has a functional/local scope. 
 * 
 * This new 'a' now gets hoisted to the top of its enclosing 
 * function b() with it’s declaration and definition.
 * 
 * Therefore, the statement a = 10; is no longer changing 
 * the value of the global 'a' which remains to be 1, 
 * but rather it is changing the local a from a function 
 * to an integer value of 10. 
 * 
 * Since we are logging the global a, the output is 1.
 * 
 * Had the statement function a() {} not been there, 
 * the output would have been 10.
 */

// Output: 1


/*
********************************************************** 4 ******************************************************************
*/

function parent() {
    var x = "I'm a variable";
    function x() { return "I'm a function"; }
    return x(); 
}
console.log(parent());


/**
 * First, in memory phase, the x() function is hoisted at the top of 
 * the parent function.
 * 
 * But we also have a variable "x" which will be assigned to undefined in
 * the memory phase but then during execution it will take the value
 * "I'm a variable" and replace the function definition
 * 
 * Hence when we try to excute the line: "return x()", we get a syntax
 * error because "x" is now a variable containing a string & not a function.
 */


// Output: “TypeError: x is not a function”


/*
********************************************************** 6 ******************************************************************
*/

var myVar = 'foo';
(
    function() {
        console.log('Original value was: ' + myVar);
        var myVar = 'bar';
        console.log('New value is: ' + myVar);}
)();


// Output: 
    // “Original value was: undefined”
    // “New value is: bar”


/**
 * In this one, again the global value of myVar (‘foo’) is out of the picture. 
 * 
 * This is because variable myVar is being re-declared using same variable name 
 * and defined inside the local function scope and is therefore hoisted to the top 
 * of the IIFE with a value of ‘undefined’ which is logged first.
 * 
 * The value ‘bar’ is then assigned and logged subsequently.
 */


/*
********************************************************** 7 ******************************************************************
*/

var myVar = 'foo';
(
    function() {
        console.log('Original value was: ' + myVar);
        myVar = 'bar';
        console.log('New value is: ' + myVar);}
)();

// Output: 
    // “Original value was: foo”
    // “New value is: bar”


/**
 * here as we see, "myVar" is not re-declared hence, the global "foo"
 * value is available first,
 * 
 * then it is reassigned to "bar"
 * 
 */

/*
********************************************************** 8 ******************************************************************
*/


function getShape(condition) { 
    console.log(shape); // output
    if (condition) {
        var shape = "square";
        return shape;
    } else { 
        // shape exists here also with a value of "undefined" 
        return shape;
    }
}

getShape(false) // output_1
getShape(true)  // output_2

/**
 * shape’s declaration is hoisted at the top of getShape() function. 
 * 
 * This is because if/else blocks don’t create a local scope for var declarations.
 * A local scope is essentially function scope. 
 * 
 * Therefore, shape is accessible everywhere outside the if block and within the function with an ‘undefined’ value.
 */


 // OUTPUT : undefined
 // OUTPUT: 'square'

/*
********************************************************** 9 ******************************************************************
*/


var age = 21
var girl = function() {
    console.log(age);
    var age = 20;
}

girl();

/**
 * Even though we have a global variable "age", since the girl function also has a "age" variable, it gets hoisted 
 * to the top of the 'girl()' function and initially its value is 'undefined', So it prints undefined.
 * Later at line 200, it gets assigned a value, sicne we're accessing it before assigning the value, it is undefined.
 */

// OUTPUT: undefined

/*
********************************************************** 10 ******************************************************************
*/

var z = 1;

function outer() {
    var z = 2
    function inner() {
        z++;
        console.log(z) // output_1
        var z = 3;
        console.log(z) // output_2
    }
    inner();
}

outer();

/**
 * OUTPUT:
 * output_1: NaN
 * output_2: 3
 */

/**
 * the variable 'z' within the inner() function is hoisted to the top of the function, with an initial value of undefined.
 * On line 226, it still remains undefined since we're trying to access it before its assigned some value.
 * But later on the next line, its assigned a value of 3, so on line 228, it prints '3'.
 */


/*
*************************************************** NOT HOISTING BUT INTERESTING PATTERN ***************************************
*/

function foo1() {
    return {
        bar: "hello"
    };
}

function foo2() {
    return
    {
        bar: "Hey"
    }
}

foo1()
foo2()

/**
 * foo1() will return {bar: 'hello'} object.
 * 
 * foo2() on the otherhand, will return undefined, because on line 259, javascript will add
 * a semicolon after the return statement, since its optional at the end of each functional code 
 * statement.
 * 
 * And, the object is on the next line, hence the object is not returned but the empty return
 * statement "return;" executes on line 259.
 * 
 * The object is unreachable code.
 * 
 * what the code actually looks like:
 

    function foo2() {
        return; // function will return here itself
        {
            bar: "Hey"
        }
    }

*/


/**
 *  OUTPUT:
 *      {bar: 'hello'}
 *      undefined
 *  
 */


/*
****************************************************************************************************************************
*/