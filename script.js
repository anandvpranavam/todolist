const input = document.getElementById("input")
const addButton = document.getElementById("addButton")
const list = document.getElementById("listElements")
const todos = [];

// localStorage.setItem("name", "anand");
const myForm = document.getElementById("myForm")    
myForm.addEventListener("submit", handleSubmit)   //to get the "Enter" event

function handleSubmit(event){
    event.preventDefault();
    todos.push(input.value);
    // addListItem(input.value)
    input.value = "";
    removeAllListItems();
    displayItem();    
}
function displayItem(){
    todos.forEach(function(a,b,c){
        addListItem(a)
        // console.log("a=", a);
        // console.log("b=",b);
        // console.log("c=",c);
    })
}

function addListItem(itemValue){
    if (itemValue !== ""){
        const li = document.createElement("li")
    li.innerText = itemValue;
    list.appendChild(li)
    } 
}
function removeAllListItems(){
    const listItems = document.getElementsByTagName("li");
    console.log(listItems)
    for (let i = 0;i<listItems.length;i++){
        console.log("list item",i)
        listItems[i].remove();
    }
}

displayItem();
removeAllListItems();

