export const throttleFunc = (operationFunc, delay) => {
    let shouldExecuteOperationFunc = true;

    return function(...args) {
        let context = this; 
        if (shouldExecuteOperationFunc) {
            shouldExecuteOperationFunc = false;
            operationFunc(...args);
            setTimeout(() => {
                shouldExecuteOperationFunc = true;
            }, delay)
        }
    }
}
