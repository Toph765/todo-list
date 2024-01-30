import { projects } from "./manageProject";
import { isToday, toDate, isThisWeek } from "date-fns";
import { AddtoList } from "./manageList";

const renderTask = (() => {
    function displayAllTask(items, display) {
        const container = document.createElement('div');

        container.setAttribute('data-taskId', `${items.id}`)

        container.classList.add('task');

        const title = document.createElement('div')
        const duedate = document.createElement('div');
        const description = document.createElement('div');
        const priority = document.createElement('div');
        const deleteBtn = document.createElement('button');

        title.textContent = `Title: ${items.title}`;
        duedate.textContent = `Due Date: ${items.duedate}`;
        description.textContent = `Description: ${items.description}`;
        priority.textContent = `Priority: ${items.priority}`;
        deleteBtn.textContent = 'delete';

        deleteBtn.setAttribute('data-taskId', `${items.id}`);

        deleteBtn.addEventListener('click', () => initDelBtn(items.id, items.project));

        container.append(title, duedate, description, priority, deleteBtn);
        display.appendChild(container);

        return display;
    }

    function initDelBtn(id, projectId) {
        let Alltask = AddtoList.removeTask(id);
        const generalList = document.querySelector('#general');

        projects.updateGeneralList(Alltask);
        projects.updateProjectList(projectId);

        while (generalList.lastElementChild) generalList.removeChild(generalList.lastElementChild);
        
        updateDisplay(projectId);

        console.log(projects.projectList);
        console.log(projectId)
    }

    function grabTab() {
        let currentTab = document.querySelector('#general').getAttribute('class');
        return currentTab;
    }

    function updateDisplay(id) {
        let tab = grabTab();
        if (tab === 'inboxTab') displayInbox()
        else if (tab === 'todayTab') displayDaily()
        else if (tab === 'weekTab') displayWeekly()
        else if (tab === `project-${id}` && id !== 0) renderProject.displayProjectTasks(id)
    }

    function displayInbox() {
        let list = projects.projectList[0].taskList;
        const generalList = document.querySelector('#general');
        generalList.classList.replace(generalList.getAttribute('class'), 'inboxTab');

        while (generalList.lastElementChild) generalList.removeChild(generalList.lastElementChild);

        list.forEach(task => displayAllTask(task, generalList));
        console.log(list)
    }

    function displayDaily() {
        let list = projects.projectList[0].taskList;
        const generalList = document.querySelector('#general');
        generalList.classList.replace(generalList.getAttribute('class'), 'todayTab');

        while (generalList.lastElementChild) generalList.removeChild(generalList.lastElementChild);
        
        const dailyTasks = list.filter(task => isToday(toDate(task.duedate)));
        
        dailyTasks.forEach(task => displayAllTask(task, generalList));
    }

    function displayWeekly() {
        let list = projects.projectList[0].taskList;
        const generalList = document.querySelector('#general');
        generalList.classList.replace(generalList.getAttribute('class'), 'weekTab');

        while (generalList.lastElementChild) generalList.removeChild(generalList.lastElementChild);

        const weeklyTasks = list.filter(task => isThisWeek(toDate(task.duedate)));

        weeklyTasks.forEach(task => displayAllTask(task, generalList));
    }

    return { displayInbox, displayDaily, displayWeekly, displayAllTask, updateDisplay }
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
        generalList.classList.replace(generalList.getAttribute('class'), `project-${id}`);

        while (generalList.lastElementChild) generalList.removeChild(generalList.lastElementChild);

        let projectTasks = projects.grabCurrentProjectTasks(id);

        projectTasks.forEach(task => renderTask.displayAllTask(task, generalList));
    }

    return { displayProject, displayProjectTasks }
})()

export { renderTask, renderProject }