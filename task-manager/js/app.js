function addTask() {
  const taskInput = document.getElementById('taskName');
  const taskName = taskInput.value.trim();
  if (taskName === '') return;

  const table = document.getElementById('taskTable');
  const newRow = table.insertRow();
  const nameCell = newRow.insertCell(0);
  const statusCell = newRow.insertCell(1);

  nameCell.textContent = taskName;
  statusCell.textContent = 'Pending';

  taskInput.value = '';
}
