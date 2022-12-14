(function () {
  let tasks = [];

  const taskList = document.getElementById("list");
  const addTaskInput = document.getElementById("add");
  const tasksCounter = document.getElementById("tasks-counter");

  //Function to fetch data from an API

  async function fetchData() {
    // fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then((Response) => Response.json())
    //   .then((data) => {
    //     tasks = data.slice(0, 10);
    //     console.log(tasks);
    //     renderList();
    //   })
    //   .catch((error) => {
    //     console.log("Error:", error);
    //   });
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    return await response.json();
  }

  fetchData()
    .then((data) => {
      tasks = data.slice(0, 10);
      console.log(tasks);
      renderList();
    })
    .catch((error) => {
      console.log("Error", error);
    });

  //Function to Add Task to Dom

  function addTaskToDom(task) {
    const li = document.createElement("li");

    li.innerHTML = `
          <input
                type="checkbox"
                id="${task.id}"
                ${task.completed ? "checked" : ""}
                class="custom-checkbox"
              />
              <label for="${task.id}">${task.title}</label>
              <img src="/To Do List/trash-svgrepo-com.svg" class="delete" data-id="${
                task.id
              }"/>
      `;

    taskList.append(li);
  }

  //Function for appending the list
  function renderList() {
    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
      addTaskToDom(tasks[i]);
    }
    tasksCounter.innerHTML = tasks.length;
  }

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
      return task.id === Number(taskId);
    });

    if (toggleTask.length > 0) {
      const currentTask = toggleTask[0];
      currentTask.completed = !currentTask.completed;
      renderList();
      showNotification("Task toggled Successfully");
      return;
    }

    showNotification("Could not toggle the task");
  }

  //Function for deleting tasks
  function deleteTask(taskId) {
    const newTasks = tasks.filter((task) => {
      return task.id !== Number(taskId);
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
        title: text,
        id: Date.now().toString(),
        completed: false,
      };

      console.log(task);

      e.target.value = " ";
      addTask(task);
    }
  }

  function handleClickListener(e) {
    const target = e.target;
    if (target.className === "delete") {
      const taskId = target.dataset.id;
      deleteTask(taskId);
      return;
    } else if (target.className === "custom-checkbox") {
      const taskId = target.id;
      markTaskAsComplete(taskId);
      return;
    }
  }

  function initializeApp() {
    // fetchData();
    addTaskInput.addEventListener("keyup", handleInput);
    document.addEventListener("click", handleClickListener);
  }

  initializeApp();
})();

// function modifyArray(arr) {
//   let arr2 = [];
//   return arr
//     .map((num) => {
//       return num + num;
//     })
//     .filter((num) => {
//       if (num > 0) {
//         return arr2.push(num);
//       }
//       if (arr2.includes(undefined)) {
//         return arr2;
//       }
//     });
// }

// console.log(modifyArray([-1, undefined, 3, 4, -43, 0]));

// let arr = [];
// async function getPosts() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return await response.json();
// }

// getPosts().then((data) => {
//   arr = data.slice(0, 10);

//   arr.map((list) => {
//     console.log(`Title:${list.title}`);
//     console.log(`Body: ${list.body}`);
//   });
// });
