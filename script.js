const form = document.getElementById("myForm")
const array = getFromLocalStorage()
displayTodo()

class Todo{
    constructor (text, isDone){
        this.text = text
        this.isDone = isDone
    }
}
function storeToLocalStorage(){
    localStorage.setItem("todos", JSON.stringify(array))
}
function getFromLocalStorage(){
    const todosString = localStorage.getItem("todos")
    // if(todosString){
    //     return JSON.parse(todosString)
    // }
    // else{
    //     return []
    // }
    return todosString ? JSON.parse(todosString) : [];
}
function handleDone(i){
    console.log(i)
    array[i].isDone = true
    displayTodo()
}
function handleDelete(i){
    array.splice(i, 1)
    displayTodo()
}
function displayTodo(){
    const mainDIv = document.getElementById("myDiv")
    mainDIv.innerHTML=""
    array.forEach((todo,index) =>{
        const subDiv = document.createElement("div")
        console.log(subDiv)
        subDiv.innerText = todo.text
        console.log(todo)
        mainDIv.appendChild(subDiv)
        
        // console.log(mainDIv.appendChild(subDiv))
        
        if(todo.isDone===true){
            subDiv.style="text-decoration:line-through"
        }
        else{
        const doneButton = document.createElement("button")
        doneButton.innerText = "Done"
        subDiv.appendChild(doneButton)
        doneButton.addEventListener("click", ()=>handleDone(index))
        }

        const deleteButton = document.createElement("button")
        deleteButton.innerText = "Delete"
        subDiv.appendChild(deleteButton)
        deleteButton.addEventListener("click", ()=>handleDelete(index))
    })
    storeToLocalStorage()
}
function handleSubmit(event){
    event.preventDefault()
    const input = document.getElementById("input")
    const inputItem = new Todo (input.value, false)
    array.push(inputItem)
    console.log(inputItem)
    displayTodo()
    input.value=""
}
form.addEventListener("submit", handleSubmit)