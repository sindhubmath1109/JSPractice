
export let flattenDeep = (arr, depth = 1) => {
  let resultFlatArr = [];
  for(let i=0; i< arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      resultFlatArr.push(...flattenDeep(arr[i], depth-1))
    }
    else {
      resultFlatArr.push(...arr[i])
    }
  }
  return resultFlatArr;
}

export function flattenArr(arr) {
  let res = [];
  debugger
  for(let i=0; i<arr.length; i++) {
    debugger;
    if (Array.isArray(arr[i])) {
      res = [...res, flattenArr(arr[i])]
    } else {
      res.push(arr[i])
    }
  }
  return res;
}

Array.prototype.flatten = (inputArr) => {
  if (!Array.isArray(inputArr)) throw new error("Input must be an array");
  if (inputArr.length === 0) return [];
  let result = []
  inputArr.forEach(elem => {
      if (typeof(elem) !== 'object') {
        debugger;
        result.push(elem)
      }
      else if (Array.isArray(elem)) {
        const a = flatten(elem);
        debugger
        result.push(...flatten(elem))
      }
      else {
          throw new error("contents must be either primitives or array")
      }
  });
  return result;
}