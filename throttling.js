const expensiveFunction = () => {
    console.log("performing an expesnive operation");
}

/**
 * @param {*} expensiveFunctionCallToBeMade --> if this function has arguments then use the below function
 * @param {*} limitAfterWhichFuncWillBeCalled --> time interval after which the function call must be made
 * @returns the throttled version of the expensiveFunctionCallToBeMade function
 */

const throttledFuncWithArgs = (expensiveFunctionCallToBeMade, limitAfterWhichFuncWillBeCalled) => {

    const shouldCallExpensiveFunc = true;

    return function() {

        let context = this
        let args = arguments

        if (shouldCallExpensiveFunc) {
            expensiveFunctionCallToBeMade.apply(context, args)
            shouldCallExpensiveFunc = false
            setTimeout(() => {
                shouldCallExpensiveFunc = true
            }, limitAfterWhichFuncWillBeCalled)
        }
    }

}

window.addEventListener('resize', throttledFuncWithArgs(expensiveFunction, 300));


/*
 * Throttlling a function in Javascript is the functionality to limit
 * the frequency of a function over a period of time
 */

// const throttledFunc = (expensiveFunctionCall, limitAfterWhichFuncWillBeCalled) => {

//     /**
//      * call the expensiveFunctionCall only after a certain limit and
//      * return a new throttled fucntion which will accomplish this
//      * activity that can be used as a event handler
//      */

//     /* this flag will decide whether or not the fucntion must be called.
//      * initially, its value will be set to true
//      */

//     let shouldCallExpensiveFunc = true;

//     /**
//      * now make the function call based on the flag's value
//      * then set the flag to false and only set it to true after
//      * the limit specified
//      */

//     /**
//      * remember, this throttledFunc must return another function,
//      * which is the event handler, but since it forms a closure,
//      * it will have access to the 'shouldCallExpensiveFunc' flag
//      */
//     return function() {
//         if (shouldCallExpensiveFunc) {
//             expensiveFunctionCall();
//             shouldCallExpensiveFunc = false;
//             setTimeout(() => {
//                 shouldCallExpensiveFunc = true
//             }, limitAfterWhichFuncWillBeCalled);
//         }
//     }
// }
