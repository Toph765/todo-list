import { renderProject } from "./UI";
import { AddtoList } from "./manageList";
import { storeLocal } from "./storage";

const newProject = (title, taskList, id) => {
    return { title, taskList, id };
}

const projects = (() => {
    let projectTitle
    let projectList = [];

    let taskList = AddtoList.TodoList;

    const generalList = newProject('General', taskList, 0);
    projectList.push(generalList);

    let currentProject = 0;

    /* UPDATING AND RETRIEVING PROJECT*/

    function updateGeneralList(newList) {
        generalList.taskList = newList;
        return generalList;
    }

    function updateProject(id) {
        let update = generalList.taskList.filter(task => task.project === id);
        if (id !== 0) {
            return projectList.filter(project => project.id === id)[0].taskList = update;
        } else return;
    }

    function grabCurrentProjectTasks(id) {
        return projectList.filter(project => project.id === id)[0].taskList;
    }

    function removeProject(id) {
        projectList = projectList.filter(project => project.id !== id);
        return projectList
    }

    function grabCurrentProject() {
        return currentProject;
    }

    function grabProjectList() {
        return projectList;
    }

    /* PROJECT CREATOR FUNCTION */

    function createProject() {
        projectTitle = document.querySelector('#projectTitle').value;
        const projectId = createProjectId()
        const projectTasks = [];

        if (projectTitle === '') return
        else {
            const project = newProject(projectTitle, projectTasks, projectId);
            addToProjectList(project);
            storeLocal.storeProjects();
        }
    }

    function createProjectId() {
        let id;
        if (projectList.length === 0) {
            return id = 0;
        } else {
            return id = projectList[projectList.length - 1].id + 1;
        }
    }

    function addToProjectList(project) {
        projectList.push(project);
    }

    function reset() {
        let projectTitleValue = document.querySelector('#projectTitle');
        projectTitleValue.value = '';
        projectTitle = '';
    }

    function submitProject() {
        const createProjectBtn = document.querySelector('#createProject');

        createProjectBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            createProject();
            if (projectTitle === '') return
            else {
                let project = projectList[projectList.length -1];

                renderProject.displayProject(project);
                reset();
            }
        })
    }

    function grabProjectId(e) {
        let projectId = parseInt(e.target.getAttribute('data-projectId'));

        currentProject = projectId;

        return currentProject;
    }

    return { submitProject,
             grabProjectId,
             grabCurrentProject, 
             grabProjectList, 
             projectList, 
             updateGeneralList,
             updateProject, 
             grabCurrentProjectTasks, 
             removeProject,
             addToProjectList }
})()

export { projects }

