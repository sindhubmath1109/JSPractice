const getData = function() {
    console.log('Fetching data from server');
}

let debounceFunc = function(expensiveFunctionCallToBeMade, delay) {
    let timer;
    return function() {
        let context = this;
        let args = arguments;
        if (timer) {
            // if the timer is still running then clear the timer
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            expensiveFunctionCallToBeMade.apply(context, [...args])
        }, delay);
    }
}

window.addEventListener("click", debounceFunc(getData, 500));
