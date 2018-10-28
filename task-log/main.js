// DOM elements
const taskInput = document.getElementById('task-input');
const log = document.getElementById('log');
const clear = document.getElementById('clear');
const taskList = document.getElementById('task-list');

log.addEventListener('click', () => {
    const task = document.createElement('li');
    const del = document.createElement('span');

    del.textContent = 'X';
    task.textContent = taskInput.value;

    task.appendChild(del);
    taskList.appendChild(task);

    taskInput.value = '';
    taskInput.focus();
});

clear.addEventListener('click', () => {
    taskInput.value = '';
    taskList.textContent = '';
    taskInput.focus();
})