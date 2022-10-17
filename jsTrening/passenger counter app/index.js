let count = 0

function increment() {
    let countEl = document.getElementById("count-el")
    count += 1
    countEl.textContent = count
    console.log(count)
}


function save() {
    let countStr = count + " - "
    let saveEl = document.getElementById("save-el")
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    
}