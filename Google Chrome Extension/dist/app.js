const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

let mySaves = []

inputBtn.addEventListener("click", function () {
    // console.log("Button clicked from addEventListener")
    mySaves.push(inputEl.value)
    ulEl.textContent = mySaves
    console.log(mySaves)
})


