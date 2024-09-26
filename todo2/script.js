var input = document.getElementById("todo");
var add = document.getElementById("add");
var clear = document.getElementById("clear");
var empty = document.getElementById("empty");
var save = document.getElementById("save");
var list = document.getElementById("list");


add.addEventListener("click", addTodo);
empty.addEventListener('click',emptyList);
save.addEventListener('click',saveList);
clear.addEventListener('click',clearCompletedList);

function addTodo() {
    
    var title = input.value ;
    newTodoItem(title,false);
}

function newTodoItem(title,completed) {
    var listItem = document.createElement('li');
    var itemText = document.createTextNode(title);
    listItem.appendChild(itemText);
    list.appendChild(listItem);

    if(completed){
        listItem.classList.add('completed');
    }

    listItem.addEventListener('dblclick',toggleTodo);
}
function toggleTodo(){
    if(this.classList.contains('completed')){
        this.classList.remove('completed');
    }
    else{
        this.classList.add('completed');
    }
}

function emptyList(){
    while(list.children.length > 0){
        list.children.item(0).remove();
    }
}

function saveList() {
    var todos = [];
    for(let i=0 ; i<list.children.length ; i++){
        var todo =
        {
            title : list.children.item(i).textContent,
            completed : list.children.item(i).classList.contains('completed')
        };
        todos.push(todo);
    }
    localStorage.setItem('todos',JSON.stringify(todos));
}

function clearCompletedList() {
    var completeTodos = document.getElementsByClassName('completed');
    while(completeTodos.length>0){
        completeTodos.item(0).remove();
    }
}

function loadList(){
    var savedList = JSON.parse(localStorage.getItem('todos'));
    for(let i=0 ; i<savedList.length ; i++){
        todo = savedList[i];  
        newTodoItem(todo.title , todo.completed);
    }
}
 loadList();