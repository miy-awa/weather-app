const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

const todos = []; // Store todos in an array

addBtn.addEventListener('click', () => {
    const todo = todoInput.value;
    if (todo !== '') {
        todos.push(todo);
        renderTodos();
        todoInput.value = '';
    }
});

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item';
        todoItem.textContent = todo;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            todos.splice(index, 1);
            renderTodos();
        });

        todoItem.appendChild(deleteBtn);
        todoList.appendChild(todoItem);
    });
}