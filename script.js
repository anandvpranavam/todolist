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

const myInput = document.getElementById("myinput")
myInput.addEventListener("keyup", handlekeyUp)

function handlekeyUp(event){
    console.log("this is my input", event.target.value)
    const divValue = document.getElementById("target")
    divValue.innerText = event.target.value;
    // target.innerText = event.target.value;

}