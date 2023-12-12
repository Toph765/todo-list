const createTask = (id, title, description, duedate, priority, completed) => {
    return {
        id, title, description, duedate, priority, completed
    }
}

const NewTask = (() => {

    function createNewTask() {
        let title = document.getElementById('title').value;
        let description = document.getElementById('description').value;
        let duedate = document.getElementById('date').value;
        let priority = document.getElementById('priority').value;
        let id = createId();
        let completed = false;

        const task = createTask(id, title, description, duedate, priority, completed);
        console.log(task);
        AddtoList.addToList(task);
    }

    function createId() {
        let list = AddtoList.TodoList;
        let id;

        if (list.length === 0) {
            return id = 0;
        } else {
            return id = list[list.length-1].id + 1;
        }
    }

    function reset() {
        let title = document.getElementById('title');
        title.value = '';

        let description = document.getElementById('description');
        description.value = '';

        let duedate = document.getElementById('date');
        duedate.value = '';

        let priority = document.getElementById('priority');
        priority.value = 'Low';
    }

    function submitTask() {
        const submitBtn = document.querySelector('#submit');
        submitBtn.addEventListener('click', (e) => {
            createNewTask();
            reset();
            e.preventDefault();
            });
    }

    return { createNewTask, submitTask }
})();

const AddtoList = (() => {
    let TodoList = [];

    function addToList(task) {
        TodoList.push(task);
        console.log(TodoList);
    }

    return { addToList, TodoList };
})()


export { NewTask }
