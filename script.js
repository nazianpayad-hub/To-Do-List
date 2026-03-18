const inputList = document.getElementById('input-list');
const taskList = document.getElementById('task-list');

/* add task and delete button */
function add() {
    if(inputList.value === '') {
        alert('Write Something!');
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputList.value;
        let del = document.createElement('img');
        del.src = 'images/delete.png';
        del.classList.add('delete-btn');
        taskList.appendChild(li);
        li.appendChild(del);
        saveList();
    }
    inputList.value = ''; /* Refresh input box */
}

/* Done and remove task */
taskList.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('check');
        saveList();
    }
    else if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        saveList();
    }
}, false);

/* save and show data/list of tasks */
function saveList() {
    localStorage.setItem('dataList', taskList.innerHTML);
}

function showList() {
    taskList.innerHTML = localStorage.getItem('dataList');
}
showList();