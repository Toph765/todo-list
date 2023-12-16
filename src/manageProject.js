import { renderProject } from "./UI";
import { AddtoList } from "./manageList";

const newProject = (title, taskList, id) => {
    return { title, taskList, id };
}

const projects = (() => {
    let projectList = [];
    let taskList = AddtoList.TodoList;

    const generalList = newProject('General', taskList, 0);
    projectList.push(generalList);

    function createProject() {
        const projectTitle = document.querySelector('#projectTitle').value;
        const projectId = createProjectId()
        const projectTasks = [];

        const project = newProject(projectTitle, projectTasks, projectId);
        console.log(project);
        addToProjectList(project);
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
            createProject();
            renderProject.displayProject();
            e.preventDefault();
        })
    }

    function submitProjectTask() {
        const newProjectTask = document.querySelector('.projectTask');
        
        newProjectTask.addEventListener('click', (e) => {
            
            
            e.preventDefault();
        })
    }

    return { submitProject, projectList }
})()

export { projects }

