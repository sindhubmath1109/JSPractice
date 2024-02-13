export function setTimeOutFuncVar() {
    for(var i=1; i<=5; i++) {
        setTimeout(() => {
            console.log(i)
        }, i*1000);
    }
}

/*
 * with var --> doesn't give expected output, prints 6, five times,
 * even after the loop ends, the "i" is incremented one last time
 */

// ------------------------------------------------------------------------------------------------------------------


export function setTimeOutFuncVar2() {
    for(var i=1; i<=5; i++) {
        num = i
        setTimeout(() => {
            console.log(num)
        }, i*1000);
    }
}

/**
 * prints 5, five time (here i is stored in variable number whose 
 * value stops incrementing when the loop end)
 */

// ------------------------------------------------------------------------------------------------------------------

export function setTimeOutFuncLet() {
    for(let i=1; i<=5; i++) {
        setTimeout(() => {
            console.log(i)
        }, i*1000);
    }
}

/*
 * let variables have a block scope, so within the fo loop block, 
 * the value of 'i' is a brand new variable within that block 
 * unlike var type, since var doesn't have block scope, the lexical
 * environment for the variable "i" is the same and hence the timer
 * runs until 6 and then the callback function within settimeout is 
 * run so the value of "i" when printed is already. 
 * But for the timer, it does preserve the value of "i" as in the for 
 * loop and that value of "i" gets attached to the timer.
 */

// ------------------------------------------------------------------------------------------------------------------


function printCounter(count) {
    setTimeout(() => {
        console.log(count)
    }, count*1000);
}

export function setTimeoutFuncClosure() {
    for(var i=1; i<=5; i++) printCounter(i)
}

/*
 * with var but enclosing in a closure gives expected output,
 * as a new copy of "i" aka counter is passed everytime.
 */


// ------------- using same pattern within the same function ----------------------------------------------------------

export function counter() {
    for(var i=0; i<=5; i++) {
        function inner(counter) {
            setTimeout(() => {
                console.log(counter)
            }, counter * 1000)
        }
        inner(i);
    }
}

// ------------------ using Immediately Invoked Functions ---------------------------------------------------------------

export function counterPrint() {
    for(var i=0; i<=5; i++) {
        (function(counter) {
            setTimeout(() => {
                console.log(counter)
            }, counter * 1000);
        })(i)
    }
}

// ------------------------------------------------------------------------------------------------------------------

