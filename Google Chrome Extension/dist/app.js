let mySaves = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("mySaves"))
// console.log(leadsFromLocalStorage)

// //truthy value statement being tested
if (leadsFromLocalStorage) {
    mySaves = leadsFromLocalStorage
    render(mySaves)
}

function render(saves) {
    let listItems = ""
    for (let i = 0; i < saves.length; i++) {
        //The += allows the loop to take the previous value and concatenate it with the current array the user is looking at
        // ulEl.innerHTML += "<li>" + mySaves[i] + "</li>"
        listItems += `
    <li>
        <a target='_blank' href='${saves[i]}'>
            ${saves[i]}
        </a>
    </li>
    `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    mySaves = []
    render(mySaves)
})

inputBtn.addEventListener("click", function () {
    mySaves.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("mySaves", JSON.stringify(mySaves))
    render(mySaves)
    //to verify it works
    // console.log(localStorage.getItem("mySaves"))
})







