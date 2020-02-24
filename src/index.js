document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form");
  const newTask = document.getElementById("new-task-description");
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // alert("button was clicked");
    
    function addTask(task) {
      alert(task);
    }
    addTask(newTask);
  });
});