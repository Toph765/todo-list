import { renderProject } from "./UI";
import { AddtoList } from "./manageList";
import { NewTask } from "./manageTask";

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

    function grabCurrentProject() {
        return currentProject;
    }

    function grabProjectList() {
        return projectList;
    }

    function createProject() {
        projectTitle = document.querySelector('#projectTitle').value;
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
                renderProject.displayProject();
                reset();
            }
        })
    }

    function grabProjectId(e) {
        let projectId = parseInt(e.target.getAttribute('data-projectId'));

        currentProject = projectId;

        return currentProject;
    }

    return { submitProject, grabProjectId, grabCurrentProject, grabProjectList, projectList }
})()

export { projects }

