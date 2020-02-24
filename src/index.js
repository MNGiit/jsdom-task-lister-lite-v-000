document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form");
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    taskList.createNewTask(newTaskDescription.value);
    // reset form
    e.target.reset();
    renderApp();
  });
  
  
});
