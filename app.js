// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);


// Functions 
function addTodo(event) {
    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    if(todoInput.value === ""){
        alert("Please add a task");
    }else{ 
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
    }
    
};

function deleteCheck(event) {
   const item = event.target

   if(item.classList[0] === "delete-btn" ){
       const todo = item.parentElement;
    //    added class of fall to style the element off the page
       todo.classList.add('fall')
       todo.addEventListener('transitionend', function(){
            todo.remove();
       })
        
   }

   if(item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed')
      
   }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none"
                }  
               break;
            case 'not-done':
                if(!todo.classList.contains('completed')){
                    todo.style.display = "flex"
                } else {
                    todo.style.display = "none"
                }
                break;
        }
    });
}

