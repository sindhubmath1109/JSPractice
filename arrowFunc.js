export function UserName(name) {
    this.name = name;
  }

/* 
 * In classic function expressions, the this keyword is bound to different values based on 
 * the context in which it is called. With arrow functions however, this is lexically bound. 
 * It means that it uses this from the code that contains the arrow function.
 */

/*
 * Note that this also means that is not possible to set an arrow function's this with .bind or .call
 */

/*
 * Arrow functions cannot be called with new
 * 
 * ES2015 distinguishes between functions that are callable and functions that are constructable.
 * 
 * If a function is constructable, it can be called with new, i.e. new User(). 
 * 
 * If a function is callable, it can be called without new (i.e. normal function call).
 * 
 * Functions created through function declarations / expressions are both constructable and callable.
 * 
 * Arrow functions (and methods) are only callable.
 */
  
export const UserArrow = name => {
    this.name = name;
};


  class Person {
    constructor(name) {
        this.name = name;
    }

    printNameArrow() {
        setTimeout(() => {
            console.log("Arrow => ", this.name);
        }, 100)
        console.log("Arrow outisde setTimeout => ", this.name);
    }

    printNameFunc() {
        setTimeout(function() {
            console.log("Function => ", this.name);
        }, 100)
        console.log("Function outisde setTimeout => ", this.name);
    }

  }

 export let person = new Person('Bob');
 