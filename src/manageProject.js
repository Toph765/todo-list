import { renderProject } from "./UI";
import { AddtoList } from "./manageList";
import { NewTask } from "./manageTask";

const newProject = (title, taskList, id) => {
    return { title, taskList, id };
}

const projects = (() => {

    let projectList = [];
    
    let taskList = AddtoList.TodoList;

    const generalList = newProject('General', taskList, 0);
    projectList.push(generalList);

    let currentProject = 0;

    function grabCurrentProject() {
        return currentProject;
    }

    function createProject() {
        const projectTitle = document.querySelector('#projectTitle').value;
        const projectId = createProjectId()
        const projectTasks = [];

        if (projectTitle === '') return
        else {
            const project = newProject(projectTitle, projectTasks, projectId);
            console.log(project);
            addToProjectList(project);
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
        console.log(projectList);
    }

    function submitProject() {
        const createProjectBtn = document.querySelector('#createProject');

        createProjectBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            createProject();
            if (projectList.length === 1) return
            else renderProject.displayProject();
        })
    }

    function grabProjectId(e) {
        let projectId =  e.target.getAttribute('data-projectId');

        currentProject = projectId;

        return currentProject;
    }

    return { submitProject, grabProjectId, grabCurrentProject, projectList }
})()

export { projects }

