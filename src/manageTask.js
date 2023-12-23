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
        const projectList = projects.grabProjectList();

        let title = document.getElementById('title').value;
        let description = document.getElementById('description').value;
        let duedate = document.getElementById('date').value;
        let priority = document.getElementById('priority').value;
        let id = createId();
        let projectId = projects.grabCurrentProject();
        console.log('project id at create newtask', projectList)

        const task = createTask(id, title, description, duedate, priority, projectId);
        console.log(task);

        for (let i = 0; i < projectList.length; i++) {
            if (projectList[i].id === projectId) {
                console.log('hello')
                projectList[i].taskList.push(task);
                console.log(projectList)
            }
        }

        /* projectList.forEach(project => {
            if (project.id === projectId) {
                project.taskList.push(task);
                console.log('project list', projectList);
            }
        }) */

        /* AddtoList.addToList(task); */
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
