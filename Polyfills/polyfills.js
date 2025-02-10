
// functionName.call(object) --> function uses 'this' variable to access variable and
// if the object passed into call method has variables that the functionName is referencing 
// using 'this' variable, then they will be used, else 'undefind' would be used.
// see below example:


export function printDetails () {
    console.log(`${this.firstName} is ${this.age} years old, and works in ${this.state} state.`)
}


/**
 * 
 * let functionName = function(place, country) {
 *  console.log(`${this.name}, ${this.age}, ${place}, ${country}`)
 * }
 * 
 * let ob = {
 *  name: 'Sindhu',
 *  age: 27
 * }
 * 
 * let myBind = functionName.bind(ob)
 * myBind() ---> case 1 / basic case
 * myBind('Madison', 'USA')
 * 
 * 
 * let myBind = functionName.bind(ob, 'San Diego');
 * myBind('USA')
 */

// functionName.myBind(ob)

Function.prototype.myBind = function(...args) {
    // the function on which bind is called
    if (args.length === 0) {
        alert("pass an object to bind")
    }
    else {
        let functionOnWhichCalled = this;
        let firstLevelArgs = args.slice(1)
        /** 
         * bind returns a function that has the object's reference, 
         * which can be called later with more args if required
        */
        return function (secondLevelArgs) {
            functionOnWhichCalled.apply(args[0], [...firstLevelArgs, ...[secondLevelArgs]]);
        }
    }
}

/**
 * compose / pipe functions
 * 
 * const add = a => a + 10;
 * const sub = a => a - 10;
 * const mul = a => a * 10;
 * 
 * const eval = compose(add, sub, mul)
 * 
 *                      <-----------
 * eval(10) 
 * 
 * functions will be executed from left to right, and output at each stage will
 * be fed to next function towards its left
 */

export const compose = (...functions) => {
    return function(num) {
        functions.reduceRight((acc, func) => {
            return func(acc);
        }, num)
    }
}
