let mySaves = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("mySaves"))
// console.log(leadsFromLocalStorage)

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    mySaves = []
    renderSaves()
})

// //truthy value statement being tested
// if (leadsFromLocaStorage) {
//     mySaves = leadsFromLocalStorage
//     renderSaves()
// }

inputBtn.addEventListener("click", function () {
    mySaves.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("mySaves", JSON.stringify(mySaves))
    renderSaves()
    //to verify it works
    // console.log(localStorage.getItem("mySaves"))
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







