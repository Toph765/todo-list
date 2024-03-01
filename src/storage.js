import { projects } from "./manageProject";
import { renderProject, renderTask } from "./UI";
import { NewTask } from "./manageTask";

const storeLocal = (() => {
    function stringify(item) {
        return JSON.stringify(item);
    }

    /* LOCAL STORAGE MANAGEMENT FUNCTION */

    function storeProjects() {
        const projectList = projects.grabProjectList();
        localStorage.setItem('project', stringify(projectList));
    }

    function loadStorage() {
        const newList = JSON.parse(localStorage.getItem('project'));

        let loadedProjects = newList.filter(project => project.id !== 0);
        loadedProjects.forEach(project => {
            project.taskList = [];
            projects.addToProjectList(project);
            renderProject.displayProject(project);
        });

        let genList = newList[0];

        genList.taskList.forEach(task => {
            NewTask.addToTasklist(task.project, task);
            renderTask.updateDisplay(task.project);
        })
        
    }

    return { storeProjects,
             loadStorage }
})();

export {storeLocal}