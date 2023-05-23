const form = document.getElementById("myForm")
const todoArray = []

class Todo{
    constructor(textItem, isDone){
        this.textItem = textItem;
        this.isDone = isDone;
    }
}

function handleSubmit(event){
    event.preventDefault();
    const input = document.getElementById("input")
    const todoItem = new Todo(input.value, false)
    todoArray.push(todoItem)
    console.log(todoArray)
    displayTodoArray()
    input.value = "";

} 

function displayTodoArray(){
     const mainDiv = document.getElementById("myDiv")
     mainDiv.innerHTML="";
     todoArray.forEach(todo =>{
        const subDiv = document.createElement("div")
        const todoString = JSON.stringify(todo)
        subDiv.innerText = todoString;
        mainDiv.appendChild(subDiv);
     })
}

form.addEventListener("submit", handleSubmit)
