import { AddtoList } from "./manageList";
import { projects } from "./manageProject";

const renderTask = (() => {
    function displayTask() {
        let list = AddtoList.TodoList;
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

    return { displayTask }
})()

const renderProject = (() => {
    function displayProject() {
        let list = projects.projectList;
        let project = list[list.length - 1];

        const projectDisplay = document.querySelector('#projects');
        const container = document.createElement('div');

        const projectTitle = document.createElement('div');
        const projectTaskBtn = document.createElement('button');

        container.setAttribute('data-projectId', `${project.id}`);
        projectTaskBtn.setAttribute('data-projectId', `${project.id}`);
        projectTaskBtn.classList.add('projectTask');

        projectTitle.textContent = `${project.title}`;
        projectTaskBtn.textContent = '+';

        container.append(projectTitle, projectTaskBtn);
        projectDisplay.appendChild(container);

        return projectDisplay
    }

    return { displayProject }
})()

export { renderTask, renderProject }