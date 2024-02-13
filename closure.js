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

export function f2() {
    let m = 7
    function n() {
        console.log(m)
    }
    return n;
}

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
