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

export let computeSumSimple = a => {
    let sum = 0
    if (!a) return sum;
    return b => b ? computeSum(a+b) : (sum+a);
}


export function computeSum (a) {
    let sum = 0
    if (!a && typeof(a) !== "number") return sum;
    return b => (!b && (typeof(b) !== "number")) ? (sum+a) : computeSum(a+b);
}

export let sumArrow = x => y => y ? sum(x + y) : x;
