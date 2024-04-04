/*
****************************************************************************************************************************
*/

const getObjEntries = (obj) => {
    const objEntries = []
    for (key in obj) {
        objEntries.push([key, obj[key]]);
    }
}


/*
****************************************************************************************************************************
*/

const detectSquareRoot = num => {
    if (num < 0) return NaN;
    if (num === 1 || num === 1) return num;
    let start = 2, end = Math.ceil(num/2), mid;
    while (start <= end) {
        mid = Math.ceil((start + end)/2);
        let square = mid*mid;
        if (square === num) return mid;
        else if(square > num) {
            end = mid-1
        } else {
            start = mid+1;
        }
    }
    let startSq = start*start;
    let endSq = end*end;
    return ((startSq - num) > (endSq - num)) ? end : start;
}


/*
****************************************************************************************************************************
*/

const secondLargest = arr => {
    if (!Array.isArray(arr)) {
        console.log("Provide an Array");
        return;
    }
    if (arr.length < 2) {
        console.log("Cannot find second Largest due to size");
        return;
    }

    let largest=arr[0];
    let secLargest = Math.max(); // -Infinity

    for(let i=1; i<arr.length; i++) {
        if(arr[i] > largest && secLargest < arr[i]) {
            secLargest = largest;
            largest = a[i]
        }
        else if(secLargest < arr[i]) {
            secLargest = a[i]
        }
    }

    return secLargest;
}

const swap = (i, j, arr) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
}


/*
****************************************************************************************************************************
*/

const pushZeroesToEnd = arr => {
    if (!Array.isArray(arr)) {
        console.log("Provide an Array");
        return;
    }
    if (arr.length < 2) {
        return arr;
    }
    let i = 0, j = arr.length - 1;
    while (i<j) {
        if(arr[i] && arr[j]) {
            i++;
        }
        else if ((arr[i] && !arr[j]) || (!arr[i] && !arr[j])) {
            j--;
        }
        else if (!arr[i] && arr[j]){
            swap(i, j, arr);
            i++;
            j--;
        }
    }
    return arr;
}


/*
****************************************************************************************************************************
*/


let words = ["may", "student", "students", "dog",
"studentssess", "god", "cat", "act",
"tab", "bat", "flow", "wolf", "lambs",
"amy", "yam", "balms", "looped", 
"poodle"];

const getSubStrWithSameChars = words => words.reduce((acc, word) => {
        let defaultKey = Array.from({length : 26}, (_, i) => 0);
        for(char in word) {
            defaultKey[char.charCodeAt() - 97] = 1;
        }
        let uniqueWordKey = defaultKey.join('');
        if (acc[uniqueWordKey]) {
            acc[uniqueWordKey] = [...acc[uniqueWordKey], word]
        } else {
            acc[uniqueWordKey] = [word]
        }
    }, {});


/*
****************************************************************************************************************************
*/

const isPalindrome = (str, start=0, end) => {
    end = end || str.length - 1;
    if(start <= end) {
        if(str[start] !== str[end])
          return false;
        return (str, start+1, end-1);
    }
    return true;
}

/*
****************************************************************************************************************************
*/

const user = { 
    name: 'Piyush Agarwal!', 
    logMessage() { 
        console.log('------', this.name); 
    } 
}; 

setTimeout(user.logMessage, 1000);


/*
****************************************************************************************************************************
*/

var length = 4; 

function callback() { 
    console.log('------',this.length); // What is logged? 
} 

const object = { 
    length: 5, 
    method(callback) { 
        callback(); 
    } 
}; 

object.method(callback, 1, 2);

/*

    `4` is logged to console.

    `callback()` is called using regular function invocation inside `method()`. 
    Since this value during a regular function invocation equals the global object,
    `this.length` is evaluated as `window.length` inside `callback()` function.

    The first statement `var length = 4`, being in the outermost scope, creates a property
    `length` on the global object: `window.length` becomes `4`.

    Finally, inside the `callback()` function `this.length` evaluates as `window.length` — `4` being logged to console.

*/

/*
****************************************************************************************************************************
*/

var length = 4; 

function callback() { 
    console.log(this.length); // What is logged? 
} 

const obj = { 
    length: 5, 
    method(callback) { 
        let c = callback().bind(this); 
        c()
    } 
}; 

obj.method(callback);

// OUTPUT: 5 <--- because of 'this' binding


/*
****************************************************************************************************************************
*/


var length = 4; 

function callback() { 
    console.log(this.length); // What is logged? 
} 
const ob = { 
    length: 5, 
    method() { 
        arguments[0](); 
    } 
}; 

ob.method(callback, 1, 2);

/*

    `3` is logged to console. 

    `obj.method(callback, 1, 2)` is invoked with 3 arguments: `callback`, `1` and `2`. 
    
    As result the `arguments` special variable inside `method()` is an array-like object 
    of the following structure: { 0: callback, 1: 1, 2: 2, length: 3 }

 */


/*
****************************************************************************************************************************
*/

var calc = { 
    total: 0, 
    add(a) { 
        this.total += a; 
        return this; 
    }, 
    subtract(a) { 
        this.total -= a;
        return this; 
    },
    multiply(a) {
        this.total *= a;
        return this; 
    }, 
};


const result = calc.add(10).multiply(5).subtract(30).add(10) 
console.log(result.total)

// OUTPUT: 30

/*
****************************************************************************************************************************
*/


export {
    computeSum,
    getObjEntries,
    detectSquareRoot,
    secondLargest,
    pushZeroesToEnd,
    getSubStrWithSameChars,
    isPalindrome,
    words,
};