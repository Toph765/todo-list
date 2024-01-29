const AddtoList = (() => {
    let TodoList = [];

    function addToList(task) {
        TodoList.push(task);
        console.log(TodoList);
    }

    function removeTask(id) {
        return TodoList = TodoList.filter(task => id !== task.id);
    }

    return { addToList, TodoList, removeTask };
})()


export { AddtoList }