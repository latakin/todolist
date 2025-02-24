let taskIndex = 1;
function addTask() {
  const userInputElement = document.getElementById('userInput');
  let userInput = userInputElement.value;
  if (userInput.trim() === "") {
    alert("Please enter a task.");
    return;
  }
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = "check";

  //userInput.appendChild(checkbox);
  const taskDiv = document.createElement('div');
  taskDiv.className = "task-item task-container";
  taskDiv.textContent = `${taskIndex}.  ${userInput}`;
  taskDiv.appendChild(checkbox);
  const taskAdded = document.getElementById('taskd');
  taskAdded.appendChild(taskDiv);
  const removeButton = document.querySelector('button[onclick="removeTask()"]');
  removeButton.style.display = 'block';
  taskIndex++;
  userInputElement.value = "";
  
}
function removeTask() {
  const tasks = document.querySelectorAll('#taskd .task-item');
  tasks.forEach(task => {
    const checkbox = task.querySelector('input[type="checkbox"]');
    if (checkbox.checked) {
      task.remove();
    }
    
  });
  const remainingTasks = document.querySelectorAll('#taskd .task-item');
  if (remainingTasks.length === 0) {
    const removeButton = document.querySelector('button[onclick="removeTask()"]');
    removeButton.style.display = 'none'; // Hide the remove button
}
}
document.addEventListener('DOMContentLoaded', () => {
  const removeButton = document.querySelector('button[onclick="removeTask()"]');
  removeButton.style.display = 'none';
});