/**
 * Best way to find the value of "this" is by checking the object towards the left
 * of the function. eg: obj.func()
 * 
 * 4 types of function invocations:
 * 
 *  1. function invocation (regular function calls):
 * 
 *      function f1() { consol.log(this) }
 *      f1()
 * 
 *      // here this will point to "window" obj as f1() is declared in global space.
 *      // but if we "use strict" mode, then the value of "this" inside function will be "undefined".
 * 
 * 
 *  2. Method invocation (methods are function within an object's scope):
 * 
 *      myDog.bark()
 * 
 * 
 *  3. Constructor invocation:
 * 
 *      const objInstance = new ClassName();
 * 
 * 
 *  4. Indirect function invocation:
 * 
 *      Using call, apply, bind:
 * 
 *      f1.call(obj, arg1, arg2, ...)
 *      f1.apply(obj, [arg1, arg2, ...])
 *      
 *      // **** bind ****
 *      const func = f1.bind(obj)
 *      func(arg1, arg2, ....);
 *      
 *      // **** or also ****
 *      const func = f1.bind(obj, arg1, arg2)
 *      func(arg3, arg4, ....)
 */

const cafe = {
    cafeName: "Boba JJ",
    cafeOwner: "Sindhu",
    cafeMenu: ["Boba Tea", "pastries", "coffee danish", "crossoints"],
    beverage: ["matcha", "boba", "vanilla latte", "espresso", "coffee"],
    printCafeName: function() {
        console.log(this.cafeName)
    },
    printCafeOwner() {
        console.log(this.cafeOwner)
    },
    printCafeMenu: () => {
        console.log(this.cafeMenu)
    },
    printBeveragesArrow: function() {
        this.beverage.forEach(item => {
            console.log(`${this.cafeName} has the beverage: ${item}`)
        })
    },
    printBeveragesReg: function() {
        let _self = this;
        this.beverage.forEach(function(item) {
            console.log(`${this.cafeName} has the beverage: ${item}`) // undefined has the beverage $item
            console.log(`${_self.cafeName} has the beverage: ${item}`) // BobaJJ has the beverage $item
        })

        this.beverage.forEach(function(item) {
            console.log(`${this.cafeName} has the beverage: ${item}`)
        }.bind(this)); // this binding, prints : BobaJJ has the beverage $ item
    },
    printBvgArrow: () => {
        this.beverage.forEach(item => {
            console.log(`${this.cafeName} has the beverage: ${item}`)
        })
    },
}

/*
********************************************************* ✓✓✓✓✓✓✓ *******************************************************************
*/

// Method added later and yet pertains the value of 'this'
cafe.sayHi = function() {
    console.log(`This is ${this.cafeName}, come say Hi!`)
}

cafe.sayHi() // This is Boba JJ, come say Hi!


cafe.printCafeName() // Boba JJ
cafe.printCafeOwner() // Sindhu


/*
***************************************************** ????????? ***********************************************************************
*/

const printCafeNameFunc = cafe.printCafeName;
printCafeNameFunc();


// OUTPUT: undefined


/**
 * If we extract a method from an object into a variable, then "this" points to the
 * global object, since its invoked in the global space. Hence this become a "regular
 * function invocation" and not a "method invocation"
 */

// ------------------------------------------------------------------------------------------------

cafe.printBeveragesReg()

/**
 * OUTPUT: 
 * 
 * undefined has the beverage: matcha
 * undefined has the beverage: boba
 * undefined has the beverage: vanilla latte
 * undefined has the beverage: espresso
 * undefined has the beverage: coffee
 */

/**
 * Explanation:
 * 
 * Here the printBeveragesReg loops through all items in beverages menu, to print those items along
 * with cafe name. The function printing this, is a callback function which is not a direct property
 * of the object.
 * Which means, when it gets executed, its treated as a function invocation and not a method invocation.
 * Hence, the 'this' references the 'window' object, so when we try tp access "this.cafeName", it
 * translates to "window.cafeName" which is 'undefined'
 */

// ------------------------------------------------------------------------------------------------

cafe.printBeveragesArrow()

/**
 * OUTPUT:
 * 
 * Boba JJ has the beverage: matcha
 * Boba JJ has the beverage: boba
 * Boba JJ has the beverage: vanilla latte
 * Boba JJ has the beverage: espresso
 * Boba JJ has the beverage: coffee
 */

/**
 * 
 * Arrow functions are bound to the scope of their lexical environment (visualize as a one level upper).
 * So unlike regular function statement, in case of arrow functions, the callback function acts like a 
 * closue instead of a function invocation, remembering the "this" value since its lexically bound to it.
 */

cafe.printBvgArrow()

/**
 * OUTPUT:
 * 
 * Uncaught TypeError: Cannot read properties of undefined (reading 'beverage')
 * 
 * 
 * Since the 'printBvgArrow' functiion itself is an arrow function, it cannot access 'this'.
 * Hence when we try to access 'this.beverages', the above error is thrown, since 'this' is
 * undefined.
 * 
 */

/*
****************************************************** ARROW FUNCTION ****************************************************************
*/

cafe.printCafeMenu() // undefined because arrow function --> discuss later in detail

/**
 * 
 * Just like as explained above, arrow functions are bound to the scope of their lexical enviroment.
 * In case of printCafeMenu function, which is a direct property of the object, its lexical socope is
 * nothing but the window object, hence 'this' references the 'window' object causing 'this.cafeMenu'
 * to be undefined, since window object does not have a property named 'cafeMenu'.
 */

/*
******************************************************** CONSTRUCTORS *****************************************************************
*/

function Dog(breed) {
    this.breed = breed;
    this.printBreedName = function() {
        console.log(this.breed)
    }
}

const dogBreed = new Dog('Golden Retriever')
dogBreed.printBreedName() 
// Golden Retriever

const dogBreed2 = new Dog('')
dogBreed.printBreedName() 
// ''

const dogBreed3 = new Dog()
dogBreed.printBreedName() 
// undefined, because breed was not initialized while instansiating
dogBreed.breed = 'Shiba Inu'
dogBreed.printBreedName() 
// Shiba Inu
// or write a setter method, or assigna default breed inside the function / constructor itself


/*
******************************************************** INDIRECT INVOCATIONS ********************************************************
*/

const cat = { name: 'cat' }
const rabbit = { name: 'rabbit' }
const concatName = function(str) { console.log(`${str} ${this.name}`) }

concatName.call(cat, 'Meow') // Meow cat
concatName.apply(rabbit, ["Hello"]) // Hello Rabbit
