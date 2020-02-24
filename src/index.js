document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form");
  const newTask = document.getElementById("new-task-description");
  let tasks = [];
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // alert("button was clicked");
    
    function addTask(task) {
      // alert(task);
      tasks.push(task);
      taskString(task);
    }
    function taskString(task) {
      return `<li>${task}</li>`;
    }
    addTask(newTask.value);
    
    
  });
});



class Task {
  constructor(description) {
    this.description = description;
  }

  render() {
    return `
      <li>
        ${this.description}
        <button data-description="${this.description}">X</button>
      </li>
      `;
  }
}