//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event listeners
todoButton?.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//functions
function addTodo(event){
    event.preventDefault(); //prevent from submission
    //Todo Div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo');
    //Create Li
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //create checked button
    const completedButton = document.createElement("button")
    completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //create Trash button
    const trashButton = document.createElement("button")
    trashButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //appending all this in UL list
    
    if(todoInput.value !== ""){
    todoList.appendChild(todoDiv);
    }
    
    //To clear out todo input value after submitting
    todoInput.value ='';
}
    
    function deleteCheck(e) {
        const item = e.target;
        const itemParent = item.parentElement;
        //delete button
        if (item.classList[0] === "trash-btn") {
            itemParent.remove();
        }
        //check button
        if(item.classList[0] === "complete-btn") {
            itemParent.classList.toggle("completed");
        }
    }


//To check if the input is not empty
