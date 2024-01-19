import { NewTask } from "./manageTask.js";
import { projects } from "./manageProject.js";
import { renderTask } from "./UI.js";

NewTask.initSubmitBtn();
NewTask.cancelTask();
NewTask.openTaskCreator();

projects.submitProject();

const todayTab = document.querySelector('#today');

todayTab.addEventListener('click', () => {
    renderTask.displayDaily();
})