const createTask = document.querySelector('#createTask');
const createButton = document.querySelector('#createButton');
const task = document.querySelector('.createdTask');

createButton.addEventListener("click", function () {

    if (createTask.value === '') {
        alert('Please create the task.');
    } else {
        task.innerHTML += `
            <div class="tasks">
                <p>${createTask.value}</p>
                <button class="deleteTask">Delete</button>
            </div>
        `;

        createTask.value = '';
    }
});

task.addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains('deleteTask')) {
        e.target.parentElement.remove();
    }
});
