import { projects } from "./manageProject";
import { isToday, toDate, isThisWeek } from "date-fns";

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

    function displayNewInput() {
        let list = projects.projectList[0].taskList;
        let items = list[list.length - 1];

        const generalList = document.querySelector('#general');
        
        displayAllTask(items, generalList);
    }

    function displayInbox() {
        let list = projects.projectList[0].taskList;
        const generalList = document.querySelector('#general');

        while (generalList.lastElementChild) generalList.removeChild(generalList.lastElementChild);

        list.forEach(task => displayAllTask(task, generalList));
    }

    function displayDaily() {
        let list = projects.projectList[0].taskList;
        const generalList = document.querySelector('#general');

        while (generalList.lastElementChild) generalList.removeChild(generalList.lastElementChild);
        
        const dailyTasks = list.filter(task => isToday(toDate(task.duedate)));
        
        dailyTasks.forEach(task => displayAllTask(task, generalList));
    }

    function displayWeekly() {
        let list = projects.projectList[0].taskList;
        const generalList = document.querySelector('#general');

        while (generalList.lastElementChild) generalList.removeChild(generalList.lastElementChild);

        const weeklyTasks = list.filter(task => isThisWeek(toDate(task.duedate)));

        weeklyTasks.forEach(task => displayAllTask(task, generalList));
    }

    return { displayNewInput, displayInbox, displayDaily, displayWeekly, displayAllTask }
})()

const renderProject = (() => {
    function displayProject() {
        let list = projects.projectList;
        let project = list[list.length - 1];

        const projectDisplay = document.querySelector('.all-projects');
        const container = document.createElement('div');

        const projectTitle = document.createElement('div');
        const projectTaskBtn = document.createElement('button');

        container.classList.add(`project-${project.id}`);
        container.setAttribute('data-projectId', `${project.id}`);
        projectTaskBtn.setAttribute('data-projectId', `${project.id}`);
        projectTaskBtn.setAttribute('id', `project-${project.id}`);

        projectTitle.textContent = `${project.title}`;
        projectTaskBtn.textContent = '+';

        container.addEventListener('click', (e) => {
            e.stopPropagation();
            displayProjectTasks(project.id);
        });

        projectTaskBtn.addEventListener('click', (e) => {
            e.stopPropagation();
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

    function displayProjectTasks(id) {
        let list = projects.projectList;
        const generalList = document.querySelector('#general');

        while (generalList.lastElementChild) generalList.removeChild(generalList.lastElementChild);

        let projectList = list.filter(task => task.id === id);
        let projectTasks = projectList[0].taskList;
        console.log(projectTasks);

        projectTasks.forEach(task => renderTask.displayAllTask(task, generalList));
    }

    return { displayProject }
})()

export { renderTask, renderProject }