const createTask = (title, description, duedate, priority) => {
    return {
        title, description, duedate, priority
    }
}

const NewTask = (() => {

    function createNewTask() {
        let title = document.getElementById('title').value;
        let description = document.getElementById('description').value;
        let duedate = document.getElementById('date').value;
        let priority = document.getElementById('priority').value;

        const task = createTask(title, description, duedate, priority);
        
        console.log(task);
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


export { NewTask }




