document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form");
  const newTask = document.getElementById("new-task-description");
  const taskList = document.getElementById();
  let tasks = [];
  
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // alert("button was clicked");
    
    function addTask(task) {
      alert(task);
      this.tasks << task;
      // taskList.appendChild(`<li>${task}</li>`)
      return `<li>${task}</li>`;
    }
    addTask(newTask.value);
  });
});


  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("Four"));
  ul.appendChild(li);