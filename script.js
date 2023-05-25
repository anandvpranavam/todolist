const form = document.getElementById("myForm")
const todoArray = []


class Todo {
    constructor(text, isDone) {
        this.text = text
        this.isDone = isDone
    }
}

function handleDone(i) {
    console.log(i)
    todoArray[i].isDone = true;
    displayTodo()
}
function handleDelete(i){
    console.log(i)
    todoArray.splice(i, 1)
    displayTodo()

}
function displayTodo() {
    const mainDIv = document.getElementById("myDiv")
    console.log(mainDIv)
    mainDIv.innerHTML = "";
    todoArray.forEach((todo, index) => {
        const subDiv = document.createElement("div")
        const todoString = todo.text
        subDiv.innerText = todoString
        
        if (todo.isDone === true) {
            subDiv.style = "text-decoration:line-through"
        }
        else {
            const doneButton = document.createElement("button")
            doneButton.innerText = "Done"
            subDiv.appendChild(doneButton)
            doneButton.addEventListener("click", () => handleDone(index))
        }
        const deleteButton = document.createElement("button")
        deleteButton.innerText = "Delete"
        subDiv.appendChild(deleteButton)
        deleteButton.addEventListener("click", ()=>handleDelete(index))
        console.log(todoString)
        mainDIv.appendChild(subDiv)

    })
}

function handleSubmit(event) {

    event.preventDefault()
    const input = document.getElementById("input")
    const textInput = new Todo(input.value, false)
    todoArray.push(textInput)
    console.log(textInput)
    displayTodo()
    input.value = ""
}
form.addEventListener("submit", handleSubmit)
