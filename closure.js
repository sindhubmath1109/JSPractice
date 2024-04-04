/*
 * a function bundled with its lexical environment is known as a closure
 * i.e., even if the function's execution context has vanished it still
 * carries it's lexical scope with it, so the varibales within that
 * lexical environment can be accessed (by their reference ) even when 
 * the closure function is invoked outside of that lexical block.
 * 
 * i.e., the function will have reference to its outer lexical env
 * i.e., of its parent. so even if the function is exceuted outside of its scope, it
 * will remember its outer lexical environment.
 */

export function f1() {
    let a = 7
    function y() {
        console.log(a)
    }
    y();
}

/******************************************************************************************/


export function f2() {
    let m = 7
    function n() {
        console.log(m)
    }
    return n;
}

/******************************************************************************************/


export function getReduce(users) {
    let key;
    let output = users.reduce((acc, elem) => {
        key = elem.age
        acc[key] = (acc[key] ?? 0) + 1;
        // if(!acc[elem.age]) {
        //     acc[key] = 1
        // }
        // else {
        //     acc[key] += 1;
        // }
        return acc;
    }, {});
    console.log(output);
}

/******************************************************************************************/

export function counter() {
    let count = 0;

    function increment() {
        count += 1;
        return count;
    }

    function decrement() {
        if(count > 0) count -= 1;
        return count;
    }

    return {
        increment,
        decrement
    }
}

/******************************************************************************************/

/* 
 * Cache implementation using Closures
 */

function createCache() {
    const cache = {};
  
    return {
      get(key) {
        return cache[key];
      },
      set(key, value) {
        cache[key] = value;
      },
      remove(key) {
        delete cache[key];
      },
      clear() {
        Object.keys(cache).forEach(key => {
          delete cache[key];
        });
      },
      getAll() {
        return { ...cache };
      }
    };
  }
  
  // Example usage:
  const cache = createCache();
  
  cache.set('name', 'John');
  cache.set('age', 30);
  
  console.log(cache.get('name')); // Output: John
  console.log(cache.get('age')); // Output: 30
  
  cache.remove('age');
  console.log(cache.get('age')); // Output: undefined
  
  cache.clear();
  console.log(cache.getAll()); // Output: {}
  
  /******************************************************************************************/
