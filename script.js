const inputBox = document.getElementById("input-box");
const taskList = document.getElementById("task-list");

function addTask() {
  if (inputBox.value === "") {
    alert("must entrsomething");
  } else {
    const li = document.createElement("li");
    li.innerHTML = inputBox.value;
    taskList.appendChild(li);
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  inputBox.value = "";
  saveTask();
}

taskList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveTask();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveTask();
    }
  },
  false
);

function saveTask() {
  localStorage.setItem("task", taskList.innerHTML);
}

function showTask() {
  taskList.innerHTML = localStorage.getItem("task");
}
showTask();
