document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form");
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button was clicked");
  });
  
  
});
