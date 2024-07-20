
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function displayTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskItem = document.createElement('div');
    taskItem.className = 'taskItem';
    taskItem.innerHTML = `
      <span>${task}</span>
      <button onclick="editTask(${index})">Edit</button>
      <button onclick="deleteTask(${index})">Delete</button>
    `;
    taskList.appendChild(taskItem);
  });
}
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    taskInput.value = '';
    displayTasks();
  } else {
    alert('Please enter a task!');
  }
}

function editTask(index) {
  const newTaskText = prompt('Enter new task:');
  
  if (newTaskText !== null && newTaskText.trim() !== '') {
    tasks[index] = newTaskText.trim();
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
  }
}

function deleteTask(index) {
  if (confirm('Are you sure you want to delete this task?')) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
  }
}


function resetTasks() {
  if (confirm('Are you sure you want to reset all tasks?')) {
    tasks = [];
    localStorage.removeItem('tasks');
    displayTasks();
  }
}

displayTasks();
