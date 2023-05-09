const input = document.getElementById("input")
console.log("hello how are you?", input)
const addButton = document.getElementById("addButton")
console.log(addButton)
const list = document.getElementById("listElements")
console.log("Hello", list)

// function handleClick() {
//     console.log("clicked me", input.value);
//     addListItem(input.value);
// }
function addListItem(itemValue) {
    if(itemValue !== ""){
    const li = document.createElement("li");
    li.innerText = itemValue;
    list.appendChild(li);
    }
}
// addButton.addEventListener("click", handleClick)

const myForm = document.getElementById("myForm")
myForm.addEventListener("submit", handleSubmit)

function handleSubmit(event){
    event.preventDefault();
    console.log("hey", event);
    addListItem(input.value);
    input.value = "";
}