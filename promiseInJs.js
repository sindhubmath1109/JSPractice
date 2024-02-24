let validateCart = () => "success"

let createOrder = () => {
    return new Promise(function(reject, resolve){
        if(validateCart() == "error") {
            const error = new Error("items in cart are sold out");
            reject(error);
        }
        resolve("Order created Successfully");
    })
}

createOrder().then(successMsg => console.log(successMsg))
.catch(err => console.log(err));


/**
 *************************************************** OUTPUT BASED QUESTIONS **************************************************
*/

 console.log("start");

 let promise1 = new Promise((resolve, reject) => {
    console.log(1);
    resolve(2);
    console.log(3);
 });

 promise1.then(res => console.log(res));

 console.log("end");


 /**
      OUTPUT:
  
      start
      1
      3
      end
      2
  
  
  This is because, first "start" is logged.
  
  Then when the promise is being initialized, the synchronous code of console.log(1) is executed.
  
  However, promise is still in pending state, it is not settled, it can either be resolved or rejected
  On line 29, promise is being resolved, and since this is asynchronous in nature, it not executed 
  immediately, the promise is registered and once settled it will be put in priority queue and then it'll 
  be moved to the call stack.
  
  Then console logging "3" is also a synchronous action within the promise, so it is logged too.
  
  So execution moved to next line and "end" is printed and then when the promise 
  is resolved, "2" is logged

*/


/**
 *************************************************** PROMISE - 2 **************************************************
*/


 console.log("start");

 let promise2 = () => new Promise((resolve, reject) => {
    console.log(1);
    resolve(2);
    console.log(3);
 });

 console.log("middle"); 

 promise2().then(res => console.log(res));

 console.log("end");

  /**
      OUTPUT:
  
      start
      middle
      1
      3
      end
      2


  first "start" is logged.

  Here the promise is being returned from a function and not 
  being assigned to a variable, like in previous example. So, the function
  is assigned to promise2 variable.

  next "middle" is printed

  now we are calling the promise2() function, so upon function call, "1" & "3"
  are logged, the "then" blocks executes when promise is settled, this is
  asynchronous task so it wont execute immediately.

  next "end" is printed
  
  then when the promise is settled, "2" is printed

  */

/**
 *************************************************** PROMISE - 3 **************************************************
*/

 console.log("start");

 let promise3 = new Promise((resolve, reject) => {
    console.log(1);
    console.log(2);
 });

 promise3.then(res => console.log(`Hello! ${res}`));

 console.log("end");

 /**
      OUTPUT:
  
      start
      1
      2
      end

  
  first "start" is logged
  
  Then when the promise is being initialized, the synchronous code of console.log(1) and 
  console.log(3) is executed, printing  "1" & "2"
  
  However, promise is still in pending state, it is not settled, it can either be resolved 
  or rejected
  
  Then the execution moves to next line and "end" is printed
  
  Later we are trying to fulfill the promise. But since the promise was not settled when it was 
  created i.e., neither resolved not rejected, the control never goes into the "then" block of 
  promise, becasue the "then" block is executed only when a promise is resolved.
  
  Hence, the "Hello ${res}" is never executed.

  */


/**
 *************************************************** PROMISE - 4 **************************************************
*/

 let job = () => new Promise((resolve, reject) => {
    reject("Promise Rejected");
 })

 job().then(() => console.log("success 1")).
    then(() => console.log("success 2")).
    then(() => console.log("success 3")).
    catch(err => {
        console.error(`error 1 - ${err}`);
        return err;
    })
    .then(msg => console.log(`success 4 - ${msg}`))
    .then((msg) => console.log(`success 5 - ${msg}`))
    .then(() => console.log(`success 6`))
    .catch(() => console.log("error 2"))
    .then(() => console.log("success 7"))
    .then(() => console.log("success 8"))


/**
      OUTPUT:
  
        error 1 - Promise Rejected
        success 4 - Promise Rejected
        success 5 - undefined
        success 6
        success 7
        success 8
  
  
  The job() promise is being rejected, hence none of the 'then' are executed until a catch block 
  is encountered, now the catch is executed which prints 'error 1 - Promise Rejected'.
  
  but then the attached 'then' blocks are executed as part of promise chaining, leaving the 'catch'
  block. Because the error was only thrown once, the next catch is not executed, and remaining 
  successive 'then' blocks are executed.
  */

/**
 *************************************************** PROMISE - 4.1 **************************************************
*/


job().then(() => {
        console.log("success 1")
    }).
    then(() => {
        console.log("success 2")
    }).
    then(() => {
        console.log("success 3")
    }).
    catch(err => {
        console.log(`error 1 - ${err}`)
        throw err;
    })
    .then(msg => {
        console.log(`success 4 - ${msg}`)
    })
    .then((msg) => {
        console.log(`success 5 - ${msg}`)
    })
    .then(() => {
        console.log(`success 6`)
    })
    .catch(() => {
        console.log("error 2")
    })
    .then(() => {
        console.log("success 7")
    })
    .then(() => {
        console.log("success 8")
    })


/**
    OUTPUT:

    error 1 - Promise Rejected
    error 2
    success 7
    success 8


    We throw an error in the 'error 1 - Promise Rejected' catch block, and this error must be 
    caught inside another catch block only, hence next catch block with "error 2" is executed.

    And then because we do not throw any error, as part of promise chaining, the next successive
    'then' blocks are executed
*/

/**
 *************************************************** PROMISE - 4.2 **************************************************
*/

job().then(() => {
        console.log("success 1")
    }).
    then(() => {
        console.log("success 2")
    }).
    then(() => {
        console.log("success 3")
    }).
    catch(err => {
        console.log(`error 1 - ${err}`)
        throw err;
    })
    .then(msg => {
        console.log(`success 4 - ${msg}`)
    })
    .then((msg) => {
        console.log(`success 5 - ${msg}`)
    })

/**
    OUTPUT:

    error 1 - Promise Rejected
    <Uncaught error>


    We throw an error in the 'error 1 - Promise Rejected' catch block, and this error must be 
    caught inside another catch block only, and there is not catch block hence the error is displayed
    asying the error was uncaught.

    The next successive 'then' blocks are NOT executed, since the error is not caught anywhere and 'then'
    blocks cannot catch the error.
*/


/**
 *************************************************** PROMISE - 5 **************************************************
*/

let jobProm = state => new Promise((resolve, reject) => (
    state ?
    resolve("Promised Successfully Resolved"):
    reject("Promise Rejected")
))

let prom = jobProm();

prom.
    then(data => {
        console.log(`success 1 - ${data}`);
        return jobProm(true);
    }).then(data => {
        console.log(`success 2 - ${data}`);
        return jobProm(false);
    }).then(data => {
        console.log(`success 3 - ${data}`);
        return jobProm(true)
    }).catch(data => {
        console.log(`error 1 - ${data}`);
        return jobProm(true);
    }).then(data => {
        console.log(`success 3 - ${data}`);
        return jobProm(true)
    }).catch(data => {
        console.log(`error 2 - ${data}`);
    })

/** OUTPUT:

    error 1 - Promise Rejected
    success 3 - Promised Successfully Resolved
   
   first, at line: let prom = jobProm() --> since no argument is passed, the state is undefined
   and the promise is rejected and hence the control goes to catch block.
   then because it passes state as 'true' the next then block is called and it also resolves
   and since there are not other successive then blocks, the promise is fulfilled and settled.
 */

/**
 *************************************************** PROMISE - 5.1 **************************************************
*/

prom(true).then(data => {
        console.log(`success 1 - ${data}`);
        return jobProm(true);
    }).then(data => {
        console.log(`success 2 - ${data}`);
        return jobProm(false);
    }).then(data => {
        console.log(`success 3 - ${data}`);
        return jobProm(true)
    }).catch(data => {
        console.log(`error 1 - ${data}`);
        return jobProm(true);
    }).then(data => {
        console.log(`success 3 - ${data}`);
        return jobProm(true)
    }).catch(data => {
        console.log(`error 2 - ${data}`);
    })

/** 
    OUTPUT:
   
    success 1 - Promised Successfully Resolved
    success 2 - Promised Successfully Resolved
    error 1 - Promise Rejected
    success 3 - Promised Successfully Resolved
*/


/**
 *************************************************************************************************************************
*
* Promise.all Polyfill
* 
**************************************************************************************************************************
*/

let promiseAll = (promises) => {
    let allExcecuted = promises.length;
    if (allExcecuted === 0) return;
    let res = [];
    /**
     * we must return a promise because only then, the 'then' and 'catch' methods
     * can be used to retrieve results / error on the Promise.all method
     */
    return new Promise((resolve, reject) => {
        promises.forEach(prom => { 
            let promToExec = typeof(prom) === 'function' ? prom() : prom  
            promToExec.then(data => {
                    res.push(data)
                    allExcecuted--;
                    if(allExcecuted === 0) {
                        resolve(res);
                    }
                })
                .catch(err => {
                    reject(err)
                })
        });
    })
}

let p1 = () => new Promise(resolve => resolve('prom1 resolved'))
let p2 = new Promise(resolve => resolve('prom2 resolved'))
let p3 = new Promise((resolve, reject) => reject('prom3 resolved'))

promiseAll([p1,p2,p3])
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.error(`error: ${err}`)
        })


/**
 *************************************************************************************************************************
 *
 * Given a list of Promises, write a fucntion to resolve them recursively
 * 
 *************************************************************************************************************************
*/

// let promiseResolveRecursion1 = async (promises) => {
//     if (promises.length === 0) return ;
//     for(let i = 0; i < promises.length; i++) {
//         let promiseToExec = typeof(promises[i]) === 'function' ? promises[i]() : promises[i]

//         promiseToExec.then((res) => {
//             console.log(res)
//         }).catch((err) => {
//             console.log(err)
//         })

//         promiseResolveRecursion1(promises.slice(1));
//     }
// }

let promiseResolveRecursiveArrModified = promises => {
    if (promises.length === 0) return;
    let currProm = promises.shift(); // shifts from left i.e., first elem in array
    let promiseToExec = typeof(currProm) === 'function' ? currProm() : currProm

    promiseToExec.then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })

    promiseResolveRecursive(promises);
}

/*********************************************************************************/

let promiseResolveRecursion = async (promises) => {
    if (promises.length === 0) return ;
        
    let promiseToExec = typeof(promises[0]) === 'function' ? promises[0]() : promises[0]

    promiseToExec.then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })

    promiseResolveRecursion1(promises.slice(1));
}


let prom1 = () => new Promise(resolve => resolve('prom1 resolved'))
let prom2 = new Promise(resolve => resolve('prom2 resolved'))
let prom3 = new Promise((resolve, reject) => reject('prom3 resolved'))

promiseResolveRecursion([prom1, prom2, prom3])

/**
*************************************************************************************************************************
*/
