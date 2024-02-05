import { NewTask } from "./manageTask.js";
import { projects } from "./manageProject.js";
import { renderTask } from "./UI.js";
import { storeLocal } from "./storage.js";

NewTask.initSubmitBtn();
NewTask.cancelTask();
NewTask.openTaskCreator();

projects.submitProject();

const todayTab = document.querySelector('#today');
const weekTab = document.querySelector('#weekly');
const inboxTab = document.querySelector('#inbox');

todayTab.addEventListener('click',renderTask.displayDaily);
weekTab.addEventListener('click', renderTask.displayWeekly);
inboxTab.addEventListener('click', renderTask.displayInbox);

document.addEventListener('DOMContentLoaded', storeLocal.loadStorage);