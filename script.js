const input = document.getElementById("input")
console.log("hello how are you?", input)
const addButton = document.getElementById("addButton")
console.log(addButton)
const list = document.getElementById("listElements")
console.log("Hello", list)

function handleClick() {
    console.log("clicked me", input.value);
    addItem(input.value);
}
function addItem(itemValue) {
    const li = document.createElement("li");
    li.innerText = itemValue;
    list.appendChild(li);
}
addButton.addEventListener("click", handleClick)