import { projects } from "./manageProject";
import { isToday, toDate, isThisWeek } from "date-fns";
import { AddtoList } from "./manageList";
import { storeLocal } from "./storage";

const renderTask = (() => {
    /* DISPLAY TASK FUNCTION */

    function displayAllTask(items, display) {
        const container = document.createElement('div');

        container.setAttribute('data-taskId', `${items.id}`)

        container.classList.add('task');

        const title = document.createElement('div')
        const duedate = document.createElement('div');
        const details = document.createElement('div');
        const priority = document.createElement('div');
        const statusCont = document.createElement('div');
        const deleteBtn = document.createElement('button');
        const editBtn = document.createElement('button');
        const checkbox = document.createElement('input');
        const label = document.createElement('label');
        const taskBtns = document.createElement('div');
        const delImg = document.createElement('img');
        const editImg = document.createElement('img');
        const taskFunc = document.createElement('div');

        title.textContent = `${items.title}`;
        duedate.textContent = `${items.duedate}`;
        details.textContent = `${items.details}`;
        label.textContent = 'Done?';

        title.classList.add('title');
        duedate.classList.add('duedate');
        details.classList.add('details');
        statusCont.classList.add('status-cont');
        label.classList.add('label');
        checkbox.classList.add('checkbox');
        priority.classList.add(`${items.priority}`);
        priority.classList.add('priority');
        taskBtns.classList.add('taskBtns');
        deleteBtn.classList.add('delete');
        editBtn.classList.add('edit');
        delImg.classList.add('icon');
        editImg.classList.add('icon');
        taskFunc.classList.add('taskFunc');

        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', `status-${items.id}`);
        checkbox.setAttribute('name', 'status');
        checkbox.setAttribute('value', 'off');
        label.setAttribute('for', `status-${items.id}`);
        deleteBtn.setAttribute('data-taskId', `${items.id}`);

        delImg.setAttribute('src', 'img/trash-can-outline.svg');
        delImg.setAttribute('alt', 'delete icon');
        editImg.setAttribute('src', 'img/text-box-edit-outline.svg');
        editImg.setAttribute('alt', 'edit icon');


        checkbox.addEventListener('click', () => {
            if (checkbox.value === 'off') {initCheckboxOn(items, checkbox, label, editBtn, editImg, container)}
            else {initCheckboxOff(items, checkbox, label, editBtn, editImg, container)};
        
            storeLocal.storeProjects();
        });

        deleteBtn.addEventListener('click', () => initDelBtn(items.id, items.project));
        editBtn.addEventListener('click', () => {initEditBtn(items)});

        if (items.status === 'finished') {
            checkbox.setAttribute('checked','');
            initCheckboxOn(items, checkbox, label, editBtn, editImg, container);
        };

        deleteBtn.append(delImg);
        editBtn.append(editImg);
        statusCont.append(label, checkbox);
        taskBtns.append(deleteBtn, editBtn);
        taskFunc.append(taskBtns, statusCont);
        container.append(priority, title, duedate, details, taskFunc);
        display.appendChild(container);

        return display;
    }

    /* DYNAMICALLY CREATED BUTTON FUNCTION*/

    function initCheckboxOn(items, checkbox, label, editBtn, editImg, container) {
        label.textContent = 'Done!';
        label.setAttribute('style', 'font-weight: bold;');
        checkbox.value = 'on';
        editBtn.setAttribute('disabled', '');
        editImg.setAttribute('style', 'opacity: 0.5;')
        items.status = 'finished';
        container.classList.add('finished');
    }

    function initCheckboxOff(items, checkbox, label, editBtn, editImg, container) {
        label.textContent = 'Done?';
        label.removeAttribute('style');
        checkbox.value = 'off';
        editBtn.removeAttribute('disabled');
        editImg.removeAttribute('style');
        items.status = 'unfinished';
        container.classList.remove('finished');
    }

    function initEditBtn(task) {
        const taskForm = document.querySelector('#main-form');
        const dialog = document.querySelector('.dialog');

        taskForm.classList.add('edit-mode');
        taskForm.setAttribute('data-taskId', `${task.id}`);

        let title = document.getElementById('title');
        let details = document.getElementById('details');
        let date = document.getElementById('date');
        let priority = document.getElementById('priority');

        const taskTitle = task.title;
        const taskDetails = task.details;
        const taskDate = task.duedate;
        const taskPriority = task.priority;

        title.value = taskTitle;
        details.value = taskDetails;
        date.value = taskDate;
        priority.value = taskPriority;

        dialog.showModal();
    }

    function initDelBtn(id, projectId) {
        let Alltask = AddtoList.removeTask(id);
        const generalList = document.querySelector('#general');

        projects.updateGeneralList(Alltask);
        projects.updateProject(projectId);
        storeLocal.storeProjects();

        while (generalList.lastElementChild) generalList.removeChild(generalList.lastElementChild);
        
        updateDisplay(projectId);
    }

    /* UPDATE DISPLAY FUNCTION */

    function grabTab() {
        let currentTab = document.querySelector('#general').getAttribute('class');
        return currentTab;
    }

    function updateDisplay(id) {
        let tab = grabTab();
        if (tab === 'inboxTab') displayInbox()
        else if (tab === 'todayTab') displayDaily()
        else if (tab === 'weekTab') displayWeekly()
        else if (tab === `${id}` && id !== 0) renderProject.displayProjectTasks(id)
    }

    function displayInbox() {
        let list = projects.grabProjectList()[0].taskList;
        const emptyPhrase = document.querySelector('.empty');
        const newTaskBtn = document.querySelector('#newTask');
        const generalList = document.querySelector('#general');
        newTaskBtn.setAttribute('data-projectId', '0');
        generalList.classList.replace(generalList.getAttribute('class'), 'inboxTab');

        if (list.length === 0) {
            emptyPhrase.removeAttribute('hidden');
        } else {
            emptyPhrase.setAttribute('hidden', '');

            while (generalList.lastElementChild) generalList.removeChild(generalList.lastElementChild);
            list.forEach(task => displayAllTask(task, generalList));
        }

        
        
    }

    function displayDaily() {
        let list = projects.grabProjectList()[0].taskList;
        const emptyPhrase = document.querySelector('.empty');
        const newTaskBtn = document.querySelector('#newTask');
        const generalList = document.querySelector('#general');
        newTaskBtn.setAttribute('data-projectId', '0');
        generalList.classList.replace(generalList.getAttribute('class'), 'todayTab');
        
        while (generalList.lastElementChild) generalList.removeChild(generalList.lastElementChild);
        
        const dailyTasks = list.filter(task => isToday(toDate(task.duedate)));
        
        if (dailyTasks.length === 0) {
            emptyPhrase.removeAttribute('hidden');
        } else {
            emptyPhrase.setAttribute('hidden', '');

            dailyTasks.forEach(task => displayAllTask(task, generalList));
        }
    }

    function displayWeekly() {
        let list = projects.grabProjectList()[0].taskList;
        const emptyPhrase = document.querySelector('.empty');
        const newTaskBtn = document.querySelector('#newTask');
        const generalList = document.querySelector('#general');
        newTaskBtn.setAttribute('data-projectId', '0');
        generalList.classList.replace(generalList.getAttribute('class'), 'weekTab');

        while (generalList.lastElementChild) generalList.removeChild(generalList.lastElementChild);
        
        const weeklyTasks = list.filter(task => isThisWeek(toDate(task.duedate)));

        if (weeklyTasks.length === 0) {
            emptyPhrase.removeAttribute('hidden');
        } else {
            emptyPhrase.setAttribute('hidden' ,'');

            weeklyTasks.forEach(task => displayAllTask(task, generalList));
        }
    }

    return { displayInbox, displayDaily, displayWeekly, displayAllTask, updateDisplay, grabTab }
})()

const renderProject = (() => {
    /* DISPLAY PROJECT FUNCTION */

    function displayProject(project) {
        const newTaskBtn = document.querySelector('#newTask');
        const projectDisplay = document.querySelector('.all-projects');
        const container = document.createElement('div');

        const projectTitle = document.createElement('div');
        const projectDelBtn = document.createElement('button');
        const projDelImg = document.createElement('img');

        container.classList.add(`project-${project.id}`);
        container.classList.add('container-project');
        projectTitle.classList.add('project-title');
        projectDelBtn.classList.add('del-project');
        projDelImg.classList.add('projDelImg');

        container.setAttribute('data-projectId', `${project.id}`);
        projectDelBtn.setAttribute('hidden', '');
        projDelImg.setAttribute('src', 'img/trash-can-outline.svg');
        projDelImg.setAttribute('alt', 'delete icon');

        projectTitle.textContent = `${project.title}`;

        container.addEventListener('click', (e) => {
            e.stopPropagation();

            newTaskBtn.setAttribute('data-projectId', `${project.id}`);
            displayProjectTasks(project.id);
        });

        container.addEventListener('mouseover', () => {
            projectDelBtn.removeAttribute('hidden');
            container.setAttribute('style', 'border: 2px solid black;');
        });
        container.addEventListener('mouseleave', () => {
            projectDelBtn.setAttribute('hidden', '');
            container.removeAttribute('style');
        });

        projectDelBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            initDelProjBtn(project.id);
        })

        projectDelBtn.appendChild(projDelImg);
        container.append(projectTitle, projectDelBtn);
        projectDisplay.appendChild(container);

        return projectDisplay
    }

    /* DYNAMICALLY CREATED BUTTON FUNCTION */

    function initDelProjBtn(projectId) {
        projects.removeProject(projectId);

        let updatedProjects = projects.grabProjectList();
        let taskList = AddtoList.TodoList;
        let updatedTaskList = taskList.filter(task => task.project === projectId);

        updatedTaskList.forEach(task => {
            let newList = AddtoList.removeTask(task.id);
            projects.updateGeneralList(newList);
        });

        let projectsDisplay = document.querySelector('.all-projects');
        while (projectsDisplay.lastElementChild) projectsDisplay.removeChild(projectsDisplay.lastElementChild);

        updatedProjects.forEach(project => {
            if (project.id > 0) displayProject(project);
        });

        if (parseInt(renderTask.grabTab(projectId)) === projectId) renderTask.displayInbox()
        else renderTask.updateDisplay(projectId);

        storeLocal.storeProjects();
    }

    /* UPDATE DISPLAY FUNCTION */

    function displayProjectTasks(id) {
        const emptyPhrase = document.querySelector('.empty');
        const generalList = document.querySelector('#general');
        generalList.classList.replace(generalList.getAttribute('class'), `${id}`);

        while (generalList.lastElementChild) generalList.removeChild(generalList.lastElementChild);
        
        let projectTasks = projects.grabCurrentProjectTasks(id);

        if (projectTasks.length === 0) {
            emptyPhrase.removeAttribute('hidden');
        } else {
            emptyPhrase.setAttribute('hidden', '');
            projectTasks.forEach(task => renderTask.displayAllTask(task, generalList));
        }
    }

    return { displayProject, displayProjectTasks }
})()

export { renderTask, renderProject }