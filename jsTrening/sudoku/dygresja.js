for(let i = 0; i < 9; i++) {

    console.log(`${i}-th square`)

    for(let j = 0; j < 9; j++) {
        console.log(Math.floor(i/3) * 3 + Math.floor(j/3), i % 3 * 3 + j % 3)
    }
}