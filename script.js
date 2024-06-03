
  document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const dateInput = document.getElementById('task-date');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
  
    function createTaskElement(taskText, taskDate) {
      const listItem = document.createElement('li');
  
      const taskSpan = document.createElement('span');
      taskSpan.className = 'task-text';
      taskSpan.textContent = `${taskText} (Due: ${taskDate})`;
  
      const actionsDiv = document.createElement('div');
      actionsDiv.className = 'task-actions';
  
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', () => editTask(taskSpan));
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'delete';
      deleteButton.addEventListener('click', () => deleteTask(listItem));
  
      actionsDiv.appendChild(editButton);
      actionsDiv.appendChild(deleteButton);
  
      listItem.appendChild(taskSpan);
      listItem.appendChild(actionsDiv);
  
      return listItem;
    }
  
    function addTask() {
      const taskText = taskInput.value.trim();
      const taskDate = dateInput.value.trim();
      if (taskText !== '' && taskDate !== '') {
        const taskElement = createTaskElement(taskText, taskDate);
        taskList.appendChild(taskElement);
        taskInput.value = '';
        dateInput.value = '';
      }
    }
  
    function editTask(taskSpan) {
      const taskText = taskSpan.textContent.split(' (Due: ')[0];
      const taskDate = taskSpan.textContent.split(' (Due: ')[1].slice(0, -1);
      const newTaskText = prompt('Edit task', taskText);
      const newTaskDate = prompt('Edit date', taskDate);
      if (newTaskText !== null && newTaskText.trim() !== '' && newTaskDate !== null && newTaskDate.trim() !== '') {
        taskSpan.textContent = `${newTaskText.trim()} (Due: ${newTaskDate.trim()})`;
      }
    }
  
    function deleteTask(taskElement) {
      const confirmation = confirm('Are you sure you want to delete this task?');
      if (confirmation) {
        taskList.removeChild(taskElement);
      }
    }
  
    addTaskButton.addEventListener('click', addTask);
  
    taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  
    $(dateInput).datepicker({
      dateFormat: 'yy-mm-dd'
    });
  });
  