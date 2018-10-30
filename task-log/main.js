// DOM elements
const taskInput = document.getElementById("task-input");
const log = document.getElementById("log");
const clear = document.getElementById("clear");
const taskList = document.getElementById("task-list");

// Log tasks
log.addEventListener("click", () => {
  // Only proceed if the user inputs a value
  if (taskInput.value !== "") {
    const task = document.createElement("li");
    const del = document.createElement("span");

    del.textContent = "X";
    del.className = "delete";
    task.textContent = taskInput.value;

    task.appendChild(del);
    taskList.appendChild(task);

    taskInput.value = "";
    taskInput.focus();
  } else {
    alert("Please enter a task to continue");
  }
});

// Clear all tasks
clear.addEventListener("click", () => {
  taskInput.value = "";
  taskList.textContent = "";
  taskInput.focus();
});

taskList.addEventListener("click", event => {
  const target = event.target;

  if (target.nodeName === "LI") {
    // Create an array for task items(li) and remove active class
    let taskItems = [...taskList.children];
    taskItems.forEach(task => {
      task.classList.remove("active");
    });

    // Add background-color to selected task
    target.classList.add("active");
  }

  // Remove a task
  if (target.className === "delete") {
    target.parentNode.parentNode.removeChild(target.parentNode);
  }
});
