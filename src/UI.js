import { projects } from "./manageProject";

const renderTask = (() => {
    function displayAllTask(items, display) {
        const container = document.createElement('div');

        container.setAttribute('data-taskId', `${items.id}`)

        const title = document.createElement('div')
        const duedate = document.createElement('div');
        const description = document.createElement('div');
        const priority = document.createElement('div');

        title.textContent = `Title: ${items.title}`;
        duedate.textContent = `Due Date: ${items.duedate}`;
        description.textContent = `Description: ${items.description}`;
        priority.textContent = `Priority: ${items.priority}`;

        container.append(title, duedate, description, priority);
        display.appendChild(container);

        return display;
    }

    function displayInbox() {
        let list = projects.projectList[0].taskList;
        let items = list[list.length - 1];

        const generalList = document.querySelector('#general');
        
        displayAllTask(items, generalList);
    }

    return { displayInbox }
})()

const renderProject = (() => {
    function displayProject() {
        let list = projects.projectList;
        let project = list[list.length - 1];

        const projectDisplay = document.querySelector('.all-projects');
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