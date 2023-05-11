const input = document.getElementById("input")
const addButton = document.getElementById("addButton")
const list = document.getElementById("list")

function addListItem(itemValue){
    if (itemValue !== ""){
        const li = document.createElement(li)
    li.innerText = itemValue;
    list.appendChild(li)
    } 
}


const myForm = document.getElementById("myForm")
myForm.addEventListener("submit", handleSubmit)

function handleSubmit(event){
    event.preventDefault();
    addListItem(input.value)
    input.value = "";
}