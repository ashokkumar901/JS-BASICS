var counter = (() => {
    var privateCounter = 0;

    changeVal = (val) => {
        privateCounter += val;
    }

    return {
        increase: () => {
            changeVal(1);
        },

        decrease: () => {
            changeVal(-1);
        },

        value: () => {
            return privateCounter;
        }
    }
})();


console.log(counter.value());