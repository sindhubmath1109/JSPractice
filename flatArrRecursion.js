
/***************************************** flatten with depth *************************************************/

export let flattenDeep = (arr, depth = 1) => {
  let result = [];
  for(let i=0; i< arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      result.push(...flattenDeep(arr[i], depth-1))
    }
    else {
      result.push(arr[i])
    }
  }
  return result;
}
  
/***************************************** using for loop *************************************************/

export function flattenArr(arr) {
  if (!Array.isArray(arr)) throw new error("Input must be an array");
  if (arr.length === 0) return [];
  
  let res = [];
  
  for(let i=0; i<arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = [...res, ...flattenArr(arr[i])]
    } else {
      res.push(arr[i])
    }
  }
  return res;
}

/***************************************** using reduce *************************************************/

export function flattenArr2(arr) {
  if (Array.isArray(arr) || arr.length === 0) return arr;
  return arr.reduce((acc,elem) => {
    if(Array.isArray(elem)) {
      return [...acc, ...flattenArr2(elem)]
    } else {
      return [...acc, elem]
    }
  }, [])
}
