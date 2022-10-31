const inputButton = document.getElementById("input-btn")

let inputText = ''
let myLinks = []
let i = 0


inputButton.addEventListener("click", function(){
   inputText = document.getElementById("input-el").value
   myLinks.push(inputText)
   console.log(myLinks)
   document.getElementById("link-el").innerHTML += `<p class='link'>link ${i + 1}: <a href='${myLinks[i]}' class="link" target='_blank'>${myLinks[i]}</a></p>`
   i += 1
   document.getElementById("input-el").value = ''

    localStorage.setItem("myLinks", JSON.stringify(myLinks))
    console.log(localStorage)
})





