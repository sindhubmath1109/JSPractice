/*
****************************************************************************************************************************
*/

/**
 * 
 * function statement must be used and not arrow functions because of 'this' variable binding
 * function statement must be used and not arrow functions because of 'this' variable binding
 * function statement must be used and not arrow functions because of 'this' variable binding
 * function statement must be used and not arrow functions because of 'this' variable binding
 * 
 **/ 
  Array.prototype.map = function (callbackFunc) {
    let array = this;
    let returnArr = [];

    for(let i=0; i<array.length; i++) {
      returnArr.push(callbackFunc(array[i], i, array)); 
    }

    return returnArr;
  }

/*
****************************************************************************************************************************
*/

  Array.prototype.filter = function (callbackFunc) {
    let array = this;
    let returnArr = [];

    for(let i=0; i<array.length; i++) {
      if (callbackFunc(array[i], i, array)) {
        returnArr.push(array[i])
      }
    }

    return returnArr;
  }

/*
****************************************************************************************************************************
*/

  Array.prototype.reduce = function (callbackFunc, initVal) {
    let array = this;
    let acc = initVal;

    for(let i=0; i<array.length; i++) {
      if (acc !== undefined) {
        acc = callbackFunc(array[i], i, array)
      }
      else {
        acc = array[i]
      }
    }

    return acc;
  }

/*
****************************************************************************************************************************
*/
