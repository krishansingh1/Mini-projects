//Tasks
let tasks = [];

const taskList = document.getElementById("list");
const addTaskInput = document.getElementById("add");
const tasksCounter = document.getElementById("tasks-counter");
const deleteBtn = document.getElementById("delete");

//Function for appending the list
function renderList() {}

//Function for add tasks
function addTask(task) {
  if (task) {
    tasks.push(task);
    console.log(tasks);
    renderList();
    showNotification("Task Added succesfully");
    return;
  }
  showNotification("Task cannot be added");
}

//Function for Check Todo/Task
function markTaskAsComplete(taskId) {
  const toggleTask = tasks.filter((task) => {
    return task.id === taskId;
  });

  if (toggleTask.length > 0) {
    const currentTask = toggleTask[0];
    currentTask.done = !currentTask.done;
    renderList();
    showNotification("Task toggled Successfully");
    return;
  }

  showNotification("Could not toggle the task");
}

//Function for deleting tasks
function deleteTask(taskId) {
  const newTasks = tasks.filter((task) => {
    return task.id !== taskId;
  });

  tasks = newTasks;
  renderList();
  showNotification("Task deleted Successfully");
}

//Function for showNotifications
function showNotification(text) {
  alert(text);
}

//Function to handleInputs
function handleInput(e) {
  if (e.key === "Enter") {
    const text = e.target.value;
    console.log(text);

    if (!text) {
      showNotification("Text Input cannot be empty");
      return;
    }

    const task = {
      text: text,
      id: Date.now().toString(),
      done: false,
    };

    console.log(task);

    e.target.value = " ";
    addTask(task);
  }
}

addTaskInput.addEventListener("keyup", handleInput);
