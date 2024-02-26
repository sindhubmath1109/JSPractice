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
*************************************************************************************************************************
*/

// computeSum()
// computeSum(1)()
// computeSum(1)(2)()
// computeSum(1)(2)(3)()
// computeSum(1)(2)(3)(4)()
// computeSum(1)(2)(3)(4)(5)(6)...

// computeSum(0)()
// computeSum(0)(0)()
// computeSum(0)(0)(1)()
// computeSum(0)(0)(1)(2)(0)(3)(4)()

/******************************************************************************************/

export let computeSumSimple = a => {
    let sum = 0
    if (!a) return sum;
    return b => b ? computeSum(a+b) : (sum+a);
}

/******************************************************************************************/

let sum = 0
export let computeSumFunc = a => {
    if (!a) return sum;
    return function(b) {
        if (b) {
            return computeSumFunc(a+b)
        }
        return sum+a;
    }
}

/******************************************************************************************/


export function computeSum (a) {
    let sum = 0
    if (!a && typeof(a) !== "number") return sum;
    return b => (!b && (typeof(b) !== "number")) ? (sum+a) : computeSum(a+b);
}

/******************************************************************************************/


export let sumArrow = x => y => y ? sum(x + y) : x;


/**
*************************************************************************************************************************
*/


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



