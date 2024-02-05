import { projects } from "./manageProject";
import { renderProject, renderTask } from "./UI";
import { AddtoList } from "./manageList";

const storeLocal = (() => {
    function stringify(item) {
        return JSON.stringify(item);
    }

    function storeProjects() {
        const projectList = projects.grabProjectList();
        localStorage.setItem('project', stringify(projectList));
        console.log(JSON.parse(localStorage.getItem('project')));
    }

    function loadStorage() {
        const newList = JSON.parse(localStorage.getItem('project'));

        let genList = newList[0];
        genList.taskList.forEach(task => {
            AddtoList.addToList(task);
            renderTask.updateDisplay(task.project)
        });

        let loadedProjects = newList.filter(project => project.id !== 0);
        loadedProjects.forEach(project => {
            projects.addToProjectList(project);
            renderProject.displayProject(project);
        });
    }

    return { storeProjects,
             loadStorage }
})();

export {storeLocal}