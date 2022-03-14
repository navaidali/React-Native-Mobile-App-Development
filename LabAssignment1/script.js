const classNames = {
    TODO_ITEM: "todo-container",
    TODO_CHECKBOX: "todo-checkbox",
    TODO_TEXT: "todo-text",
    TODO_DELETE: "todo-delete",
};

const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");
const list1 = [];

function newTodo() {
    /*Add Logic for creating a new Todo Item. */
    var box = document.getElementById("box");
    var li = document.createElement("li");
    li.setAttribute('id', box.value);
    li.appendChild(document.createTextNode(box.value));
    list.appendChild(li);
    //var node = document.createElement('li');
    //list.appendChild(document.createTextNode(newTodo));
    //document.querySelector('ul').appendChild(node);
    /*Below lines can be used to updated the data on frontend */
    itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML) + 1;
    uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) + 1;
}

function removeTodo() {
    /*Add Logic for removing an existing TODO Item */
    /*Below lines can be used to updated the data on frontend */
    var box = document.getElementById("box");
    var item = document.getElementById(box.value);
    list.removeChild(item);
    itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML) - 1;;
    uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) - 1;
}