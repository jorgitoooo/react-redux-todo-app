export const getTodoList = state => state.todo.todos

export const deleteTodoItemById = (state, id) => {
    console.log(getTodoList(state))
    return getTodoList(state).filter(item => item.id !== id)
}