var isHappy = function(n) {

    let currentValue = n
    let previousValues = {}

    while(currentValue != 1 && previousValues[currentValue] == undefined) {
        previousValues[currentValue] = true
        let newValue = 0

        while(currentValue > 0) {
            newValue += (currentValue % 10) * (currentValue % 10)
            currentValue /= 10
            currentValue = Math.floor(currentValue)
        }
        currentValue = newValue
    }
    
    return currentValue == 1
};

isHappy(19)