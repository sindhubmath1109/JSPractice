export let user = {
    name: "Sindhu",
    address: {
        personal: {
            street: "134 N Butler Street",
            Apt: "2",
            zip: "53703",
            city: "Madison",
            state: "WI"
        },
        work: {
            street: "400 Jefferson Park",
            zip: "07981",
            city: "Whippany",
            state: "NJ"
        }
    },
    phone: 6085909893,
    age: 27
}

/******************************************************************************************/

/**
 * 
 * @param {*} obj --> object to be parsed
 * @param {*} parentKey --> key of the parent object
 */

let returnObj = {};

export let combineFields = (obj, parentKey) => {
    for(let key in obj) {
        if(typeof(obj[key]) === "object") {
            combineFields(obj[key], `${String(parentKey)}_${key}`)
        }
        else {
            returnObj[`${String(parentKey)}_${key}`] = obj[key]
        }
    }
    return returnObj;
}

/******************************************************************************************/

const clonedObject = {};

export function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj; // Base case: return non-object values or null as is
    }
  
    if (Array.isArray(obj)) {
      // Handle arrays separately
      return obj.map(deepClone); // Recursively apply deepClone to each array element
    }
  
    // Handle regular objects
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) { // hasOwnProperty will only check the keys of the object, not the ones in its prototype unlike includes() function
        clonedObject[key] = deepClone(obj[key]); // Recursively apply deepClone to each object property
      }
    }
  
    return clonedObject;
  }


/******************************************************************************************/

  export let objDeepCloneDuplicate = obj => {

    if (typeof obj !== 'object' || obj === null) {
      return obj
    }

    if (Array.isArray(obj)) {
      obj.map(objDeepCloneDuplicate)
    }

    for(let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObject[key] = objDeepCloneDuplicate(obj[key])
      }
    }

    return clonedObject;
  }
  