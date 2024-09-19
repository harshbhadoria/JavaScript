document.getElementById('add-task-btn').addEventListener('click', addtask)

function addtask(){
    const taskInput = document.getElementById('task-input')
    const taskText = taskInput.value.trim();

    if(taskText === ''){
        alert('Please enter a task')
        return
    }

    const taskList = document.getElementById('task-list')
    const li = document.createElement('li')

    li.textContent = taskText
    li.addEventListener('click', toogleComplete)
    taskList.appendChild(li)

    taskInput.value = ''
}

function toogleComplete(){
    event.target.classList.toogle('Completed!')
}