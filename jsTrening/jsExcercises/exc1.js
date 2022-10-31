let nums = [2, 7, 11, 15]
let target = 9

for(let i = 0; i < nums.length; i++){
    let tmp = target - nums[i]
        for ( let j = 0; j < nums.length; j++){
            if ( nums[j] == tmp ){
                let tmpArray = [i , j]
                return tmpArray
            }
        }
    }
