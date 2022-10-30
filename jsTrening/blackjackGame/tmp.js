class someClass {
    name = "twojaMatka"
    value = 5
    multiplayer = 3

    getValue() {
        return this.value * this.multiplayer
    }
}

let obj = new someClass()
let obj2 = obj

obj.value = 70
obj.multiplayer = 1
obj.name = "sth"
obj2.value = 70


console.log(obj2.value)