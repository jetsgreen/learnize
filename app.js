// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const container = document.getElementsByClassName('container');
const todoList = document.querySelector('.todo-list');


// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck)


// Functions 
function addTodo(event) {
    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // Check Trash Button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class = "fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);

    todoList.appendChild(todoDiv)
    // To clear value from input after creating a task
    todoInput.value ="";
};

function deleteCheck(event) {
   const item = event.target

   if(item.classList[0] === "delete-btn" ){
    item.remove();
   }
}