import { AddtoList } from "./manageList";
import { NewTask } from "./manageTask"; 
import { projects } from "./manageProject";

const renderTask = (() => {
    function displayAllTask() {
        let list = projects.projectList[0].taskList;
        let itemToDisplay = list[list.length - 1];

        const generalList = document.querySelector('#general');
        const container = document.createElement('div');

        container.setAttribute('data-taskId', `${itemToDisplay.id}`)

        const title = document.createElement('div')
        const duedate = document.createElement('div');
        const description = document.createElement('div');
        const priority = document.createElement('div');

        title.textContent = `Title: ${itemToDisplay.title}`;
        duedate.textContent = `Due Date: ${itemToDisplay.duedate}`;
        description.textContent = `Description: ${itemToDisplay.description}`;
        priority.textContent = `Priority: ${itemToDisplay.priority}`;

        container.append(title, duedate, description, priority);
        generalList.appendChild(container);

        return generalList;
    }

    return { displayAllTask }
})()

const renderProject = (() => {
    function displayProject() {
        let list = projects.projectList;
        let project = list[list.length - 1];

        const projectDisplay = document.querySelector('#Allprojects');
        const container = document.createElement('div');

        const projectTitle = document.createElement('div');
        const projectTaskBtn = document.createElement('button');

        container.classList.add('project');
        container.setAttribute('data-projectId', `${project.id}`);
        projectTaskBtn.setAttribute('data-projectId', `${project.id}`);
        projectTaskBtn.setAttribute('id', `project-${project.id}`);

        projectTitle.textContent = `${project.title}`;
        projectTaskBtn.textContent = '+';

        projectTaskBtn.addEventListener('click', (e) => {
            console.log('project id', projects.grabProjectId(e));
            const newTaskForm = document.querySelector('#main-form');

            projects.grabProjectId(e);
            newTaskForm.removeAttribute('hidden');
            e.preventDefault();
        })

        container.append(projectTitle, projectTaskBtn);
        projectDisplay.appendChild(container);

        return projectDisplay
    }

    return { displayProject }
})()

export { renderTask, renderProject }