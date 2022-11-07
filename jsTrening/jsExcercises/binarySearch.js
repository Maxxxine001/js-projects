

function getIndex(array, number) {
    let low = 0
    let high = array.length - 1
    
    let mid = 0
    while(low < high) {
        mid = Math.floor((high + low) / 2)

        if(array[mid] == number) {
            return mid
        }


        if (array[mid] < number) {
            low = mid + 1
        } else {
            high = mid - 1
        }

    }
    if(array[low] == number) {
        return high
    } else { 
        return -1
    }

}

for(let i = 0; i < 100; i++) {
    let array = []
    for(let i = 0; i < 1000; i++) {
        array.push(Math.floor(Math.random() * 10000))
    }
    array.sort(function(a, b) {
        return a - b;
     });
    let randomIndex = Math.floor(Math.random() * 1000)

    let computedIndex = getIndex(array, array[randomIndex])
    if(array[computedIndex] != array[randomIndex]) {
        console.log('ŹLE KURWA')
    }
}


