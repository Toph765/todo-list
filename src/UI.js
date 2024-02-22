import { projects } from "./manageProject";
import { isToday, toDate, isThisWeek } from "date-fns";
import { AddtoList } from "./manageList";
import { storeLocal } from "./storage";

const renderTask = (() => {
    function displayAllTask(items, display) {
        const container = document.createElement('div');

        container.setAttribute('data-taskId', `${items.id}`)

        container.classList.add('task');

        const title = document.createElement('div')
        const duedate = document.createElement('div');
        const details = document.createElement('div');
        const priority = document.createElement('div');
        const deleteBtn = document.createElement('button');
        const editBtn = document.createElement('button');
        const checkbox = document.createElement('input');
        const label = document.createElement('label');

        title.textContent = `Title: ${items.title}`;
        duedate.textContent = `Due Date: ${items.duedate}`;
        details.textContent = `Details: ${items.details}`;
        priority.textContent = `Priority: ${items.priority}`;
        deleteBtn.textContent = 'delete';
        editBtn.textContent = 'edit';
        label.textContent = 'Done?';

        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', `status-${items.id}`);
        checkbox.setAttribute('name', 'status');
        checkbox.setAttribute('value', 'off');
        label.setAttribute('for', `status-${items.id}`);
        deleteBtn.setAttribute('data-taskId', `${items.id}`);
        

        checkbox.addEventListener('click', () => {
            if (checkbox.value === 'off') {initCheckboxOn(items, checkbox, label, editBtn, container)}
            else {initCheckboxOff(items, checkbox, label, editBtn, container)};
        
            storeLocal.storeProjects();
        });

        deleteBtn.addEventListener('click', () => initDelBtn(items.id, items.project));
        editBtn.addEventListener('click', () => {initEditBtn(items)});

        if (items.status === 'finished') {
            checkbox.setAttribute('checked','');
            initCheckboxOn(items, checkbox, label, editBtn, container);
        };

        container.append(title, duedate, details, priority, deleteBtn, editBtn, label, checkbox);
        display.appendChild(container);

        return display;
    }

    function initCheckboxOn(items, checkbox, label, editBtn, container) {
            label.textContent = 'Done!';
            checkbox.value = 'on';
            editBtn.setAttribute('disabled', '');
            items.status = 'finished';
            container.classList.add('finished');
    }

    function initCheckboxOff(items, checkbox, label, editBtn, container) {
        label.textContent = 'Done?';
        checkbox.value = 'off';
        editBtn.removeAttribute('disabled');
        items.status = 'unfinished';
        container.classList.remove('finished');
    }

    function initEditBtn(task) {
        const taskForm = document.querySelector('#main-form');

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

        taskForm.removeAttribute('hidden');
    }

    function initDelBtn(id, projectId) {
        let Alltask = AddtoList.removeTask(id);
        const generalList = document.querySelector('#general');

        projects.updateGeneralList(Alltask);
        projects.updateProject(projectId);
        storeLocal.storeProjects();

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
        else if (tab === `${id}` && id !== 0) renderProject.displayProjectTasks(id)
    }

    function displayInbox() {
        let list = projects.grabProjectList()[0].taskList;
        const generalList = document.querySelector('#general');
        generalList.classList.replace(generalList.getAttribute('class'), 'inboxTab');

        while (generalList.lastElementChild) generalList.removeChild(generalList.lastElementChild);
        console.log(list)
        list.forEach(task => displayAllTask(task, generalList));
        console.log(projects.projectList)
        
    }

    function displayDaily() {
        let list = projects.grabProjectList()[0].taskList;
        const generalList = document.querySelector('#general');
        generalList.classList.replace(generalList.getAttribute('class'), 'todayTab');

        while (generalList.lastElementChild) generalList.removeChild(generalList.lastElementChild);
        
        const dailyTasks = list.filter(task => isToday(toDate(task.duedate)));
        
        dailyTasks.forEach(task => displayAllTask(task, generalList));
    }

    function displayWeekly() {
        let list = projects.grabProjectList()[0].taskList;
        const generalList = document.querySelector('#general');
        generalList.classList.replace(generalList.getAttribute('class'), 'weekTab');

        while (generalList.lastElementChild) generalList.removeChild(generalList.lastElementChild);

        const weeklyTasks = list.filter(task => isThisWeek(toDate(task.duedate)));

        weeklyTasks.forEach(task => displayAllTask(task, generalList));
    }

    return { displayInbox, displayDaily, displayWeekly, displayAllTask, updateDisplay, grabTab }
})()

const renderProject = (() => {
    function displayProject(project) {
        const projectDisplay = document.querySelector('.all-projects');
        const container = document.createElement('div');

        const projectTitle = document.createElement('div');
        const projectTaskBtn = document.createElement('button');
        const projectDelBtn = document.createElement('button');

        container.classList.add(`project-${project.id}`);
        container.classList.add('container-project');
        container.setAttribute('data-projectId', `${project.id}`);
        projectTaskBtn.setAttribute('data-projectId', `${project.id}`);
        projectTaskBtn.setAttribute('id', `project-${project.id}`);
        projectDelBtn.classList.add('del-project');

        projectTitle.textContent = `${project.title}`;
        projectTaskBtn.textContent = '+';
        projectDelBtn.textContent = 'delete';

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

        projectDelBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            initDelProjBtn(project.id);
        })

        container.append(projectTitle, projectTaskBtn, projectDelBtn);
        projectDisplay.appendChild(container);

        return projectDisplay
    }

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

    function displayProjectTasks(id) {
        let list = projects.projectList;
        const generalList = document.querySelector('#general');
        generalList.classList.replace(generalList.getAttribute('class'), `${id}`);

        while (generalList.lastElementChild) generalList.removeChild(generalList.lastElementChild);

        let projectTasks = projects.grabCurrentProjectTasks(id);

        projectTasks.forEach(task => renderTask.displayAllTask(task, generalList));
    }

    return { displayProject, displayProjectTasks }
})()

export { renderTask, renderProject }