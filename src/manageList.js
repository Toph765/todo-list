const AddtoList = (() => {
    let TodoList = [];

    function addToList(task) {
        TodoList.push(task);
        console.log(TodoList);
    }

    return { addToList, TodoList };
})()


export { AddtoList }