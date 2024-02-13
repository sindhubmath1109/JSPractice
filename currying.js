/**
 * Currying is a concept in Javascript, which helps transformation of
 * a function with multiple arguments to a series of nested functions,
 * each taking a one arguments.
 * 
 * eg: fn(a,b,c) => fn(a)(b)(c)
 * 
 * 
 * 
 Whereas partial application:
 * 
 * eg: fn(a,b,c) => fn(a)(b,c)
 * 
 * which helps transformation of a function with multiple arguments to a 
 * series of nested functions, each taking a one (or) more arguments
 */

/* Currying using bind */

let multiplyUsingBind = function(a,b) {
    return (a*b)
}

export let multiplyByTwo = multiplyUsingBind.bind(this, 2)
export let multiplyByThree = multiplyUsingBind.bind(this, 3)

/* Currying using closures */

let multiplyClosure = function(x) {
    return function(y) {
        return(x*y)
  }
}

export let doubleOfNum = multiplyClosure(2)


/**
 * write a functoin 'curry', that converts f(a,b,c) to f(a)(b)(c)
 */

// let curry = (funcToBeCurried) => {
//     return function(...args) {
//         console.log(args)
//         debugger;
//         const curriedFunc = this;
//         const numOfInitialParamsOfOrigFunc = funcToBeCurried.length;
//         const sequentialArgsLength = args.length;

//         // if (sequentialArgsLength) {
//         //     return function
//         // }

//     }
// }

// const sum = (a,b,c) => a+b+c;
// const currySum = curry(sum);
// console.log(currySum(a)(b)(c))



