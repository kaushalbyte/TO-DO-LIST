const inputField = document.querySelector('.inputField');
const addButton = document.querySelector('.addButton');
const taskList = document.querySelector('.taskList');
addButton.addEventListener('click', function() {
    const taskText = inputField.value;
    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "🗑️";
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        inputField.value = "";
    }
});