var addButton = document.getElementById("add-button");
var clearCompletedButton = document.getElementById("clear-completed-button");
var emptyListButton = document.getElementById("empty-button");
var saveListButton = document.getElementById("save-button");
var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");

addButton.addEventListener("click", addTodoItem);
function addTodoItem() {
  var itemText = toDoEntryBox.value;
  if (itemText !== "") {
    newToDoItem(itemText, false);
  }
}
function newToDoItem(itemText, completed) {
  var toDoItem = document.createElement("li");
  var toDoText = document.createTextNode(itemText);
  toDoItem.appendChild(toDoText);

  if (completed) {
    toDoItem.classList.add("completed");
  }
  toDoList.appendChild(toDoItem);
  toDoItem.addEventListener("dblclick", toggleToDoItemState);
}

function toggleToDoItemState() {
  if (this.classList.contains("completed")) {
    this.classList.remove("completed");
  } else {
    this.classList.add("completed");
  }
}

clearCompletedButton.addEventListener("click", clearCompletedToDoItems);
function clearCompletedToDoItems() {
  var completedItems = document.getElementsByClassName("completed");

  while (completedItems.length > 0) {
    completedItems.item(0).remove();
  }
}

emptyListButton.addEventListener("click", emptyList);
function emptyList() {
  var toDoItems = toDoList.children;
  while (toDoItems.length > 0) {
    toDoItems.item(0).remove();
  }
}

saveListButton.addEventListener("click", saveList);
function saveList() {
  var toDos = [];

  for (var i = 0; i < toDoList.children.length; i++) {
    var toDo = toDoList.children.item(i);

    var toDoInfo = {
      task: toDo.innerText,
      completed: toDo.classList.contains("completed"),
    };

    toDos.push(toDoInfo);
  }
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

function loadList() {
  if (localStorage.getItem("toDos") != null) {
    var toDos = JSON.parse(localStorage.getItem("toDos"));

    for (var i = 0; i < toDos.length; i++) {
      var toDo = toDos[i];
      newToDoItem(toDo.task, toDo.completed);
    }
  }
}
loadList();
