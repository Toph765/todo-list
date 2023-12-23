import { AddtoList } from "./manageList";
import { renderTask } from "./UI";
import { projects } from "./manageProject";  


const createTask = (id, title, description, duedate, priority, project) => {
    return {
        id, title, description, duedate, priority, project
    }
}

const NewTask = (() => {

    function createNewTask() {
        let title = document.getElementById('title').value;
        let description = document.getElementById('description').value;
        let duedate = document.getElementById('date').value;
        let priority = document.getElementById('priority').value;
        let id = createId();
        let project = projects.grabCurrentProject();

        const task = createTask(id, title, description, duedate, priority, project);
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

    function initSubmitBtn() {
        const submitBtn = document.querySelector('#submit');

        submitBtn.addEventListener('click', (e) => {
            submitTask();
            e.preventDefault();
            });
    }

    function submitTask() {
        const newTaskForm = document.querySelector('#main-form');
        const newTaskBtn = document.querySelector('#newTask');
        
        createNewTask();
        renderTask.displayAllTask();
        reset();
        newTaskForm.setAttribute('hidden', '');
        newTaskBtn.removeAttribute('hidden');
    }

    function cancelTask() {
        const cancelBtn = document.querySelector('#cancel');
        const newTaskForm = document.querySelector('#main-form');
        const newTaskBtn = document.querySelector('#newTask');

        cancelBtn.addEventListener('click', (e) => {
            reset();
            newTaskForm.setAttribute('hidden', '');
            newTaskBtn.removeAttribute('hidden');
            e.preventDefault();
        })
    }

    function openTaskCreator() {
        const newTaskBtn = document.querySelector('#newTask');
        const newTaskForm = document.querySelector('#main-form');

        newTaskBtn.addEventListener('click', (e) => {
            projects.grabProjectId(e);
            newTaskForm.removeAttribute('hidden');
            newTaskBtn.setAttribute('hidden', '');
            e.preventDefault();
        })
    }

    return { createNewTask, initSubmitBtn, cancelTask, openTaskCreator }
})();

export { NewTask }
