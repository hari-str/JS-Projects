const inputText = document.getElementById("inputValue");

// add task
function addTask() {
  if (inputText.value.trim() != 0) {
    let localTask = JSON.parse(localStorage.getItem("tasks"));
    if (localTask === null) {
      taskList = [];
    } else {
      taskList = localTask;
    }
    taskList.push(inputText.value);

    localStorage.setItem("tasks", JSON.stringify(taskList));
  }

  showList();
}

// show items
function showList() {
  let localTask = JSON.parse(localStorage.getItem("tasks"));
  if (localTask === null) {
    taskList = [];
  } else {
    taskList = localTask;
  }

  let html = "";
  let itemShow = document.querySelector(".todo__Lists");
  taskList.forEach((data, index) => {
    html += `<li>
    ${data}
    <span class="trash__icon" onClick="deleteTask(${index})">
    <i class="fa-solid fa-trash"></i>
    </span>
  </li>`;
  });
  itemShow.innerHTML = html;
}
showList();

//delete item
function deleteTask(index) {
  let localTask = JSON.parse(localStorage.getItem("tasks"));
  taskList.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(taskList));
  showList();
}

//clear localstorage
function clearTask() {
  localStorage.clear();
  showList();
}
