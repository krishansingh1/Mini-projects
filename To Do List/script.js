//Tasks
const tasks = [];

const taskList = document.getElementById("list");
const addTaskInput = document.getElementById("add");
const tasksCounter = document.getElementById("tasks-counter");
console.log("working");
//Function for appending the list
function renderList() {}

//Function for add tasks
function addTask(task) {
  tasks.push(task);
  console.log(tasks);
  renderList();
}

//Function for deleting tasks
function deleteTask(taskId) {}

//Function for Check Todo/Task
function markTaskAsComplete(taskId) {}

//Function for showNotifications
function showNotification(text) {
  alert(text);
}

//Function to handleinputs
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
