import { AddtoList } from "./manageList";
import { renderTask } from "./UI";
import { projects } from "./manageProject";
import { toDate, isThisWeek, isToday } from "date-fns";


const createTask = (id, title, description, duedate, priority, project) => {
    return {
        id, title, description, duedate, priority, project
    }
}

const NewTask = (() => {

    let title;
    let description;

    function createNewTask() {
        const projectList = projects.grabProjectList();

        title = document.getElementById('title').value;
        description = document.getElementById('description').value;

        let duedate = document.getElementById('date').value;
        let priority = document.getElementById('priority').value;
        let id = createId();
        let projectId = projects.grabCurrentProject();

        console.log(isThisWeek(toDate(duedate)))
        console.log(isToday(toDate(duedate)))

        if (title === '' ||
            description === '' ||
            duedate === '') return
        else {
            const task = createTask(id, title, description, duedate, priority, projectId);
            console.log(task);

            if (projectId === 0) {
                projectList[0].taskList.push(task);
                console.log(projectList)
            }

            for (let i = 1; i < projectList.length; i++) {
                if (projectList[i].id === projectId) {
                    AddtoList.addToList(task);
                    projectList[i].taskList.push(task);
                    console.log(projectList)
                }
            }
        } 
    }

    function createId() {
        let list = projects.projectList[0].taskList;
        let id;

        if (list.length === 0) {
            return id = 0;
        } else {
            return id = list[list.length-1].id + 1;
        }
    }

    function reset() {
        let titleValue = document.getElementById('title');
        titleValue.value = '';
        title = '';

        let descriptionValue = document.getElementById('description');
        descriptionValue.value = '';
        description = '';

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

        if (title === '' || description === '') return
        else {
            let taskList = projects.projectList[0].taskList
            let projectId = taskList[taskList.length - 1].project; 
            
            renderTask.updateDisplay(projectId);
            reset();
            newTaskForm.setAttribute('hidden', '');
            newTaskBtn.removeAttribute('hidden');
        }
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
