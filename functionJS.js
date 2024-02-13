
// ------------------ function statement

function a() {

}

// ------------------ function expression (expression has a = sign)

var func = function() {

}

// ------------------ named function expression

/** this below function can only be called as
 * myFunc() ✔✔✔✔✔✔✔
 * and never as xyz() ×××××××××
 */

var myFunc = function xyz() {
    /**
     * xyz is a local variable within this function block
     * but holds no value in the outer scope, so it cannot
     * be used for funcion call
     */ 
    console.log(xyz); // will return the code to this whole function itself
}

// ------------------ first class functions:

/**
 * The ability to use functions as VARIABLES, 
 * 
 * being able to pass them as
 * ARGUMENTS to another fucntion and being able to RETURN a function from within
 * another function ---> This is also known as ------------------ HIGHER ORDER FUNCTIONS
 */
