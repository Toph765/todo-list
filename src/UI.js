import { AddtoList } from "./manageList";

const renderTask = (() => {
    function displayTask() {
        let list = AddtoList.TodoList;
        let itemToDisplay = list[list.length - 1];

        const main = document.querySelector('main');
        const container = document.createElement('div');

        container.setAttribute('data-listId', `${itemToDisplay.id}`)

        const title = document.createElement('div')
        const duedate = document.createElement('div');
        const description = document.createElement('div');
        const priority = document.createElement('div');

        title.textContent = `Title: ${itemToDisplay.title}`;
        duedate.textContent = `Due Date: ${itemToDisplay.duedate}`;
        description.textContent = `Description: ${itemToDisplay.description}`;
        priority.textContent = `Priority: ${itemToDisplay.priority}`;

        container.append(title, duedate, description, priority);
        main.appendChild(container);

        return main;
    }

    return { displayTask }
})()

export { renderTask }