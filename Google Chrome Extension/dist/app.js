const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

let mySaves = []

inputBtn.addEventListener("click", function () {
    // console.log("Button clicked from addEventListener")
    mySaves.push(inputEl.value)
    // ulEl.textContent = mySaves
    inputEl.value = ""
    renderSaves()
})


function renderSaves() {
    let listItems = ""
    for (let i = 0; i < mySaves.length; i++) {
        //The += allows the loop to take the previous value and concatenate it with the current array the user is looking at
        // ulEl.innerHTML += "<li>" + mySaves[i] + "</li>"
        listItems += `
    <li>
        <a target='_blank' href='${mySaves[i]}'>
            ${mySaves[i]}
        </a>
    </li>
    `
    }
    ulEl.innerHTML = listItems
}







